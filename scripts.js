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

<script>
        // JavaScript to handle radio button selection
        document.getElementById("submitButton").addEventListener("click", function() {
            // Get all radio buttons in the form
            const radioButtons = document.querySelectorAll('input[name="plan"]');
            let selectedValue = "";

            // Loop through the radio buttons to find the checked one
            for (const radioButton of radioButtons) {
                if (radioButton.checked) {
                    selectedValue = radioButton.value;
                    break;
                }
            }
</script>