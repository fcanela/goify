'use strict';

/**
 * Module dependencies
 */
const goify = require('./goify');
const expect = require('chai').expect;

/**
 * Artifacts for tests
 */
const SUCCESS_RESULT = 'foobar';
const NO_ERROR = null;
const NATIVE_ERRORS = [
  RangeError,
  ReferenceError,
  SyntaxError,
  TypeError
];

function sucess(value) {
  return Promise.resolve(value);
}

function fail(error) {
  return Promise.reject(error);
}

describe('Goify', () => {
  describe('all operations', () => {
    ['all', 'escapeNativeErrors'].forEach((operationName) => {
      it('should return the resolved value as first parameter', async () => {
        const operation = goify[operationName];

        const result = await operation(sucess(SUCCESS_RESULT));
        expect(result).to.be.an('array');
        expect(result[0]).to.equal(SUCCESS_RESULT);
        expect(result[1]).to.equal(NO_ERROR);
      });

      it('should return the rejection value as second parameter', async () => {
        const operation = goify[operationName];
        const error = 'foobar';

        const result = await operation(fail(error));
        expect(result).to.be.an('array');
        expect(result[0]).to.equal(undefined);
        expect(result[1]).to.equal(error);
      });
    });
  });

  describe('all', () => {
    NATIVE_ERRORS.forEach((Exception) => {
      it(`should intercept ${Exception.name}`, async() => {
        const error = new Exception();
        const result = await goify.all(fail(error));
        expect(result).to.be.an('array');
        expect(result[0]).to.equal(undefined);
        expect(result[1]).to.equal(error);
      });
    });
  });

  describe('escapeNativeErrors', () => {
    NATIVE_ERRORS.forEach((Exception) => {
      it(`should not intercept ${Exception.name}`, async() => {
        const error = new Exception();
        try {
          await goify.escapeNativeErrors(fail(error));
        } catch (err) {
          expect(err).to.equal(error);
          return;
        }
        throw new Error(`${Exception.name} not thrown`);
      });
    });
  });
});
