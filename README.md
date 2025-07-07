# MYKSSR Calculator

A web-based calculator application designed for educational purposes, featuring multiple calculator implementations for different year levels. This project demonstrates the Model-View-Controller (MVC) architecture pattern in JavaScript.

## 🚀 Features

- **Multi-Year Calculator System**: Three different calculator implementations for Year 1, Year 2, and Year 3
- **MVC Architecture**: Clean separation of concerns using Controller, View, and Model classes
- **Input Validation**: Comprehensive validation for numbers (0-100 range) and operators
- **Responsive Design**: Modern UI with hover effects and smooth transitions
- **Navigation**: Easy navigation between different calculator modes and home page

## 📁 Project Structure

```
c/
├── index.html              # Main landing page with calculator selection
├── calc1.html              # Year 1 calculator interface
├── calc2.html              # Year 2 calculator interface  
├── calc3.html              # Year 3 calculator interface
├── calculator.js           # Main controller and UI logic
├── calculator1.js          # Year 1 calculator implementation
├── calculator2.js          # Year 2 calculator implementation
├── calculator3.js          # Year 3 calculator implementation
└── resource/
    ├── style.css           # Main stylesheet
    ├── bg1.jpeg            # Background image
    └── bg2.jpeg            # Additional background image
```

## 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** pattern:

### Controller (`ctrCalculator`)
- Manages calculator state and mode
- Handles input validation
- Performs calculations
- Validates results within acceptable ranges

### View (`CalculatorUI`)
- Creates and manages the user interface
- Handles user interactions
- Displays results and error messages
- Manages button creation and event handling

### Model (`Student`)
- Represents the user/student entity
- Can be extended for additional functionality

## 🎯 Calculator Features

### Input Validation
- **Number Range**: All numbers must be between 0-100
- **Operator Limits**: Maximum of 2 numbers per calculation
- **Result Validation**: Results must stay within 0-100 range

### User Interface
- **Clean Design**: Modern calculator interface with grid layout
- **Color-Coded Options**: Different colors for each year level
- **Interactive Elements**: Hover effects and smooth transitions
- **Navigation**: Home button for easy navigation back to main menu

### Calculator Operations
- Basic arithmetic operations (+, -, *, /)
- Clear function (AC)
- Backspace function (⌫)
- Real-time input validation

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. Select your desired calculator mode (Year 1, 2, or 3)

### Usage
1. **Main Menu**: Choose from Year 1, Year 2, or Year 3 calculators
2. **Calculator Interface**: 
   - Enter numbers (0-100 range)
   - Use operators for calculations
   - Press '=' to calculate results
   - Use 'AC' to clear or '⌫' to backspace
3. **Navigation**: Click 'HOME' to return to the main menu

## 🎨 Styling

The application uses a custom CSS framework with:
- **Responsive Design**: Adapts to different screen sizes
- **Color Scheme**: 
  - Year 1: Orange (#ffcc66)
  - Year 2: Blue (#66ccff) 
  - Year 3: Red (#ff6666)
- **Visual Effects**: Box shadows, hover animations, and smooth transitions
- **Background**: Custom background images for enhanced visual appeal

## 🔧 Technical Details

### JavaScript Classes
- `ctrCalculator`: Main controller class
- `CalculatorUI`: User interface management
- `Student`: User model class

### Key Methods
- `checkNum()`: Validates number inputs
- `checkOperator()`: Validates operator usage
- `calculate()`: Performs calculations with error handling
- `displayResult()`: Shows calculation results
- `displayError()`: Shows error messages

### Event Handling
- Click events for calculator buttons
- Keyboard input support
- Navigation between calculator modes

## 📝 License

This project is created for educational purposes as part of CSC577 coursework.

## 👨‍💻 Development

This project demonstrates:
- Object-oriented programming in JavaScript
- MVC architecture implementation
- Input validation and error handling
- Responsive web design
- Event-driven programming

---

**Note**: This calculator is designed for educational use and includes specific validation rules suitable for academic contexts. 
