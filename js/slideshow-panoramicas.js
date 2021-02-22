imgShowing = 1;

setInterval(function() {animateSlideshowPanoramicas();}, 8000);
function animateSlideshowPanoramicas() {

    // counter
    if (imgShowing === 4) {
        imgShowing = 1;
    } else {
        imgShowing = imgShowing + 1;
    }

    // Reseting all
    for(let i = 1; i <= 4; i++) {
        document.getElementById('slideshow-img_' + i).style.opacity = 0;
    }

    // Set
    document.getElementById('slideshow-img_' + imgShowing).style.opacity = 1;
    console.log('Set : ' + imgShowing);
}