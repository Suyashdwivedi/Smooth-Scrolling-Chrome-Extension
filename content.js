// Create Trusted Types policy if supported
if (window.trustedTypes && window.trustedTypes.createPolicy) {
    window.trustedTypes.createPolicy('default', {
        createHTML: (string) => string // Allow all HTML (use with caution)
    });
}

// Create Scroll Buttons
$(document).ready(function() {
    const scrollButtonTop = $('<button id="scrollToTop">▲</button>').css({
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
        backgroundColor: 'rgba(255, 255, 224, 0.5)', // Light yellow with 50% transparency
        color: 'green', // Change text color for better contrast
        border: 'none',
        borderRadius: '50%', // Make it round
        padding: '15px', // Adjust padding for better size
        fontSize: '20px', // Increase font size for visibility
        cursor: 'pointer'
    });

    const scrollButtonBottom = $('<button id="scrollToBottom">▼</button>').css({
        position: 'fixed',
        bottom: '60px',
        right: '20px',
        zIndex: '1000',
        backgroundColor: 'rgba(255, 255, 224, 0.5)', // Light yellow with 50% transparency
        color: 'red', // Change text color for better contrast
        border: 'none',
        borderRadius: '50%', // Make it round
        padding: '15px', // Adjust padding for better size
        fontSize: '20px', // Increase font size for visibility
        cursor: 'pointer'
    });

    $('body').append(scrollButtonTop, scrollButtonBottom);

    let scrollInterval;

    // Function to start scrolling up
    function startScrollingUp() {
        scrollInterval = setInterval(function() {
            window.scrollBy(0, -25); // Adjust the value for faster/slower scrolling
        }, 50); // Adjust the interval for smoother scrolling
    }

    // Function to start scrolling down
    function startScrollingDown() {
        scrollInterval = setInterval(function() {
            window.scrollBy(0, 25); // Adjust the value for faster/slower scrolling
        }, 50); // Adjust the interval for smoother scrolling
    }

    // Stop scrolling when button is released or mouse leaves button area
    function stopScrolling() {
        clearInterval(scrollInterval);
    }

    // Event listeners for buttons
    scrollButtonTop.mousedown(startScrollingUp);
    scrollButtonTop.mouseup(stopScrolling);
    scrollButtonTop.mouseleave(stopScrolling); // Stop scrolling if mouse leaves button

    scrollButtonBottom.mousedown(startScrollingDown);
    scrollButtonBottom.mouseup(stopScrolling);
    scrollButtonBottom.mouseleave(stopScrolling); // Stop scrolling if mouse leaves button
});
