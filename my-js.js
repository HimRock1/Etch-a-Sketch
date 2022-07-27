// Create new Div with id Container
const containers=document.createElement('div');
containers.id='container';
document.body.appendChild(containers);

let defaultColour= "#000000"


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
        box.addEventListener('mouseover',(e)=>{
            console.log(e);
            e.target.setAttribute('style','background-color:'+defaultColour);
        })
    })
}
hoverOverBox();


// <--------------------------------------BUTTONS----------------------------------------------->

//Create 3 Buttons Containing the Grid Layout change,Select color and Random color choose

const ndiv=document.createElement('div');
ndiv.id='BtnContainer';
document.body.insertBefore(ndiv,containers);



// 1. Add a button to send the user popup asking for the number the squares per side for the grid.

let button=document.createElement('button');
button.id='btnGrid';
button.textContent='Change GRID layout';
button.setAttribute('style','width:50px;height:50px;background-color:#ad9650;')
button.addEventListener('click',gridselect);
// document.body.insertBefore(button,containers);
ndiv.appendChild(button)

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
                div.setAttribute('style','border:1px solid black;')
                container.appendChild(div);
            } 
        }
    }    
    //containers.removeAttribute('style');
    container.setAttribute('style','width:560px;height:560px;border:solid black;display:grid;grid-template-columns:repeat('+gridnums+',1fr);grid-template-rows:repeat('+gridnums+',1fr);;border:0;');
    //containers.style.gridTemplateColumns='repeat(gridnums,1fr)';
    hoverOverBox();
}
//Change color Randomly with Hover
function colorChange(e){
    let x=e.offsetX;
    let y=e.offsetY;
    let color=`rgb(${x}, ${y}, ${x-y})`;
    console.log(color);
    return color;
}

// 2.Input to Select users desirable color

const colors=document.createElement('div');
colors.id='colors';
colors.className='action'
ndiv.appendChild(colors);
let txtIN=document.createElement('input')
txtIN.id='hex';
txtIN.type='text';
let colIN=document.createElement('input')
colIN.id='color';
colIN.type='color';
colors.appendChild(txtIN);
colors.appendChild(colIN);
txtIN.value = defaultColour;
colors.addEventListener('input', addcolour);

function addcolour(){
    let color = colIN.value;
    txtIN.value = color;
    defaultColour=color;
    hoverOverBox();
}

// Add Random color button
let randomcolor=document.createElement('button');
randomcolor.id='btnRandom';
randomcolor.className='action';
randomcolor.textContent="Add Random Colours"
randomcolor.style.backgroundColor='#55c42d';
ndiv.appendChild(randomcolor);
randomcolor.addEventListener('click',addrandomColour);
function addrandomColour(){
    let array=[...document.querySelectorAll('.box')];
    array.forEach((box)=>{
        box.addEventListener('mouseover',(event)=>{
            console.log(event);
            defaultColour=colorChange(event);
            event.target.setAttribute('style',`background-color:${defaultColour}`);
        })
    })
    
}   
// Add a Clear screen

const clear=document.createElement('button');
clear.id='clear';
clear.textContent='Clear Screen';
clear.style.backgroundColor='#ede858';
clear.onclick='window.location.reload();';
ndiv.appendChild(clear);
clear.addEventListener('click',reload,false);
function reload(){
    reload=location.reload();
}