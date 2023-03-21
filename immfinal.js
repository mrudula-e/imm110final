'use strict';

window.onload = initBannerLink;
var theAd = 0;
var adURL = new Array("pothys.com","shobitam.com","sacredweaves.com")
var adImages = new Array("Saree 1.jpg","Saree 2.jpg","Saree 3.jpg");
function initBannerLink() {
    if (document.getElementById("adBanner").parentNode.tagName == "A")
    {
    document.getElementById("adBanner").parentNode.onclick = newLocation;
    }
    rotate();
    }
    function newLocation() {
    document.location.href = "http://www." + adURL[theAd];
    return false;
    }
    function rotate() {
    theAd++;
    if (theAd == adImages.length) {
    theAd = 0;
    }
    document.getElementById("adBanner").src = adImages[theAd];
    setTimeout(rotate, 3 * 1000);
}
 /*function playThunder(){
    console.log("playThunder");
    $('#audio').get(0).playbackRate = 3;
    $('#audio').get(0).play();
    $('#audio').get(0).muted = false;
        }

/*const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);

});*/