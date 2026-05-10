console.log(
    "hey"
)
const randomNumberEL = document.querySelector("#random-number");
randomNumberEL.addEventListener("click" , () =>{
    document.querySelector("#result").textContent = Math.floor(
     getRandomNumber(1, 100)   
    );
});

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
};