            // Controller
            class ctrCalculator {
                constructor() {
                    this.mode = null;
                }

                getMode() {
                    return this.mode;
                }

                setMode(mode) {
                    this.mode = mode;
                }

                checkNum(value) {
                    const number = parseFloat(value);
                    if (isNaN(number) || number < 0 || number > 10000) {
                        alert('Each number should be within the range 0-10000');
                        return false;
                    }
                    return true;
                }

                checkOperator(value) {
                    const expression = document.getElementById('display').value;
                    const operators = expression.split(/[0-9.]/).filter(item => item);
                
                    if (operators.length > 1 && !isNaN(value)) {
                        const nonEmptyOperators = expression.split(/[\+\-\*\/]/).filter(item => item !== '');

                        if(nonEmptyOperators.length > 1) {
                            document.getElementById('display').value = 'Must use multiple operators only (+, -, *, /)';
                            return false;
                        }
                    }
                
                    if (operators.length > 2) {
                        document.getElementById('display').value = 'Error: Only max 3 numbers are allowed in one expression';
                        return false;
                    }
                
                    // Check for multiplication expression with two numbers
                    if (operators.length === 1 && operators[0] === '*') {
                        const operands = expression.split('*');
                        const [num1, num2] = operands.map(parseFloat);
                
                        // Validate the ranges for num1 and num2 in the case of multiplication
                        if (!((Number.isInteger(num1) && num1 >= 0 && num1 <= 9999) &&
                            (Number.isInteger(num2) && num2 >= 0 && num2 <= 9) || num2 === 10 || num2 === 100 || num2 === 1000) || !(num1 >= 0 && num1 <= 9999)) {
                            alert("Error: Multiplication operands must satisfy the constraints where 0 <= a <= 9,999 and 0 <= b <= 9 || b=10  || b=100  || b=1000");

                            return false;
                        }
                    } else if (operators.length === 2 && operators.includes('*')) {
                        document.getElementById('display').value = 'Error: Only max 2 numbers are allowed in multiplication expression';
                        return false;
                    }
                
                    // Check for division expression with two numbers
                    if (operators.length === 1 && operators[0] === '/') {
                        const operands = expression.split('/');
                        const [num1, num2] = operands.map(parseFloat);
                
                        // Validate the ranges for num1 and num2 in the case of division
                        if (!((Number.isInteger(num2) && num2 >= 1 && num2 <= 9) || num2 === 10 || num2 === 100 || num2 === 1000) || 
                        !(Number.isInteger(num1) && num1 >= 0 && num1 <= 10000)) {
                            alert("Error: Division operands must satisfy the constraints where 0 <= a <= 10,000 and 1 <= b <= 9 || b=10  || b=100  || b=1000");

                            return false;
                        }
                    } else if (operators.length === 2 && operators.includes('/')) {
                        document.getElementById('display').value = 'Error: Only max 2 numbers are allowed in one expression';
                        return false;
                    }
                
                    return true;
                }

                checkResult(result) {
                    return result >= 0 && result <= 10000;
                }

                calculate() {
                    const expression = document.getElementById('display').value;

                    try {
                        const result = eval(expression);
                        
                        if (expression.includes('/') && !Number.isInteger(result)) {
                            if (result === Infinity || result === -Infinity) {
                                calculatorUI.displayError('Error: Cannot divide by 0');
                            }
                            
                            else{
                                alert('There is remainder');
                                calculatorUI.displayResult(result);
                            }
                            
                        }

                        else if (this.checkResult(result)) {
                            calculatorUI.displayResult(result);
                        } 
                        
                        else {
                            // Display an error message using CalculatorUI method
                            calculatorUI.displayError('Error: Result out of range (0-10000)');
                        }
                    } catch (error) {
                        // Display an error message using CalculatorUI method
                        alert('Expression is not complete');
                        calculatorUI.displayError('Error: Do not end with an operator');
                    }
                }
            }

            // View
            class CalculatorUI {
                constructor(calculator) {
                    this.calculator = calculator;
                    this.calculationLayout();
                }
                
                selectMode() {
                    const mode = this.calculator.getMode();
                    console.log(`Selected mode: ${mode}`);
                }
                
                calculationLayout() {
                    this.createButton('7');
                    this.createButton('8');
                    this.createButton('9');
                    this.createButton('+', 'operation');

                    this.createButton('4');
                    this.createButton('5');
                    this.createButton('6');
                    this.createButton('-', 'operation');

                    this.createButton('1');
                    this.createButton('2');
                    this.createButton('3');
                    this.createButton('*', 'operation');

                    this.createButton('.');
                    this.createButton('0');
                    this.createButton('=', 'operation');
                    this.createButton('/', 'operation');
                }

                createButton(value, className = '') {
                    const button = document.createElement('button');
                    button.textContent = value;
                    button.className = className || 'number';
                    button.onclick = () => {
                        if (value === '=') {
                            this.enterEqual();
                        } else {
                            if (isNaN(value)) {
                                this.enterInputOperator(value);
                            } else {
                                this.enterInputNumber(value);
                            }
                        }
                    };
                    document.getElementById('calculator-keys').appendChild(button);
                }

                enterInputNumber(value) {
                    // Implement the logic for entering numbers
                    if (this.calculator.checkNum(value)) {
                        const currentValue = document.getElementById('display').value;
                        const newValue = currentValue + value;

                        // Display alert if the input number is greater than 10000
                        if (parseFloat(newValue) > 10000) {
                            alert('Number range is 0-10000');
                            return;
                        }

                        document.getElementById('display').value = newValue;
                    }
                }

                enterInputOperator(value) {
                    if(this.calculator.checkOperator(value)) {
                        // Implement the logic for entering operators
                    const currentValue = document.getElementById('display').value;

                    // Check if the last character is an operator
                    const lastChar = currentValue.charAt(currentValue.length - 1);
                    if (isNaN(lastChar) && lastChar !== '.') {
                        // Replace the last operator with the new one
                        const newValue = currentValue.slice(0, -1) + value;
                        document.getElementById('display').value = newValue;
                    } else {
                        const newValue = currentValue + value;
                        document.getElementById('display').value = newValue;
                    }
                    }
                }

                enterEqual() {
                    if (this.validateExpression()) {
                        const result = this.calculator.calculate();
                        if (result !== undefined) {
                            // Display the result using CalculatorUI method
                            this.displayResult(result);
                        }
                    }
                }

                clearDisplay() {
                    document.getElementById('display').value = '';
                }

                backspace() {
                    const currentValue = document.getElementById('display').value;
                    document.getElementById('display').value = currentValue.slice(0, -1);
                }

                validateExpression() {
                    // Call the checkNum and checkOperator functions
                    const isNumValid = this.calculator.checkNum(document.getElementById('display').value);
                    const isOperatorValid = this.calculator.checkOperator(document.getElementById('display').value);

                    // Check the results of the checks
                    if (!isNumValid || !isOperatorValid) {
                        return false;
                    }
            
                    return true;
                }
                

                displayResult(result) {
                    // Display the result in the calculator display
                    document.getElementById('display').value = parseFloat(result.toFixed(2));
                }

                displayError(error) {
                    // Display an error message in the calculator display
                    document.getElementById('display').value = error;
                }
            }

            
            class Student {
                constructor(calculator, calculatorUI) {
                    this.calculator = calculator;
                    this.calculatorUI = calculatorUI;
                }

            }

            const calculator = new ctrCalculator();
            const calculatorUI = new CalculatorUI(calculator);
            const student = new Student(calculator, calculatorUI);
