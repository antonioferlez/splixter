# Splixter

**Splixter** is a client-side web application that allows users to split images into multiple printable pages and generate a ready-to-print PDF poster.

The tool is designed to make it easy to print large images on standard paper sizes and assemble them manually.

> **Tagline:** Divide images. Print big.

## Features

- Upload an image from your device
- Paste an image URL
- Choose the **number of pages** to split the image into
- Select the **split direction**:
  - Vertical (top to bottom)
  - Horizontal (left to right)
- Automatic adjustment of the opposite direction to maintain proportions
- Select paper size:
  - A4
  - Letter
  - Legal (Oficio)
- Image aspect ratio is preserved (no distortion)
- **Preview mode**:
  - Displays the full image
  - Shows division lines indicating how the image will be split
- **PDF export**:
  - One image slice per page
  - Small margins for printing

## How Splixter Works

1. The user uploads an image or pastes an image URL
2. The user selects:
   - Number of pages
   - Split direction
   - Paper size
3. Splixter calculates:
   - The printable area based on the selected paper size
   - The required number of rows and columns
   - Proper overlap between pages
4. A preview is rendered showing the image with division lines
5. A multi-page PDF is generated, ready for printing and assembly

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **Canvas API**
- **jsPDF**
- **GitHub Pages** (for hosting)

This project runs entirely in the browser.  
No backend, no server, no database.

## Preview

