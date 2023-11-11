const fullName = document.querySelector(".fullname");
const nickName = document.querySelector(".nickname");
const button = document.querySelector(".play-button");
const cancelButton = document.querySelector(".cancel-button");
var audioCorrect = new Audio('Assets/Correct Answer Sound Effect.mp3');
var audioWrong = new Audio('Assets/Error 404 Sound Effect.mp3');
var clickAudio = new Audio('Assets/150382__orginaljun__soft-sound-plastic-button-click.mp3');


button.addEventListener('click', () => {
    if (fullName.value == "" && nickName.value != "") {
        audioWrong.volume = 0.2
        audioWrong.currentTime = 1.5
        audioWrong.play()
        alert("Enter your Fullname")
    }
    else if (fullName.value != "" && nickName.value == "") {
        audioWrong.volume = 0.2
        audioWrong.currentTime = 1.5
        audioWrong.play()

        alert("Enter your Nickname")
    }
    else if (fullName.value != "" && nickName.value != "") {
        sessionStorage.setItem('Fullname', fullName.value);
        sessionStorage.setItem('Nickname', nickName.value);
        window.location.href = "game.html"
    }
    else {
        audioWrong.volume = 0.2
        audioWrong.currentTime = 1.5
        audioWrong.play()
        alert("Enter the details")
    }

});

cancelButton.addEventListener('click', () => {
    clickAudio.play()
    window.location.href = "index.html"
});



