const arr = ['red','green','orange','blue','cyan','purple']

let btn = document.querySelector("#btn_1");
const color = document.querySelector(".color");
btn.addEventListener('click',function (){
    let value = random()
    document.querySelector('body').style.background=arr[value];
    color.textContent = arr[value]
})

function random(){
    return Math.floor(Math.random() * arr.length)
}