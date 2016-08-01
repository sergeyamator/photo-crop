'use strict';
let Photo = require('./photo');

let actionBtn = document.querySelector('.upload-btn');
let photo = new Photo(document.querySelector('.picture-section'));

/**
 * Calls after picture uploading.
 * Render this picture in page area and show crop button
 */
actionBtn.addEventListener('change', (e) => {
  let file = e.target.files[0];

  photo.setImage(file);
  document.querySelector('.action-btn').classList.remove('is-hidden')
});



