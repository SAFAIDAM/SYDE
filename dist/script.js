let i = 0;
let images = [];
let time = 3000;


images[0] = "/assets/slidemodel.png";
images[1] = "/assets/slidemodel2.png";
images[2] = "/assets/slidemodel3.png";

var preloadedImages = [];
for (var j = 0; j < images.length; j++) {
  preloadedImages[j] = new Image();
  preloadedImages[j].src = images[j];
}

function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(changeImg, time);
}

window.onload = changeImg;