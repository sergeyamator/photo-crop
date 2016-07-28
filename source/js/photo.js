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
    });


    fileReader.readAsDataURL(file);
  }

  _renderCropView() {


  }

  crop() {
    // TODO
  }

  save() {
    // TODO
  }

  _createCropArea(width) {
    this.cropArea = document.createElement('div');
    this.cropArea.classList.add('crop-area');

    this.cropArea.style.width = width + 'px';
    this.cropArea.style.height = width + 'px';

    document.querySelector('.picture-section').appendChild(this.cropArea);
  }
}

module.exports = Photo;