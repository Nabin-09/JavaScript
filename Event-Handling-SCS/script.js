// let h1 = document.querySelector('h1');

// h1.addEventListener('click' , ()=>{
//     h1.style.color = 'red'
// })

// h1.removeEventListener('dblclick' the same function that was passed in eventListener)

// let input = document.querySelector('input');

// input.addEventListener('input' , function(det){
//     if(det.data !== null){
//         console.log(det.data);
//     }
// })

// let header = document.querySelector('#h')
// let sel = document.querySelector('select');

// sel.addEventListener('change' , function(det){
//     header.textContent = `${det.target.value} selected`
// })

// window.addEventListener('keydown' , (det)=>{
//     console.log(det);
//     if(det.key === ' ') h1.textContent = 'SPC';
//     else h1.textContent = det.key;    
// })

let abcd = document.querySelector('#abcd');
 
abcd.addEventListener('mouseover' , ()=>{
    abcd.style.backgroundColor = 'yellow';
})

abcd.addEventListener('mouseout' , ()=>{
    abcd.style.backgroundColor = 'red';
})