const wordBox = document.querySelector("#word");
hintBox = document.querySelector("#hint span");
var inputBox = document.querySelector(".word-input");
timeText = document.querySelector(".time-box span");
scoreText = document.querySelector(".score-box span");

refreshButton = document.querySelector(".reset-button");
checkButton = document.querySelector(".check-button");

var audioCorrect = new Audio('Assets/Correct Answer Sound Effect.mp3');
var audioWrong = new Audio('Assets/Error 404 Sound Effect.mp3');
var audioClick = new Audio('Assets/150382__orginaljun__soft-sound-plastic-button-click.mp3');
var bgAudio = new Audio('Assets/2d game OST - Background Music.mp3');


let correctWord;
var timer;

let score = 0;
scoreText.innerHTML = score;



// Countdown function
const countDown = (startTime) => {
    timeText.innerHTML = startTime;
    timer = setInterval(() => {

        if (startTime > 0) {
            startTime--
            timeText.innerHTML = startTime;
        }
        else {
            sessionStorage.setItem('Score', score)
            window.location.href = "gameover.html"
        }

    }, 1000)
};



// Game initialisation
const init = () => {
    audioClick.volume=0.1
    audioClick.play()
    clearInterval(timer)
    countDown(20)
    let randomWords = words[Math.floor(Math.random() * words.length)]
    let letters = randomWords.word.split("")

    for (let i = letters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [letters[i], letters[j]] = [letters[j], letters[i]];
    }

    wordBox.innerText = letters.join("");
    hintBox.innerText = randomWords.hint

    correctWord = randomWords.word
    inputBox.value = ""
    inputBox.setAttribute("maxlength", correctWord.length)
};



// Checking the input
const wordCheck = () => {

    let inputWord = inputBox.value

    if (inputWord == "") {
        audioWrong.volume = 0.3
        audioWrong.currentTime = 1.5
        audioWrong.play()
        alert(`Enter a word`)
        return
    }

    if (inputWord != correctWord) {
        audioWrong.volume = 0.3
        audioWrong.currentTime = 1.5
        audioWrong.play()
        alert(`Oh ! ${inputWord} is an incorrect word`)
        return
    }
    else {
        score += 5
        scoreText.innerHTML = score
        if (score >= 100) {
            sessionStorage.setItem('Score', score)
            window.location.href = "gameover.html"
        }

        init();

    }
};


init();

inputBox.addEventListener("click",()=>{
    bgAudio.volume=0.9
    bgAudio.play()
    bgAudio.loop=true
})

refreshButton.addEventListener("click", ()=>{
    audioClick.pause();
    audioClick.currentTime=0;
    audioClick.play();

    init()
});

checkButton.addEventListener("click", ()=>{
    wordCheck()
});