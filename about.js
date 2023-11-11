const aboutHomeButton = document.querySelector(".home-button");
var audioClick = new Audio('Assets/150382__orginaljun__soft-sound-plastic-button-click.mp3');

aboutHomeButton.addEventListener("click", ()=>{
    audioClick.play()
    window.location.href="index.html"
});
