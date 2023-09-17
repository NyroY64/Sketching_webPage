const sketchArea= document.querySelector('.sketch');
const options=document.querySelector('.options');

const colorSelector=document.querySelector('.colorSelector');
const colorMode=document.querySelector('.colorMode');
const rainbowMode=document.querySelector('.rainbowMode');
const eraserMode=document.querySelector('.eraseMode');
const sizeSelector=document.querySelector('#sizeSelector');
const sizeDisplay=document.querySelector('.sizeDisplay');

const clearButton=document.querySelector('.clearButton');

//This part of the code makes the drawing work 

let mouseDown = false //we create a boolean to track if the mouse button is clicked
document.body.onmousedown = () => (mouseDown = true) //then we use even listeners to change it's value 
document.body.onmouseup = () => (mouseDown = false)

const defaultMode='color';
const defaultColor='#000000';
const defaultSize=16;

let mode=defaultMode;
let color=defaultColor;
let size=defaultSize;


sizeSelector.addEventListener('input',()=>{sizeDisplay.innerHTML=sizeSelector.value});
sizeSelector.addEventListener('input',()=>{
     drawGrid(parseInt(sizeSelector.value));
});



//Buttons
colorMode.addEventListener('click',()=>{mode='color'}); 
rainbowMode.addEventListener('click',()=>{mode='rainbow'});

eraserMode.addEventListener('click',()=>{mode='erase'});
clearButton.addEventListener('click',clearSketch)

drawGrid(16);


//drawing section 
function drawGrid(dimensions) {
    clearSketch();
    sketchArea.style.gridTemplateColumns =`repeat(${dimensions},1fr)`; //this draws the vertical-grid 
    sketchArea.style.gridTemplateRows =`repeat(${dimensions},1fr)`; //this draws a horizontal-grid

    //this part of the code fills out the grid with div's
    for (let i = 0; i < (dimensions**2) ; i++) {
        let div=document.createElement('div');
        div.setAttribute('class','grid-items');
        
        div.addEventListener('mouseover',changeColor);
        

        sketchArea.appendChild(div);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (mode==='color') {
        color = colorSelector.value;
        e.target.style.backgroundColor=color;
    }else if(mode==='rainbow'){
        let R = Math.floor(Math.random()*255);
        let G = Math.floor(Math.random()*255);
        let B = Math.floor(Math.random()*255);

        e.target.style.backgroundColor=`rgb(${R}, ${G}, ${B})`;
    }else if(mode==='erase'){
        e.target.style.backgroundColor='#FFFFFF';
    }
    
    
}

function clearSketch(){
    let pixels =sketchArea.querySelectorAll('.grid-items');
    pixels.forEach(pixel => {
        
        pixel.style.backgroundColor='#ffffff';
        
    });
}
