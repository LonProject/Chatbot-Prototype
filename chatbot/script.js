// script.js

// Create a terminal instance
const term = new Terminal();

// Attach the terminal to the DOM element
term.open(document.getElementById('terminal'));

// Initialize the terminal
term.write('Welcome to the Web CLI!\r\n');

// Handle user input
term.onData(e => {
    // Handle the Enter key press
    if (e === '\r') {
        term.write('\r\n$ '); // Display the prompt
    } else {
        term.write(e); // Echo the user's input
    }
});
