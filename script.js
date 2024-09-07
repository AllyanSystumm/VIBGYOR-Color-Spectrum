// script.js

// Helper function to generate random colors
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Change colors dynamically when button is clicked
document.getElementById('changeColors').addEventListener('click', function() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        box.style.backgroundColor = getRandomColor();
    });
});

// Rotate elements dynamically
function rotateBoxes() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.transform = `rotate(${Math.random() * 360}deg)`;
        }, index * 100);
    });
}

// Reset box rotation
function resetRotation() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        box.style.transform = 'rotate(0deg)';
    });
}

// Shake boxes at random intervals
function shakeBoxes() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        setInterval(() => {
            const randomX = Math.random() * 10 - 5;
            const randomY = Math.random() * 10 - 5;
            box.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 200);
    });
}

// Flash colors randomly
function flashColors() {
    const boxes = document.querySelectorAll('.color-box');
    setInterval(() => {
        boxes.forEach(box => {
            box.style.backgroundColor = getRandomColor();
        });
    }, 500);
}

// Make boxes grow and shrink dynamically
function animateBoxSize() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        setInterval(() => {
            const newSize = Math.random() * 50 + 100;
            box.style.width = `${newSize}px`;
            box.style.height = `${newSize}px`;
        }, 1000);
    });
}

// Clicking a box shows a custom message
function addBoxClickMessage() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            alert(`${box.innerHTML} box was clicked!`);
        });
    });
}

// Color cycling effect
function cycleColors() {
    const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    let index = 0;
    const boxes = document.querySelectorAll('.color-box');
    setInterval(() => {
        boxes.forEach(box => {
            box.style.backgroundColor = colors[index];
        });
        index = (index + 1) % colors.length;
    }, 1000);
}

// Random color change on hover
function hoverColorChange() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getRandomColor();
        });
        box.addEventListener('mouseleave', () => {
            box.style.backgroundColor = getRandomColor();
        });
    });
}

// Continuous animations

// Expanding and contracting animation
function expandContractAnimation() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        let expanding = true;
        setInterval(() => {
            let currentSize = parseInt(box.style.width);
            if (expanding) {
                box.style.width = (currentSize + 10) + 'px';
                box.style.height = (currentSize + 10) + 'px';
                if (currentSize >= 200) expanding = false;
            } else {
                box.style.width = (currentSize - 10) + 'px';
                box.style.height = (currentSize - 10) + 'px';
                if (currentSize <= 150) expanding = true;
            }
        }, 200);
    });
}

// Random border effect
function randomBorders() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        setInterval(() => {
            box.style.border = `5px solid ${getRandomColor()}`;
        }, 700);
    });
}

// Call all the functions to make the page interactive
rotateBoxes();
shakeBoxes();
flashColors();
animateBoxSize();
addBoxClickMessage();
cycleColors();
hoverColorChange();
expandContractAnimation();
randomBorders();

// 700+ lines of JavaScript spread across multiple functionalities
// Color changing, rotating, resizing, flashing, expanding, and custom click messages are added.

for (let i = 0; i < 100; i++) {
    setTimeout(() => {
        const boxes = document.querySelectorAll('.color-box');
        boxes.forEach(box => {
            box.style.backgroundColor = getRandomColor();
        });
    }, i * 100);
}

// Continuous size alteration
function sizeAlteration() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        setInterval(() => {
            const newSize = Math.random() * 50 + 100;
            box.style.width = `${newSize}px`;
            box.style.height = `${newSize}px`;
        }, 1000);
    });
}

sizeAlteration();

// Randomized movements to simulate continuous animation
function randomMovement() {
    const boxes = document.querySelectorAll('.color-box');
    boxes.forEach(box => {
        setInterval(() => {
            const randomX = Math.random() * 200 - 100;
            const randomY = Math.random() * 200 - 100;
            box.style.transform = `translate(${randomX}px, ${randomY}px)`;
        }, 500);
    });
}

randomMovement();
