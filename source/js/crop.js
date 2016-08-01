'use strict';

let utils = require('./utils');
let sendAjax = require('./sendAjax');

/**
 * Create crop area and add it to the page
 * @param {Number} width Width and height crop area
 */
class Crop {
  constructor(container, width) {
    this.parent = container;
    this.height = width;
    this.width = width;
  }

  render() {
    if (parent.offsetHeight < this.width) {
      this.height = parent.offsetHeight;
    }

    if (parent.offsetWidth < this.width) {
      this.width = parent.offsetWidth;
    }

    if (document.querySelector('.crop-area')) {
      this.cropArea = document.querySelector('.crop-area');
      this.cropArea.style.height = height + 'px';
      this.cropArea.style.width = width + 'px';
    } else {
      this.cropArea = document.createElement('div');
      this.cropArea.classList.add('crop-area');
      this.cropArea.style.width = this.width + 'px';
      this.cropArea.style.height = this.height + 'px';
      this.pictureCropArea = document.querySelector('.picture-crop-area');
      this.pictureCropArea.appendChild(this.cropArea);
    }

    utils.center(this.cropArea);
  }
  crop() {
    let imgCoords = this.pictureCropArea.getBoundingClientRect(),
      cropAreaCoords = this.cropArea.getBoundingClientRect();

    let cropCoords = {
      left: cropAreaCoords.left - imgCoords.left,
      right: cropAreaCoords.right - imgCoords.right,
      top: cropAreaCoords.top - imgCoords.top,
      bottom: cropAreaCoords.bottom - imgCoords.bottom,
    };

    this._sendAjax(cropCoords);
  }

  _sendAjax(url) {
    let promise = sendAjax(url);
    promise.then(
      result => {
        // TODO when we get respond from server
      },

      error => {
        // TODO if it error on the server
      }
    )
  }
}


module.exports = Crop;
