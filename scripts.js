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



document.querySelectorAll('.Kchoosebutton').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default button behavior

        // Deselect all buttons
        document.querySelectorAll('.Kchoosebutton').forEach(btn => btn.classList.remove('selected'));

        // Mark the clicked button as selected
        button.classList.add('selected');

        // Find and select the radio button inside the clicked button
        const radioInput = button.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;

            // Update the output
            document.getElementById('output').textContent = `You selected: ${radioInput.value}`;
        }
    });
});


document.querySelectorAll('.Kchoosebutton').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default button behavior

        // Deselect all buttons
        document.querySelectorAll('.Kchoosebutton').forEach(btn => btn.classList.remove('selected'));

        // Mark the clicked button as selected
        button.classList.add('selected');

        // Find and select the radio button inside the clicked button
        const radioInput = button.querySelector('input[type="radio"]');
        if (radioInput) {
            radioInput.checked = true;

            // Update the output
            document.getElementById('output').textContent = `You selected: ${radioInput.value}`;
        }
    });
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
