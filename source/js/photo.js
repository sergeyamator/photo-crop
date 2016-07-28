'use strict';

/**
 * @class
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
    let fileReader = new FileReader();
    this.element.classList.remove('is-hidden');

    fileReader.addEventListener('load', () => {
      this.img.src = fileReader.result;
      this._createCropArea(this.img.offsetWidth / 2);
      this._allowDraggable(this.cropArea);
    });

    fileReader.readAsDataURL(file);
  }

  _allowDraggable(el) {
    el.addEventListener('mousedown', _onMouseDown);
  }

  crop() {
    // TODO
  }

  save() {
    // TODO
  }

  /**
   * Create crop area and add it to the page
   * @param {Number} width Width and height crop area
   * @private
   */
  _createCropArea(width) {
    if (document.querySelector('.crop-area')) {
      this.cropArea = document.querySelector('.crop-area');
      this.cropArea.style.width = width + 'px';
      this.cropArea.style.height = width + 'px';
    } else {
      this.cropArea = document.createElement('div');
      this.cropArea.classList.add('crop-area');
      this.cropArea.style.width = width + 'px';
      this.cropArea.style.height = width + 'px';

      document.querySelector('.picture-crop-area').appendChild(this.cropArea);
    }
  }
}


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