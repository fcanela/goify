'use strict';

/**
 * List of native Node.js exceptions. They usually points to a coding
 * error instead of a bussiness logic case.
 *
 * Source: https://nodejs.org/api/errors.html
 */
const NATIVE_ERRORS = [
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError
];

module.exports = {
  /**
   * Goify the promise capturing all the errors
   *
   * @param {Promise} promise Promise to goify
   * @return  {Promise<Array>} First array item is the result. Second is the error (null when none).
   */
  all(promise) {
    return promise
      .then(result => [result, null])
      .catch(error => [undefined, error]);
  },
  /**
   * Goify the promise avoiding native errors capture
   *
   * @param {Promise} promise Promise to goify
   * @return  {Promise<Array>} First array item is the result. Second is the error (null when none).
   */
  escapeNativeErrors(promise) {
    return promise
      .then(result => [result, null])
      .catch((error) => {
        if (typeof error === 'object' && NATIVE_ERRORS.includes(error.constructor)) {
          throw error;
        }
        return [undefined, error];
      });
  }
};
