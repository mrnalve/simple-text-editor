let textAria = document.getElementById("textAria");

// step 1- Bold
let boldBtn = document.getElementById("bold");
boldBtn.addEventListener("click", function (e) {
    
    let currentState = textAria.style.fontWeight;
    if (currentState === "bold") {
        textAria.style.fontWeight = "normal";
    } else {
        textAria.style.fontWeight = "bold";
    }
});

// step 2- Underline
let underlineButton = document.getElementById("underline");
underlineButton.addEventListener("click", () => {
    let selection = window.getSelection();
    if (selection.rangeCount > 0) {
        let currentState = textAria.style.textDecoration;
        if (currentState === "underline") {
            textAria.style.textDecoration = "none";
        } else {
            textAria.style.textDecoration = "underline";
        }
    }
});

// step 3- Italic
let italic = document.getElementById("italic");
italic.addEventListener("click", () => {
    let currentState = textAria.style.fontStyle;
    if (currentState === "italic") {
        textAria.style.fontStyle = "normal";
    } else {
        textAria.style.fontStyle = "italic";
    }
});

// step 4- alignment
function alignment(id, align) {
    document.getElementById(id).addEventListener('click', () => {
        textAria.style.textAlign = align;
    })
};

// step 5 - align left
alignment('leftAlign', 'left')
// step 6 - align left
alignment('centerAlign', 'center')
// step 7 - align left
alignment('rightAlign', 'right')
// step 8 - align left
alignment('justifyAlign', 'justify')

// step 9 - number for font size 
let number = document.getElementById('number');
number.addEventListener('input', () => {
    let num = number.value;
    textAria.style.fontSize = num + 'px';
})

// step 9 - text color
let color = document.getElementById('color');
color.addEventListener('input', ()=>{
    let getColor = color.value;
    console.log(getColor);
    textAria.style.color = getColor + "";
})

