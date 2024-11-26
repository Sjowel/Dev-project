// Select the buttons and the SVG element
const buttonDown = document.querySelector('.nav-font-size-button-down');
const buttonUp = document.querySelector('.nav-font-size-button-up');
const svgElement = document.querySelector('.nav-font-size-section svg');

// Function to change the size of the SVG element
function changeFontSize(increment) {
    const currentWidth = svgElement.getAttribute('width');
    const currentHeight = svgElement.getAttribute('height');
    const newWidth = parseInt(currentWidth) + increment;
    const newHeight = parseInt(currentHeight) + increment;

    svgElement.setAttribute('width', newWidth);
    svgElement.setAttribute('height', newHeight);
}

// Add event listeners to the buttons
buttonDown.addEventListener('click', () => changeFontSize(-4));
buttonUp.addEventListener('click', () => changeFontSize(4));


window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const navTopBar = document.querySelector('.nav-top-bar');
    const navBottomBar = document.querySelector('.nav-bottom-bar');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
        navTopBar.classList.add('scrolled');
        navBottomBar.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        navTopBar.classList.remove('scrolled');
        navBottomBar.classList.remove('scrolled');
    }
});



document.getElementById('font-size-button-down').addEventListener('click', function() {
    adjustFontSize(-1);
});

document.getElementById('font-size-button-up').addEventListener('click', function() {
    adjustFontSize(1);
});

function adjustFontSize(change) {
    const elements = document.querySelectorAll('h1, h2, h3, h5, a, p, button, li');
    elements.forEach(element => {
        const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
        const currentSize = parseFloat(style);
        const newSize = currentSize + change;

        // Ensure the new size is within the range of -3 to +3 from the original size
        const originalSize = parseFloat(element.getAttribute('data-original-size') || currentSize);
        if (newSize >= originalSize - 2 && newSize <= originalSize + 2) {
            element.style.fontSize = newSize + 'px';
        }
    });
}

// Store the original font size for each element
document.querySelectorAll('h1, h2, h3, h5, a, p, button, li').forEach(element => {
    const style = window.getComputedStyle(element, null).getPropertyValue('font-size');
    element.setAttribute('data-original-size', parseFloat(style));
});

// Kinderen meeverzekeren 

function toggleChildSelect() {
    const childSelect = document.getElementById('childSelect');
    const radios = document.getElementsByName('kind');
    let selectedValue = null;

    // Loop through the radio buttons to find the selected one
    for (const radio of radios) {
        if (radio.checked) {
            selectedValue = radio.value;
            break; // Stop looping once we find the selected radio
        }
    }

    // Show or hide the Child-Select section based on the selected value
    if (selectedValue === "Yes") {
        childSelect.style.display = "block"; // Show when "Yes" is selected
    } else {
        childSelect.style.display = "none"; // Hide otherwise
    }
}

// Initialize the visibility on page load
toggleChildSelect();


// + of - kind

// Selecteer de elementen
const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');
const counterDisplay = document.getElementById('counter');

// Stel een startwaarde in
let counterValue = 1;

// Voeg functionaliteit toe aan de '-' knop
decrementButton.addEventListener('click', () => {
    if (counterValue > 0) { // Controleer of de waarde niet onder 0 komt
        counterValue--;
        counterDisplay.textContent = counterValue; // Werk de weergave bij
    }
});

// Voeg functionaliteit toe aan de '+' knop
incrementButton.addEventListener('click', () => {
    if (counterValue < 5){
    counterValue++;
    counterDisplay.textContent = counterValue; // Werk de weergave bij
    }
});

