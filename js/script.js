
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

// ======================================================================