 function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

function startTimer() {
              setInterval(displayNextImage, 4000);
          }

var images = [], x = -1;
          images[0] = "images/image1.png";
          images[1] = "images/image2.png";
          images[2] = "images/image3.png";
