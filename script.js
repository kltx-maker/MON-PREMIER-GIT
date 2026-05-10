
const randomNumberEL = document.querySelector("#random-number");
const resultEL = document.querySelector("#result");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
randomNumberEL.addEventListener("click" , () => {
    resultEL.textContent = Math.floor(
     getRandomNumber(Number(min.value), Number(max.value) + 1)   
    );
});

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
};