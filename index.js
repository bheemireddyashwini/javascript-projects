// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const prompt = require('prompt-sync')({ sigint: true });

// Test that prompt is working 
let name = prompt('What is your name? ');
console.log(`User's input is: ${name} Let's play a game of BUlls and Cows!`);


//  generating a random 4-digit number with unique digits


function generateSecretNumber() {
    let digits = [];
    while (digits.length < 4) {
        let randomDigit = Math.floor(Math.random() * 10);
        if (!digits.includes(randomDigit)) {
            digits.push(randomDigit);
        }
    }
    return digits.join('');
}

// function to check if a string has all unique digits
function isUnique(number) {
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] === number[j]) {
                return false; // Duplicate found
            }
        }
    }
    return true; // No duplicates
}

const secretNumber = generateSecretNumber();
let attempts = 0;

while (true) {
    let guess = prompt('Enter your 4-digit guess with unique digits: ');
    
    // Validate that the input is a 4-digit number with unique digits
    if (guess.length !== 4 || isNaN(guess) || !isUnique(guess)) {
        console.log('Please enter a valid 4-digit number with unique digits.');
        continue;
    }
    
    attempts++;
    
    let bulls = 0;
    let cows = 0;
    
    for (let i = 0; i < 4; i++) {
        if (guess[i] === secretNumber[i]) {
            bulls++;
        } else if (secretNumber.includes(guess[i])) {
            cows++;
        }
    }
    
    if (bulls === 4) {
        console.log(`Congratulations, ${name}! You've guessed the number ${secretNumber} in ${attempts} attempts!`);
        break;
    } else {
        console.log(`Bulls: ${bulls}, Cows: ${cows}. Try again!`);
    }
}   