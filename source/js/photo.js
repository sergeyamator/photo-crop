'use strict';

const URL = '';
let utils = require('./utils');
let Crop = require('./crop');
/**
 * Creates class Photo which renders
 * picture on the page
 * @class Photo
 */
class Photo {
  constructor(container) {
    this.element = container;
    this.img = this.element.querySelector('.picture');
  }

  /**
   * Set image
   * @param file
   */
  setImage(file) {
    if (!utils.isSupportedFileApi()) {
      throw new Error('Ваш браузер не поддерживает современные технологии');
    }

    let fileReader = new FileReader();
    this.element.classList.remove('is-hidden');

    fileReader.addEventListener('load', () => {
      this.img.src = fileReader.result;
      let cropArea = new Crop(document.querySelector('.picture-crop-area'), this.img.offsetWidth / 2);
      cropArea.render();
      this._attachDragEvent(document.querySelector('.crop-area'));

      document.querySelector('.action-btn').addEventListener('click', (e) => {
        e.preventDefault();
        cropArea.crop(URL);
      })
    });

    fileReader.readAsDataURL(file);
  }

  /**
   * Attach drag event on the element
   * @param {HTMLElement} el
   * @private
   */
  _attachDragEvent(el) {
    el.addEventListener('mousedown', _onMouseDown);
  }

  save() {
    // TODO
  }
}

/**
 * When users click we get coords event target
 * and attach mousemove and mouseup events
 * @param {Event} e
 * @private
 */
function _onMouseDown(e) {
  this.activeEl = e.target;
  this._offsetX = e.offsetX;
  this._offsetY = e.offsetY;

  document.body.addEventListener('mousemove', _onMouseMove.bind(this));
  document.body.addEventListener('mouseup', _onMouseUp.bind(this));
}

function _onMouseUp() {
  this.activeEl = null;
}

/**
 * When user click and move mouse crop area will
 * drag while user doesn't let go mouse
 * @param e
 * @private
 */
function _onMouseMove(e) {
  if (this.activeEl) {
    this.activeEl.style.transform = 'translate(0, 0)';
    let parent = document.querySelector('.picture-crop-area'),
      parentX = parent.getBoundingClientRect().left,
      parentY = parent.getBoundingClientRect().top,
      maxRightCoord = parent.offsetWidth - this.activeEl.offsetWidth,
      maxBottomCoord = parent.offsetHeight - this.activeEl.offsetHeight;

    let leftCoord = e.clientX - this._offsetX - parentX,
      topCoord = e.clientY - this._offsetY - parentY;

    if (leftCoord <= 0) {
      leftCoord = 0;
    }

    if (topCoord <= 0) {
      topCoord = 0;
    }

    if (leftCoord >= maxRightCoord) {
      leftCoord = maxRightCoord;
    }

    if (topCoord >= maxBottomCoord) {
      topCoord = maxBottomCoord;
    }

    this.activeEl.style.left = leftCoord + 'px';
    this.activeEl.style.top = topCoord + 'px';
  }
}

module.exports = Photo;