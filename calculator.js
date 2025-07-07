// calculator.js

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
}

// View
class CalculatorUI {
    constructor(calculator) {
        this.calculator = calculator;
        this.titleContainer = document.createElement('div');
        this.titleContainer.className = 'title-container';

        this.buttonContainer = document.createElement('div');
        this.buttonContainer.className = 'button-container';

        this.initializeUI();
    }
    
    selectMode() {
        const mode = this.calculator.getMode();
        console.log(`Selected mode: ${mode}`);
    }

    initializeUI() {
        this.createTitle();
        this.createButtons();

        document.body.appendChild(this.titleContainer);
        document.body.appendChild(this.buttonContainer);
    }

    createTitle() {
        const title = document.createElement('h1');
        title.className = 'title';
        title.textContent = 'WELCOME TO MYKSSR CALCULATOR';
        this.titleContainer.appendChild(title);
    }

    createButton(mode, label) {
        const button = document.createElement('a');
        button.className = 'calculator-option';
        button.textContent = label;
        button.href = '#'; // Prevents default anchor behavior
        button.addEventListener('click', () => this.handleButtonClick(mode));
        this.buttonContainer.appendChild(button);
    }

    createButtons() {
        this.createButton('calc1.html', 'YEAR 1', 'option-1');
        this.createButton('calc2.html', 'YEAR 2', 'option-2');
        this.createButton('calc3.html', 'YEAR 3', 'option-3');
    }
    
    createButton(mode, label, colorClass) {
        const button = document.createElement('a');
        button.className = `calculator-option ${colorClass}`;
        button.textContent = label;
        button.href = '#'; // Prevents default anchor behavior
        button.addEventListener('click', () => this.handleButtonClick(mode));
        button.id = colorClass; // Set the ID based on the color class
        this.buttonContainer.appendChild(button);
    }

    handleButtonClick(mode) {
        this.calculator.setMode(mode);
        this.updateUI();
    }

    updateUI() {
        const mode = this.calculator.getMode();
        // Perform actual page redirection
        window.location.href = mode;
    }
    
}


class Student {
    constructor(calculator) {
        this.calculator = calculator;
    }
}

// Initialize the application
const calculator = new ctrCalculator();
const calculatorUI = new CalculatorUI(calculator);
const student = new Student(calculator);
