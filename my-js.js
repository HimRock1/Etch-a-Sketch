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
let array=[...document.querySelectorAll('.box')];
array.forEach((box)=>{
    box.addEventListener('mouseenter',(e)=>{
        console.log(e);
        e.target.setAttribute('style','background-color:coral');
    })
})



// box.addEventListener('onmouseover',(e)=>{
//     e.target.setAttribute('style','background-color:grey')
// })






                                                                                                                                                                                                                                                                                                                                                                                                    