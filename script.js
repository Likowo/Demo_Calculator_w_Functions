// JavaScript 30 for 30

// QuerSelector: Navigates to an HTML tag by the class name and target it's element
let screenBar = document.querySelector('.screenBar')

// Once clicked/initialized --- I want the num key to show its value to the screen
const upLoadToScreen = (number) => {
    screenBar.append(number)
}

// Clear (CLR) button Fxn to clear screenBar
const clearScreenBar = () => {
    screenBar.innerHTML = "";
  }
  
