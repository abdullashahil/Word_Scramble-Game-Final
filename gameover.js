const homeButton = document.querySelector(".home-button");
const scoreText = document.querySelector(".score");
const nameText = document.querySelector(".name-text");

var phrase = document.querySelector(".phrase-head");

const nickName = sessionStorage.getItem('Nickname');
nameText.innerHTML = nickName;

var audioCorrect = new Audio('Assets/Correct Answer Sound Effect.mp3');
var audioWrong = new Audio('Assets/Error 404 Sound Effect.mp3');
var audioClick = new Audio('Assets/150382__orginaljun__soft-sound-plastic-button-click.mp3');

scoreText.innerHTML = sessionStorage.getItem('Score');

homeButton.addEventListener("click", () => {
    audioClick.play()
    window.location.href = "index.html"
});



let randomWinPhrases = winPhrase[Math.floor(Math.random() * winPhrase.length)];

let randomLosePhrases = losePhrase[Math.floor(Math.random() * losePhrase.length)];

if (scoreText.innerHTML >= 100) {
    audioCorrect.play()

    phrase.innerHTML = randomWinPhrases.phrase
}
else {
    audioWrong.volume = 0.05
    audioWrong.currentTime = 1.5
    audioWrong.play()
    phrase.innerHTML = randomLosePhrases.phrase
}



