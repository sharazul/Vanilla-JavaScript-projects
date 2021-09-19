let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C',
    'D','E','F']

let btn = document.querySelector("#btn_1");
const color = document.querySelector(".color");
btn.addEventListener('click',function (){
    let hash = '#';
    for (let i = 0;i<6;i++){
        hash = hash + arr[random()];
    }
    document.querySelector('body').style.background=hash;
    color.textContent = hash;
})

function random(){
    return Math.floor(Math.random() * arr.length)
}