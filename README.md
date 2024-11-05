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
     - [Download jQuery](https://code.jquery.com/jquery-3.6.0.min.js)
   - Save the file as `jquery.min.js` in your `SmoothScrollingExtension` folder.

3. **Download DOMPurify**:
   - Download DOMPurify from the following link:
     - [Download DOMPurify](https://cdnjs.cloudflare.com/ajax/libs/dompurify/3.1.7/purify.min.js)
   - Save the file as `dompurify.min.js` in your `SmoothScrollingExtension` folder.

4. **Create Other Files**:
   - Create the following files in your `SmoothScrollingExtension` folder:

   - **manifest.json**
   - **popup.html**
   - **popup.js**
   - **content.js**

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

- Ensure all files are correctly named
