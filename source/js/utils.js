'use strict';

/**
 * Add styles to the element
 * which move it on the center
 * @param {HTMLElement} el
 */
function center(el) {
  el.style.left = '50%';
  el.style.top = '50%';
  el.style.transform = 'translate(-50%, -50%)';
}

/**
 * Check does user browser support File API
 * @returns {boolean}
 */
function isSupportedFileApi() {
  return !!(window.File && window.FileReader);
}

module.exports = {
  center: center,
  isSupportedFileApi: isSupportedFileApi
};