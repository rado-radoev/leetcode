'use strict';
/*
 A password is said to be strong if it satisfies all the following criteria:

It has at least 8 characters.
It contains at least one lowercase letter.
It contains at least one uppercase letter.
It contains at least one digit.
It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
Given a string password, return true if it is a strong password. Otherwise, return false.



Example 1:

Input: password = "IloveLe3tcode!"
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.
Example 2:

Input: password = "Me+You--IsMyDream"
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.
Example 3:

Input: password = "1aB!"
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.
 */

/**
 * @param {string} password
 * @return {boolean}
 */
 var strongPasswordCheckerII = function(password) {
    if (password.length < 8) return false;

    const specialChars = ['!','@','#','$','%','^','&','*','(',')','-','+'];
    const complexity = new Map();
    complexity.set('lc', 0); //lowercase
    complexity.set('uc', 0); //upperCase
    complexity.set('sc', 0); //specialCahr
    complexity.set('nu', 0); //number

    const isSpecialChar = value => specialChars.includes(value);
    const isLowerCase = value => value >= 97 && value <= 122;
    const isUpperCase = value => value >= 65 && value <= 90;
    const isNumber = value => value >= 48 && value <= 57;
    const matchTwoValues = (el1, el2) => el1 === el2;

    for (let i = 0; i < password.length; i++) {
      let currentChar = password[i];
      if (matchTwoValues(currentChar.charCodeAt(), password.charCodeAt(i + 1))) return false

      if (isSpecialChar(currentChar)) complexity.set('sc', 1);
      if (isLowerCase(currentChar.charCodeAt())) complexity.set('lc', 1);
      if (isUpperCase(currentChar.charCodeAt())) complexity.set('uc', 1);
      if (isNumber(currentChar.charCodeAt())) complexity.set('nu', 1);
    }

    for (const [key, value] of complexity.entries()) {
      if (value !== 1) return false
    }

    return true;
};


console.log(strongPasswordCheckerII("ecuwcfoyajkolntovfniplayrxhzpmhrkhzonopcwxgupzhoupw"))
// console.log(strongPasswordCheckerII("IloveLe3tcode!"))
// console.log(strongPasswordCheckerII("Me+You--IsMyDream"))
// console.log(strongPasswordCheckerII("1aB!"))
