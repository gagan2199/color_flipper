let container = document.getElementById('container')
let btn = document.getElementById('btn')
let colorName=document.getElementById('colorName')
let colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];

let cl = ['green', 'pink', 'yellow', 'grey', 'orange', 'red', 'blue', 'maroon'];

// let uniq;        another method with elements shuffle 

// btn.addEventListener('click', (element) => {
//     uniq = cl[Math.floor(Math.random() * 8)];        // from color array
//     container.style.backgroundColor = uniq;
//     console.log(uniq) 
// });

let rd;
let rdc=[];
                                                           // making color from numbers and alphabets
for (let i = 0; i < 6; i++) {
    rd = Math.floor(Math.random() * 15);
    rdc[i] = colors[rd];
}

console.log(rdc[0])
btn.addEventListener('click', (element) => {

    for (let i = 0; i < 6; i++) {
        rd = Math.floor(Math.random() * 15);
        rdc[i] = colors[rd];
    }
    
    let str='#'+`${rdc[0]}`+`${rdc[1]}`+`${rdc[2]}`+`${rdc[3]}`+`${rdc[4]}`+`${rdc[5]}`;

    // let str1= rdc[0]+rdc[1]+rdc[2]+rdc[3]+rdc[4]+rdc[5];      //this cannot be used bcz it will add the numbers

    // console.log(str1);
    console.log(str);

    container.style.backgroundColor =str;
    colorName.innerText=str;
});
