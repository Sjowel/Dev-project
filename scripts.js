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
