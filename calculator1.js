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
                    if (isNaN(number) || number < 0 || number > 100) {
                        alert('Each number should be within the range 0-100');
                        return false;
                    }
                    return true;
                }

                checkOperator(value) {
                    const expression = document.getElementById('display').value;
                    const operators = expression.split(/[0-9]/).filter(item => item);

                    if (operators.length > 1) {
                        alert('Error: Must use at max 2 numbers only');
                        return false;
                    }
            
                    return true;
                }

                checkResult(result) {
                    return result >= 0 && result <= 100;
                }

                calculate() {
                    const expression = document.getElementById('display').value;

                    try {
                        const result = eval(expression);

                        if (this.checkResult(result)) {
                            // Display the result using CalculatorUI method
                            calculatorUI.displayResult(result);
                        } else {
                            // Display an error message using CalculatorUI method
                            calculatorUI.displayError('Error: Result out of range (0-100)');
                        }
                    } catch (error) {
                        // Display an error message using CalculatorUI method
                        calculatorUI.displayError('Error');
                    }
                }
            }

            // View
            class CalculatorUI {
                constructor(calculator) {
                    this.calculator = calculator;
                    this.calculationLayout();
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
                    this.createButton('=', 'operation');

                    this.createButton('0');
                }
                
                selectMode() {
                    const mode = this.calculator.getMode();
                    console.log(`Selected mode: ${mode}`);
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

                        // Display alert if the input number is greater than 100
                        if (parseFloat(newValue) > 100) {
                            alert('Number range is 0-100');
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
                    document.getElementById('display').value = result;
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
