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
// const decrementButton = document.getElementById('decrementButton');
// const incrementButton = document.getElementById('incrementButton');
// const counterDisplay = document.getElementById('counter');

// // Stel een startwaarde in
// let counterValue = 1;

// // Voeg functionaliteit toe aan de '-' knop
// decrementButton.addEventListener('click', () => {
//     if (counterValue > 0) { // Controleer of de waarde niet onder 0 komt
//         counterValue--;
//         counterDisplay.textContent = counterValue; // Werk de weergave bij
//     }
// });

// // Voeg functionaliteit toe aan de '+' knop
// incrementButton.addEventListener('click', () => {
//     if (counterValue < 5){
//     counterValue++;
//     counterDisplay.textContent = counterValue; // Werk de weergave bij
//     }
// });

// document.querySelectorAll('.Bchoose-button2').forEach(button => {
//     button.addEventListener('click', function() {
//         // Remove the clicked class from all Bchoice elements
//         document.querySelectorAll('.Bchoice').forEach(choice => {
//             choice.classList.remove('Bchoice-clicked');
//         });
//         // Add the clicked class to the parent Bchoice element
//         this.closest('.Bchoice').classList.add('Bchoice-clicked');
        
//         // Remove the clicked class from all buttons
//         document.querySelectorAll('.Bchoose-button2').forEach(btn => {
//             btn.classList.remove('Bchoose-button2-clicked');
//             btn.textContent = 'Kiezen'; // Reset text to 'Kiezen'
//         });
//         // Add the clicked class to the clicked button
//         this.classList.add('Bchoose-button2-clicked');
//         this.textContent = 'Gekozen'; // Change text to 'Gekozen'
//     });
// });


// document.querySelectorAll('.Echoosebutton').forEach(button => {
//     button.addEventListener('click', function() {
//         // Remove the clicked class from all Eoption elements
//         document.querySelectorAll('.Eoption').forEach(container => {
//             container.classList.remove('Eoption-clicked');
//         });
//         // Add the clicked class to the parent Eoption element
//         this.closest('.Eoption').classList.add('Eoption-clicked');
        
//         // Remove the clicked class from all buttons and reset text
//         document.querySelectorAll('.Echoosebutton').forEach(btn => {
//             btn.classList.remove('Echoosebutton-clicked');
//             btn.textContent = 'Kiezen'; // Reset text to 'Kiezen'
//         });
//         // Change text of the clicked button to 'Gekozen' and add clicked class
//         this.textContent = 'Gekozen';
//         this.classList.add('Echoosebutton-clicked');
//     });
// });


// document.querySelectorAll('.Bchoose-button2').forEach(button => {
//     button.addEventListener('click', function() {
//         // Remove the clicked class from all Eoption elements
//         document.querySelectorAll('.Bchoice-Extra-ZEKUR').forEach(container => {
//             container.classList.remove('Bchoice-Extra-ZEKUR-clicked');
//         });
//         // Add the clicked class to the parent Bchoice-Extra-ZEKUR element
//         this.closest('.Bchoice-Extra-ZEKUR').classList.add('Bchoice-Extra-ZEKUR-clicked');
        
//         // Remove the clicked class from all buttons and reset text
//         document.querySelectorAll('.Bchoose-button2').forEach(btn => {
//             btn.classList.remove('Bchoose-button2-clicked');
//             btn.textContent = 'Kiezen'; // Reset text to 'Kiezen'
//         });
//         // Change text of the clicked button to 'Gekozen' and add clicked class
//         this.textContent = 'Gekozen';
//         this.classList.add('Bchoose-button2-clicked');
//     });
// });

// document.querySelectorAll('.Bchoose-button2').forEach(button => {
//     button.addEventListener('click', function() {
//         // Add the clicked class to the parent Bchoice-Extra-ZEKUR element
//         this.closest('.Bchoice-Extra-ZEKUR').classList.add('Bchoice-Extra-ZEKUR-clicked');
        
//         // Change text of the clicked button to 'Gekozen' and add clicked class
//         this.textContent = 'Gekozen';
//         this.classList.add('Bchoose-button2-clicked');
//     });
// });

// document.querySelectorAll('.Bchoose-button3').forEach(button => {
//     button.addEventListener('click', function() {
//         const parent = this.closest('.Bchoice-Ongevallen');
//         if (this.classList.contains('Bchoose-button3-clicked')) {
//             // Remove the clicked class from the parent element and reset text
//             parent.classList.remove('Bchoice-Ongevallen-clicked');
//             this.classList.remove('Bchoose-button3-clicked');
//             this.textContent = 'Kiezen';
//         } else {
//             // Add the clicked class to the parent element and change text
//             parent.classList.add('Bchoice-Ongevallen-clicked');
//             this.classList.add('Bchoose-button3-clicked');
//             this.textContent = 'Gekozen';
//         }
//     });
// });


// receipt
// const cart = []
// let totalPrice = 0

// function addToCart() {
//     const item = {
//         name: event.target.closest('Bchoice').querySelector('Bchoice-top-left').textContent,
//         price: event.target.closest('Bchoice').querySelector('Bprice').textContent

//     };

//     cart.push(item);

//     const numericPrice = parseFloat(item.price.replace(/[^0-9,.]/g, '').replace(',', '.'));
//     totalPrice += numericPrice;

//     displayCart();
// }

// function displayCart() {
//     const cartItemsContainer = document.getElementById('receipt-list');
//     cartItemsContainer.innerHTML = ''; // Clear the previous items

//     cart.forEach((item, index) => {
//         const li = document.createElement('li');
//         li.className = "receipt-item"
//         li.textContent = `${item.name} - ${item.price}`;

//         // Add a remove button for each item
//         const removeButton = document.createElement('button');
//         removeButton.className = "removeButton"
//         removeButton.textContent = 'Remove';
//         removeButton.addEventListener('click', () => {
//             removeFromCart(index, item);
//         });

//         li.appendChild(removeButton);
//         cartItemsContainer.appendChild(li);
//     });


//     document.getElementById("toto").innerHTML = totalPrice.toFixed(2);
// }


// begin bonnetje code


