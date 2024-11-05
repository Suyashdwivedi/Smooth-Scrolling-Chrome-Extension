# Smooth Scrolling Chrome Extension

## Overview

This Chrome extension enables users to smoothly scroll up and down web pages using two buttons. The buttons are styled with a light yellow background and are round in shape, providing an intuitive user experience.

## Features

- **Smooth Scrolling**: Scrolls smoothly when buttons are pressed.
- **Customizable Appearance**: Buttons have a light yellow background with 50% transparency and rounded edges.
- **Easy Installation**: Simple steps to install and set up the extension.

## Author

**Suyash Dwivedi**  
[User:Suyash.dwivedi](https://meta.wikimedia.org/wiki/User:Suyash.dwivedi)  

![Suyash Dwivedi](https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Suyash_Dwivedi_01%28cropped%29.jpg/180px-Suyash_Dwivedi_01%28cropped%29.jpg)

## Prerequisites

- Google Chrome browser installed on your computer.
- Basic understanding of file management on your operating system.

## Installation Steps

### Step 1: Download Required Files

1. **Create a New Folder**:
   - Create a new folder on your computer where you will store the extension files. You can name it `SmoothScrollingExtension`.

2. **Download jQuery**:
   - Download jQuery from the following link:
     - [Download jQuery](https://code.jquery.com/jquery-3.6.0.min.js){:target="_blank"}
   - Save the file as `jquery.min.js` in your `SmoothScrollingExtension` folder.

3. **Download DOMPurify**:
   - Download DOMPurify from the following link:
     - [Download DOMPurify](https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.7/purify.min.js){:target="_blank"}
   - Save the file as `dompurify.min.js` in your `SmoothScrollingExtension` folder.

4. **Create Other Files**:
   - Create the following files in your `SmoothScrollingExtension` folder:

   - **manifest.json**:
     ```json
     {
       "manifest_version": 3,
       "name": "Smooth Scrolling Extension",
       "version": "1.0",
       "description": "An extension to manipulate web pages with smooth scrolling.",
       "permissions": ["activeTab"],
       "action": {
         "default_popup": "popup.html",
         "default_icon": {
           "16": "icon16.png",
           "48": "icon48.png",
           "128": "icon128.png"
         }
       },
       "content_scripts": [
         {
           "matches": ["<all_urls>"],
           "js": ["jquery.min.js", "dompurify.min.js", "content.js"]
         }
       ],
       "icons": {
         "16": "icon16.png",
         "48": "icon48.png",
         "128": "icon128.png"
       }
     }
     ```

   - **popup.html**:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Smooth Scrolling Extension</title>
         <script src="jquery.min.js"></script>
         <script src="dompurify.min.js"></script>
         <script src="popup.js"></script>
     </head>
     <body>
         <h1>Welcome to Smooth Scrolling!</h1>
         <button id="actionButton">Click Me</button>
     </body>
     </html>
     ```

   - **popup.js**:
     ```javascript
     $(document).ready(function() {
         $('#actionButton').click(function() {
             alert('Button clicked!');
             // Additional functionality can be added here.
         });
     });
     ```

   - **content.js**:
     ```javascript
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
             color: 'black', // Text color for contrast
             border: 'none',
             borderRadius: '50%', // Round shape
             padding: '15px', // Padding for size
             fontSize: '20px', // Font size for visibility
             cursor: 'pointer'
         });

         const scrollButtonBottom = $('<button id="scrollToBottom">▼</button>').css({
             position: 'fixed',
             bottom: '60px',
             right: '20px',
             zIndex: '1000',
             backgroundColor: 'rgba(255, 255, 224, 0.5)', // Light yellow with 50% transparency
             color: 'black', // Text color for contrast
             border: 'none',
             borderRadius: '50%', // Round shape
             padding: '15px', // Padding for size
             fontSize: '20px', // Font size for visibility
             cursor: 'pointer'
         });

         $('body').append(scrollButtonTop, scrollButtonBottom);

         let scrollInterval;

         // Function to start scrolling up
         function startScrollingUp() {
             scrollInterval = setInterval(function() {
                 window.scrollBy(0, -10); // Adjust value for scrolling speed
             }, 50); // Interval for smoother scrolling
         }

         // Function to start scrolling down
         function startScrollingDown() {
             scrollInterval = setInterval(function() {
                 window.scrollBy(0, 10); // Adjust value for scrolling speed
             }, 50); // Interval for smoother scrolling
         }

         // Stop scrolling when button is released or mouse leaves button area
         function stopScrolling() {
             clearInterval(scrollInterval);
         }

         // Event listeners for buttons
         scrollButtonTop.mousedown(startScrollingUp);
         scrollButtonTop.mouseup(stopScrolling);
         scrollButtonTop.mouseleave(stopScrolling); 

         scrollButtonBottom.mousedown(startScrollingDown);
         scrollButtonBottom.mouseup(stopScrolling);
         scrollButtonBottom.mouseleave(stopScrolling); 
     });
     ```

### Step 2: Add Icons

You can create simple placeholder icons or download them from free icon resources. Make sure to name them as follows and place them in your extension folder:

- `icon16.png`
- `icon48.png`
- `icon128.png`

## Step 3: Load Your Extension in Chrome

1. **Open Chrome**:
   - Launch the Google Chrome browser.

2. **Go to Extensions Page**:
   - Type `chrome://extensions/` in the address bar and press Enter.

3. **Enable Developer Mode**:
   - Toggle the switch at the top right corner of the page to enable **Developer mode**.

4. **Load Unpacked Extension**:
   - Click on the **Load unpacked** button.
   - Select the folder (`SmoothScrollingExtension`) where you saved your extension files.

5. **Verify Installation**:
   - Your extension should now appear in the list of installed extensions.

## Step 4: Test Your Extension

1. **Open Any Webpage**:
   - Navigate to any webpage where you want to test the extension.

2. **Click on the Extension Icon**:
   - Click on your extension icon in the Chrome toolbar to open the popup.

3. **Test Button Functionality**:
   - Click on the “Click Me” button in the popup to see if it works.
   - On any webpage, press and hold ▲ or ▼ buttons to test smooth scrolling up or down.
   - Release the button to stop scrolling.

## Troubleshooting

If you encounter any issues:

- Ensure all files are correctly named and located in the same directory.
- Check for any errors in the Developer Console (`F12` or right-click > Inspect > Console).
- Make sure jQuery and DOMPurify are loaded correctly without CSP violations.

## Conclusion

You have successfully installed and set up a Chrome extension that allows smooth scrolling on web pages using buttons! If you have any further questions or need additional assistance, feel free to ask!
