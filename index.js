const startButton = document.querySelector(".start-button");
const howToButton = document.querySelector(".instruction-button");
const aboutButton = document.querySelector(".about-button");
var clickAudio = new Audio('Assets/150382__orginaljun__soft-sound-plastic-button-click.mp3');

startButton.addEventListener("click", ()=>{
    clickAudio.play()
    window.location.href="name.html"
});

howToButton.addEventListener("click", ()=>{
    clickAudio.play()
    window.location.href="instructions.html"
});

aboutButton.addEventListener("click", ()=>{
    clickAudio.play()
    window.location.href="about.html"
});



