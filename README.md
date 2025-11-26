# Flippy - Color Flipper

A simple and elegant web application for generating beautiful random colors with a smooth 3D flip animation. Perfect for designers, developers, and anyone looking for color inspiration.

## Features

- **Interactive Color Generation**: Click buttons to generate specific colors (Red, Green, Blue) or random colors
- **3D Flip Animation**: Smooth CSS-only animations that trigger when colors change
- **Hex Color Display**: Shows current color in hexadecimal format
- **Copy to Clipboard**: One-click copying of color codes for easy use
- **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- **Modern Design**: Clean, minimalist interface with professional styling

## Live Demo

Open `index.html` in your web browser to start using the Color Flipper.

## How to Use

1. **Generate Colors**:

   - Click "Red", "Green", or "Blue" for specific colors
   - Click "Generate Random Color" for random RGB combinations

2. **Copy Colors**:

   - Click "Copy Color Code" to copy the hex value to your clipboard

3. **View Code**:
   - Scroll down to see the source code implementation

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**:
  - Flexbox and Grid layouts
  - CSS animations and transforms
  - Responsive design with media queries
  - 3D perspective and animations
- **JavaScript (ES6)**:
  - DOM manipulation
  - Color conversion utilities
  - Animation timing and control
  - Clipboard API integration

## File Structure

```
Color Flipper/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── main.js             # JavaScript functionality
├── FlippyLogo.png      # Logo image
└── README.md           # This file
```

## Key Features Breakdown

### 3D Flip Animation

- CSS-only animations using `transform` and `perspective`
- Smooth 600ms animation with color change at midpoint
- Different animations for desktop and mobile devices

### Responsive Design

- **Desktop**: Full-width layout with side-by-side controls
- **Tablet**: Stacked layout with larger touch targets
- **Mobile**: Optimized for small screens with proper spacing

### Color Management

- RGB to Hex conversion utilities
- Named color support (red, green, blue)
- Real-time color display updates
- Clipboard integration with fallback support

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start generating colors!

No build process or dependencies required - it's a pure HTML/CSS/JavaScript application.

## Contributing

Feel free to fork this project and submit pull requests for improvements such as:

- Additional color formats (HSL, RGB)
- More animation effects
- Color palette generation
- Export functionality
