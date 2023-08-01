
// ======================================================================
// ---------------------------- Theme Toggle ----------------------------
// ======================================================================

const dark_btn = document.getElementById('dark-mood');
const light_btn = document.getElementById('light-mood');

dark_btn.addEventListener("click", darkTheme);
light_btn.addEventListener("click", lightTheme);

function darkTheme() {
    light_btn.style.display = "block"
    dark_btn.style.display = "none"

    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"

}

function lightTheme() {
    light_btn.style.display = "none"
    dark_btn.style.display = "block"

    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
}



// ======================================================================
// ------------------------ artBoard ------------------------------------
// ======================================================================

// get no of div from range 
document.getElementById("range").addEventListener('change', (e) => {
    var noDiv = parseInt(e.target.value);
    var numberOfDiv = 4 ** noDiv;
    addDiv(numberOfDiv);
});


function addDiv(numberOfDiv) {
    const artBoard = document.querySelector('#artBoard');
    artBoard.innerHTML = '';

    // Calculate the number of rows and columns needed for the grid
    const cols = Math.sqrt(numberOfDiv);
    const rows = cols;

    // Calculate the width and height for each div
    const containerWidth = artBoard.offsetWidth;
    const divWidth = containerWidth / cols;
    const divHeight = containerWidth / rows;

    // Create the div and add them to the container
    for (let i = 1; i <= numberOfDiv; i++) {
        const div = document.createElement('div');

        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;

        div.classList.add('content');

        div.addEventListener('mousedown', () => {
            isDragging = true;
            div.style.backgroundColor = selectedColor;
        });
        div.addEventListener('mouseup', () => {
            isDragging = false;
        });
        div.addEventListener('mousemove', () => {
            if (isDragging) {
                div.style.backgroundColor = selectedColor;
            }
        });

        div.addEventListener('touchstart', () => {
            isDragging = true;
            div.style.backgroundColor = selectedColor;
        });

        div.addEventListener('touchend', () => {
            isDragging = false;
        });

        div.addEventListener('touchmove', (event) => {
            if (isDragging) {
                event.preventDefault(); // Prevent page scrolling while dragging
                const touch = event.touches[0];
                const touchTarget = document.elementFromPoint(touch.clientX, touch.clientY);
                if (touchTarget === div) {
                    div.style.backgroundColor = selectedColor;
                }
            }
        });

        artBoard.appendChild(div);
    }

    // Set CSS Grid properties to create the grid layout
    artBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    artBoard.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}


// ======================================================================
// ------------------- Active tool Class toggle -------------------------
// ======================================================================

// grab ratio input from HTML
const penBtn = document.getElementById('penBtn');
const randomBtn = document.getElementById('randomBtn');
const eraserBtn = document.getElementById('eraserBtn');

// Click Event Listening
penBtn.addEventListener('click', penFunction);
randomBtn.addEventListener('click', randomFunction);
eraserBtn.addEventListener('click', eraserFunction);

// get color code from color picker 
var selectedColor = "#000000"

function penFunction() {
    console.log("Pen function");
    document.getElementById("select-color").addEventListener('change', (e) => {
        selectedColor = e.target.value;
    })
}

function randomFunction() {

}

function eraserFunction() {
}

