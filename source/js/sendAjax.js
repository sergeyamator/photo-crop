
'use strict';

/**
 *
 * Create ajax and send it
 * @param {String} url
 * @returns {Promise}
 */
function sendAjax(url) {
  let promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', url);
    xhr.addEventListener('load', () => {
      resolve(xhr.response);
    });

    xhr.addEventListener('error', () => {
      reject();
    });

    xhr.send();
  });

  return promise;
}

module.exports = sendAjax;