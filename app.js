const math=require('./math');
const stringUtils=require('./stringUtils');
const dateUtils=require('./dateUtils');

// math
console.log("\nInside maths variable : ");
console.log(math);
console.log("\nPlus is " +math.plus(7,4));
console.log("Miinus is " +math.miinus(3,6));

// stringUtils
console.log("\nInside stringUtils variable: ");
console.log(stringUtils);
console.log("\nUppercase 'testi' is: " + stringUtils.toUpperCase('testi'));
console.log("Reversed 'testi' is: " + stringUtils.reverseString('testi'));

// dateUtils.js
console.log("\nInside dateUtils variable: ");
console.log(dateUtils);
console.log("\nCurrent date is: " + dateUtils.getCurrentDate());
console.log("Formatted date '2025-02-23' is: " + dateUtils.formatDate('2025-02-23'));