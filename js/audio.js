showAudio = () => {
    let audio = document.getElementsByClassName("audio");
    for (let i = 0; i < audio.length; i++) {
        if (audio[i].style.display === "none") {
            audio[i].style.display = "block";
        } else {
            audio[i].style.display = "none";
        }
    }
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        if (p[i].style.display === "none") {
            p[i].style.display = "block";
        } else {
            p[i].style.display = "none";
        }
    }
};