console.log(
    "hey"
)
const randomNumberEL = document.querySelector("#random-number");
randomNumberEL.addEventListener("click" , () =>{
    document.querySelector("#result").textContent = Math.random();
});