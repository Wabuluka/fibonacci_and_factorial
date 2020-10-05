/**

 * Group Members

 * Walter Ruganzu

 * Mike Mwanje

 * Isaac Ssemugenyi

 * Davies Wabuluka

 *

 * Fibonacci Numbers = Are numbers where the preceeding number

 * is the sum of two previous fibonacci numbers

*/

function fibonacci(number) {
  return number < 0 ? 0 : number < 2 ? number : fibonacci(number - 1) + fibonacci(number - 2);
}

// calculator(30, fibonacci);

module.exports = fibonacci;
