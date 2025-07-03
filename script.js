'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber, typeof randomNumber);

console.log(document.querySelector('.score').textContent);
let score = Number(document.querySelector('.score').textContent);


let highScore = Number(localStorage.getItem("highScore")) || 0;
document.querySelector('.highscore').textContent = highScore; 




const func = function(){
    const num = Number(document.querySelector('.guess').value);
  
    if (score > 0){
    if(!num){
        document.querySelector(".message").textContent = "you didn't enter any number"; 
    } else if (num === randomNumber){
        document.querySelector(".message").textContent = "you won";
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = num;
        document.querySelector(".number").style.width = "30rem";
        if(score > highScore){
            highScore = score;
            localStorage.setItem("highScore", highScore); // Save to localStorage
            document.querySelector('.highscore').textContent = highScore;

        } 
        
    } else if (num > randomNumber){
        document.querySelector(".message").textContent = "Too High!"; 
        score --;
    } else {
        document.querySelector(".message").textContent = "Too Low!"; 
        score --;
    }
    document.querySelector('.score').textContent = score;
}if (score === 0 && num !== randomNumber) {
    document.querySelector(".message").textContent = "You lost"; 
}
    
}

const reload = function(){
    location.reload();

}

const reset_high_score = function(){
    localStorage.clear();
    location.reload();
  


}


document.querySelector('.check').addEventListener('click',func);
document.querySelector('.again').addEventListener('click', reload);
document.querySelector('.reset-highscore').addEventListener('click', reset_high_score);

document.querySelector('.guess').addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        func();  // Call your function
    }
});
