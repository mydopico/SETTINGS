// Change font size

slider.oninput = () => {
    // change the span value
    const slider = document.getElementById("slider");
    const pixels = document.getElementById("pixels");
    pixels.innerHTML = slider.value;

    // change the font-size attribut value with js in the sample text    
    const sample = document.getElementById("sample");
    sample.style.fontSize = `${slider.value}px`;
}

// Change font family

function changeFont(selectTag) {
    var listValue = selectTag.options[selectTag.selectedIndex].value;    
    const sample = document.getElementById("sample");
    sample.setAttribute("class", listValue);    
    }  

// Change font color

var squares = document.querySelectorAll(".square");

function changeColor(){
    for(var i = 0; i < squares.length; i++){
   //add click listeners to squares
    squares[i].addEventListener("click", function(){
       //grab color of clicked square		
       var clickedColor = this.classList[0];
       var sample = document.getElementById("sample");
       sample.style.color = clickedColor;    
     });
   }
}

