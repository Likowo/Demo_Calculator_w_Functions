// JavaScript 30 for 30

// QuerySelector: Navigates to an HTML tag ( The DOM) by the class name and targets it.

// For this Calculator App,First, make the clear screen button functional, so you can use it to clear the screen when you click other buttons. NB: Codes read from top to bottom chronologically.What ever code you write at the beging of your coding, will be read first and can affect subsequent codes if needed.

// How to make the Clear (CLR) button functional to clear screenBar
    //1) Select the element from the DOM using querryselector
let screenBar = document.querySelector('.screenBar')
    // Declare a function  that will make the CLR button functional when clicked. Use the Arrow Function , the .innerHTML property to go in to the HTML tag and change(update) it's content to the new data you assign it to, and the HTML onClick() method to make the button clickable.
const clearScreenBar = () => {
 screenBar.innerHTML = ""; 
}

// Once clicked/initialized --- I want the num key to show its value to the screen. Use the append() method to make the numbers appear on the screen. Pass number as both the parameter and argument.
const upLoadToScreen = (number) => {
    screenBar.innerHTML = "";
    screenBar.append(number)   
}


