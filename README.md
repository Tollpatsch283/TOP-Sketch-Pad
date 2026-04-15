# Etch-a-Sketch (DOM Manipulation Project)

This project is a browser-based drawing pad inspired by the classic Etch-a-Sketch toy. It allows users to draw by hovering over a grid of squares, with options to resize the grid, clear the board, and toggle random colors.

This project was created as part of The Odin Project Foundations Course, specifically within a lesson focused on DOM manipulation.

## Features

- Dynamic Grid Creation  
  Generates a square grid (default: 16×16) with adjustable size (1–100)

- Hover Drawing  
  Squares change color when hovered over

- Color Modes  
  Default black drawing and optional random RGB color mode

- Clear Function  
  Resets all squares without changing the grid size

- Resizable Canvas  
  Prompt-based resizing with input validation

## Technologies Used

- HTML5  
- CSS3 (Grid layout)  
- JavaScript (ES6)

## Project Structure

.
├── index.html   # Structure of the page  
├── index.css    # Styling and grid layout  
└── script.js    # DOM manipulation and logic  

## How It Works

1. The page loads a default 16×16 grid.
2. Each square is dynamically created using JavaScript.
3. Hovering over a square changes its color.
4. Buttons allow the user to:
   - Resize the grid
   - Clear the board
   - Toggle random color mode

## Getting Started

To run this project locally:

1. Clone or download the repository
2. Open `index.html` in your browser

No installation or dependencies are required.

## What I Learned

- Creating and appending DOM elements dynamically
- Using event listeners such as `mouseenter` and `click`
- Manipulating styles with JavaScript
- Working with CSS Grid for layout
- Handling user input with `prompt()`
- Structuring small interactive web applications

## Future Improvements

- Add gradual shading or darkening effect
- Add click-and-drag drawing functionality
- Add mobile/touch support
- Improve UI (color picker, slider instead of prompt)
- Add ability to save or export drawings

## Acknowledgements

This project was built as part of The Odin Project, an open-source curriculum for learning full-stack web development.