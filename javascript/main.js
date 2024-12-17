// ------------------------- Burger Menu Javascript ------------------------------//
// Wait for the DOM content to load fully before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Now that the header is part of the page, no need for fetching, we can directly access elements

    // Select the burger menu icon
    const burgerMenu = document.querySelector('.menu-icon');
    // Select the navigation menu container
    const navLinks = document.querySelector('.nav-links');

    // Add a click event listener to the burger menu icon
    burgerMenu.addEventListener('click', () => {
        // Toggle the 'active' class on the navLinks element to show or hide the menu
        navLinks.classList.toggle('active');
    });

    // Add a click event listener to the entire document to handle clicks outside the menu
    document.addEventListener('click', (event) => {
        // If the click is outside the navigation menu and the burger menu icon
        if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            // Remove the 'active' class from navLinks to close the menu
            navLinks.classList.remove('active');
        }
    });

    // Select all dropdown icons inside the menu
    const dropdownIcons = document.querySelectorAll('.dropdown-icon');
    // Loop through each dropdown icon
    dropdownIcons.forEach((icon) => {
        // Add a click event listener to each dropdown icon
        icon.addEventListener('click', (event) => {
            // Prevent the click from propagating to parent elements
            event.stopPropagation();
            // Find the closest parent menu item of the clicked dropdown icon
            const parentItem = icon.closest('.menu-item');
            // Toggle the 'active' class on the parent menu item to show or hide the dropdown
            parentItem.classList.toggle('active');
        });
    });
});


// ------------------------- Scroll Function for Picture Galleries ------------------------------//

function initializeGalleryScrolling(containerSelector, leftArrowSelector, rightArrowSelector, scrollDistance) {
    // Select the container and arrow elements
    const container = document.querySelector(containerSelector);
    const leftArrow = document.querySelector(leftArrowSelector);
    const rightArrow = document.querySelector(rightArrowSelector);

    // Check if all elements are found; log a warning if any are missing
    if (!container || !leftArrow || !rightArrow) {
        console.warn(`One or more elements missing for ${containerSelector}`);
        return;
    }

    // Ensure smooth scrolling works even when content is not overflowing
    container.style.scrollBehavior = 'smooth'; // Apply smooth scrolling

    // Function to handle scrolling with wrap-around logic
    function handleScroll(scrollDirection) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth; // Maximum scroll position
        const currentScroll = container.scrollLeft;

        // Check if we need to loop the scroll back to the other end
        if (scrollDirection === 'left' && currentScroll === 0) {
            // If at the leftmost edge, scroll to the rightmost edge
            container.scrollLeft = maxScrollLeft;
        } else if (scrollDirection === 'right' && currentScroll === maxScrollLeft) {
            // If at the rightmost edge, scroll to the leftmost edge
            container.scrollLeft = 0;
        } else {
            // Otherwise, scroll normally
            container.scrollBy({
                left: scrollDirection === 'left' ? -scrollDistance : scrollDistance,
                behavior: 'smooth',
            });
        }
    }

    // Add click event listener to the left arrow for scrolling left
    leftArrow.addEventListener('click', () => {
        handleScroll('left');
    });

    // Add click event listener to the right arrow for scrolling right
    rightArrow.addEventListener('click', () => {
        handleScroll('right');
    });
}

// Initialize for the Food Image Gallery
initializeGalleryScrolling(
    '.image-gallery',                // Parent container selector
    '.image-gallery .view-more-left', // Left arrow selector
    '.image-gallery .view-more-right',// Right arrow selector
    300                              // Scroll distance
);

// Initialize for the Testimonials Section
initializeGalleryScrolling(
    '.testimonial-container',         // Parent container selector
    '.testimonials .view-more-left',  // Left arrow selector
    '.testimonials .view-more-right', // Right arrow selector
    300                               // Scroll distance
);

// ------------------------- Back to Top Bottom: Scroll to Top ------------------------------//
// JavaScript for "Back to Top" Button
document.addEventListener("DOMContentLoaded", function () {
    // Select the "Back to Top" button element
    const backToTopButton = document.querySelector('.back-to-top');

    // Show or hide the button based on the scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) { // Show the button after scrolling 200px down
            backToTopButton.style.display = 'flex'; // Make button visible
        } else {
            backToTopButton.style.display = 'none'; // Hide button when scroll is above 200px
        }
    });

    // Smooth scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0, // Scroll to the top of the page
            behavior: 'smooth' // Smooth scrolling effect
        });
    });
});
