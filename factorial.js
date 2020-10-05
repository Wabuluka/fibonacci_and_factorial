/**
 * Group Members
 * Walter Ruganzu
 * Mike Mwanje
 * Isaac Ssemugenyi
 * Davies Wabuluka
 *
 *
 * n!, is the product of all positive integers less than or equal to n
 * Given a number n , n! = n.(n-1).(n-2).(n-3)......1
 */

function factorial(number) {
  let result = 1;
  if (number < 0) {
    result = 'Number can\'t be a negative';
    return result;
  } if (number === 0 && number === 1) {
    result *= 1;
    return result;
  }
  for (let counter = number; counter > 1; counter -= 1) {
    result *= counter;
  }
  return result;
}

// calculator(30, factorial);

module.exports = factorial;
