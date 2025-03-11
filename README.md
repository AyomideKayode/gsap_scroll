# GSAP Scroll Animations

Mini single page web app to further strengthen my knowledge on GSAP Scroll Animations.

## Project Overview

This project demonstrates the use of GSAP (GreenSock Animation Platform) and ScrollTrigger to create engaging scroll-based animations on a single-page web application. The animations are triggered as the user scrolls through different sections of the page, providing a dynamic and interactive experience.

## Features

- **Scroll-based Animations**: Elements on the page animate based on the user's scroll position.
- **GSAP Timeline**: Utilizes GSAP's timeline feature to sequence multiple animations.
- **Responsive Design**: The layout and animations are designed to work on various screen sizes.

## File Structure

- `index.html`: The main HTML file that includes the structure of the web page.
- `style.css`: The CSS file that contains styles for the web page.
- `script.js`: The JavaScript file that contains the GSAP animations and ScrollTrigger configurations.
- `assets/`: A directory containing image assets used in the project.

## Animation Details

### Timeline 1 (`tl`)

- **Trigger**: `.about` section
- **Start**: `0% 95%`
- **End**: `70% 50%`
- **Scrub**: `true`

#### Animations

- `#can`: Moves down and rotates.
- `#chocolate`: Moves to a new position.
- `#chocolate2`: Moves and rotates.
- `#almond`: Moves and rotates.
- `#almond2`: Moves and rotates.

### Timeline 2 (`tl2`)

- **Trigger**: `.product` section
- **Start**: `0% 95%`
- **End**: `20% 50%`
- **Scrub**: `true`

#### Animations2

- `#chocolate`: Changes size and position.
- `#chocolate2`: Changes size and position.
- `#can`: Changes size, position, and rotation.

## Getting Started

To view the project, simply open `index.html` in a web browser. Ensure you have an internet connection to load external resources like GSAP and ScrollTrigger.

## Dependencies

- [GSAP](https://greensock.com/gsap/)
- [ScrollTrigger](https://greensock.com/scrolltrigger/)

## License

This project is licensed under the MIT License.
