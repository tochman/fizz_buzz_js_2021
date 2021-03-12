const FizzBuzz = require('../src/fizzBuzz.js')

const subject = new FizzBuzz()


describe('FizzBuzz', () => {
  it('is expected to return a number if no game conditions are met', () => {
    expect(subject.check(1)).toEqual(1)
  });

  it('is expected to return Fizz if number is divisable by 3', () => {
    expect(subject.check(3)).toEqual("Fizz")
  });

  it('is expected to return Buzz if number is divisable by 5', () => {
    expect(subject.check(5)).toEqual("Buzz")
  });

  it('is expected to return FizzBuzz if number is divisable by 15', () => {
    expect(subject.check(15)).toEqual("FizzBuzz")
  });
});