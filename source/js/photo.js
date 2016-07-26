'use strict';

/**
 * @class
 */
class Photo {
  constructor(element) {
    this.element = element;
  }


  /**
   * Set image
   * @param file
   */
  setImage(file) {
    let fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      this.element.src = fileReader.result;
    });

    fileReader.readAsDataURL(file);
  }
}

module.exports = Photo;