const sketchArea= document.querySelector('.sketch');
const options=document.querySelector('.options');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//drawing section 
function drawGrid(dimensions) {
    sketchArea.style.gridTemplateColumns =`repeat(${dimensions},1fr)`;
    sketchArea.style.gridTemplateRows =`repeat(${dimensions},1fr)`;

    for (let i = 0; i < (dimensions**2) ; i++) {
        let div=document.createElement('div');
        div.setAttribute('class','grid-items');
        
        div.addEventListener('mouseover',changeColor);
        div.addEventListener('mousedown',changeColor);
  

        sketchArea.appendChild(div);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor='#333333';
    
}

drawGrid(16);

