// Create new Div with id Container
const containers=document.createElement('div');
containers.id='container';
document.body.appendChild(containers);

//Create 256(16 x 16) Div and Add Style to it.
for(let i=1;i<=16;i++){
    for(let j=1;j<=16;j++){
        let div=document.createElement('div');
        div.className='box';
        div.setAttribute('style','border:1px solid black')
        containers.appendChild(div);
    } 
}

//Add Style to Containers(Parent Element)
containers.setAttribute('style','width:560px;height:560px;border:solid black;display:grid;grid-template-columns:repeat(16,1fr);grid-template-rows:repeat(16,1fr);border:0;' )

//Add Hover Property to the Child boxes and change its background property when the event is fired.
function hoverOverBox(){
let array=[...document.querySelectorAll('.box')];
array.forEach((box)=>{
    box.addEventListener('mouseenter',(e)=>{
        console.log(e);
        e.target.setAttribute('style','background-color:coral');
    })
})
}
hoverOverBox();
// Add a button to send the user popup asking for the number the squares per side for the grid.

let button=document.createElement('button');
button.className='btn';
button.textContent='CLICK ME!!';
button.setAttribute('style','width:50px;height:50px;background-color:#ad9650;')
button.addEventListener('click',gridselect);
document.body.insertBefore(button,containers);

function gridselect(){
    let gridnums=prompt('Enter the GRID Number :',"16");
    gridnums=parseInt(gridnums);
    let containers=document.getElementById('container')
    containers.remove();
    let container=document.createElement('div');
    container.id='container';
    document.body.appendChild(container);
    if(gridnums<100){
        for(let i=1;i<=gridnums;i++){
            for(let j=1;j<=gridnums;j++){
                let div=document.createElement('div');
                div.className='box';
                div.setAttribute('style','border:1px solid black')
                container.appendChild(div);
            } 
        }
    }    
    //containers.removeAttribute('style');
    container.setAttribute('style','width:560px;height:560px;border:solid black;display:grid;grid-template-columns:repeat('+gridnums+',1fr);grid-template-rows:repeat('+gridnums+',1fr);;border:0;');
    //containers.style.gridTemplateColumns='repeat(gridnums,1fr)';
    hoverOverBox();
}





                                                                                                                                                                                                                                                                                                                                                                                                    