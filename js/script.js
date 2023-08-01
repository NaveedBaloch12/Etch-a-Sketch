
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
document.getElementById("select-color").addEventListener('change', (e) => {
    var selectedColor = e.target.value;
})


function penFunction() {
    console.log("Pen function");

}

function randomFunction() {
    console.log("Random function");
}

function eraserFunction() {
    console.log("eraser function");
}


// ======================================================================
// ------------------------ artBoard ------------------------------------
// ======================================================================
// get no of div from range 

// document.getElementById("range").addEventListener('change', (e) => {
//     var noDiv = e.target.value;
//     var numberOfDiv = 4 ** noDiv
//     addDiv(numberOfDiv);
// })

// function addDiv(numberOfDiv){
// const artBoard = document.querySelector('#artBoard');
// for (var i = 1; i <= numberOfDiv ; i++) {
//     const content = document.createElement('span');
//     content.classList.add('content');
//     content.textContent = i;

//     artBoard.appendChild(content);
// }};