let container= document.getElementById('container')
let btn= document.getElementById('btn')
let colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E'];

let cl=['green','pink','yellow','grey','orange','red','blue','maroon']

let v=Math.floor(Math.random()*8);
let rd,rdc;


console.log(v);

let uniq;

// for(let i=0;i<6;i++)
// {
//     rd=Math.floor(Math.random()*15);
//      rdc[i]=cl[rd];
// }
// container.addEventListener('click',(element)=>
// {

  
//     // uniq= cl[Math.floor(Math.random()*8)];
//     container.style.backgroundColor='white';
//     // console.log(uniq)
// });


btn.addEventListener('click',(element)=>
{
    uniq= cl[Math.floor(Math.random()*8)];
    container.style.backgroundColor=uniq;
    console.log(uniq)
});


