const sketchArea= document.querySelector('.sketch');
const options=document.querySelector('.options');


function drawGrid(dimensions) {
    for (let i = 0; i < (dimensions**2) ; i++) {
        let div=document.createElement('div');
        div.setAttribute('class','grid-items');
        
        div.addEventListener('mouseover',()=>{
            div.style['background-color']= 'black';
        })
        div.addEventListener('click',()=>{
            div.style['background-color']= 'black';
        })

        sketchArea.appendChild(div);
    }
}

drawGrid(16);

