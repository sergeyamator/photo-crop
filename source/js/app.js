'use strict';
let Photo = require('./photo');

let actionBtn = document.querySelector('.upload-btn');
let photo = new Photo(document.querySelector('.picture'));

actionBtn.addEventListener('change', (e) => {
  let file = e.target.files[0];

  photo.setImage(file);
});


/*let app = App();

image.load = function() {
  app.setImage(url);
}

function changeCoords() {
  var coords = [0, 0];

  /!* ... *!/

  app.setCoords(coords);
}

cropEl.addEventListener('click', function() {
  app.crop();
});*/

/*
downloadBtn.addEventListener('click', () => {
  app.save();
});*/


function isSupportedFileApi() {
 return  !!(window.File && window.FileReader);
}
