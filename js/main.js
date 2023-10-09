//start full screen nav
let bars = document.querySelector("nav .icons i");
let ul = document.querySelector("nav ul");
let close = document.querySelector("nav .close")
let landingend = document.querySelector(".landingend")

bars.onclick = function() {
    ul.classList.add("open")
};
close.onclick = function() {
    ul.classList.remove("open")
};
//end full screen nav

//start dark mood
let mood = document.querySelector('.mood');

mood.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mood.src = "imgs/sun white.png"
        landingend.src = "imgs/dark mood.svg";
    } else {
        mood.src = "imgs/dark.png"

        landingend.src = "imgs/wave-haikei (1).svg"
    }
}

//end dark mood

// start random image 
let landing = document.querySelector(".landing");

let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


setInterval(() => {
    let randomNumber = Math.floor(Math.random() * imgsArray.length);

    landing.style.backgroundImage = 'url("imgs/' +
        imgsArray[randomNumber] + '")'
}, 3000)

// end random image