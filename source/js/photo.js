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
    });

    fileReader.readAsDataURL(file);
  }

  _renderCropView() {
    // TODO
  }

  crop() {
    // TODO
  }

  save() {
    // TODO
  }
}

module.exports = Photo;