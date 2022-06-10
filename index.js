let carcolor = document.getElementById("carcolor");
let bluebtn = document.getElementById("blue");
let greybtn = document.getElementById("grey");
let yellowbtn = document.getElementById("yellow");
let whitebtn = document.getElementById("white");
let blackbtn = document.getElementById("black");

bluebtn.onclick = function() {
    carcolor.style.backgroundImage = "url(Images/antimatterBlue.png)"
}

greybtn.onclick = function() {
    carcolor.style.backgroundImage = "url(Images/carbonizedGray.png)"
}

yellowbtn.onclick = function() {
    carcolor.style.backgroundImage = "url(Images/grabberYellow.png)"
}

whitebtn.onclick = function() {
    carcolor.style.backgroundImage = "url(Images/oxfordWhite.png)"
}

blackbtn.onclick = function() {
    carcolor.style.backgroundImage = "url(Images/shadowBlack.png)"
}
