'use strict';

function center(el) {
  el.style.left = '50%';
  el.style.top = '50%';
  el.style.transform = 'translate(-50%, -50%)';
}

function isSupportedFileApi() {
  return !!(window.File && window.FileReader);
}

module.exports = {
  center: center,
  isSupportedFileApi: isSupportedFileApi
};