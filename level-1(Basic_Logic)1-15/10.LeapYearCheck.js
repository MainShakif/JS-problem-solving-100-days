/**
 * *10. Check whether a given year is a leap year.
 */

// let year = 2092;
// let year = 2002;
// let year = 2006;
// let year = 2010;
let year = 2012;

// *I will follow this logic
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(
    `The Year is: ${year}, This is a Leap year bcz the year is divisible by 4 and not Divisible by 100, or it is divisible by 400`,
  );
} else {
  console.log(
    `The Year is: ${year}, This is not a Leap year bcz the year is not divisible by 4 Or by 400`,
  );
}

//*This is a bad logic bcz if a year is Divisible by 4, no need to check the year
if (year % 4 === 0 && year % 100 !== 0) {
  console.log(
    `The Year is: ${year}, This is a Leap year bcz the year is divisible by 4 but not divisible by 100`,
  );
} else if (year % 400 === 0) {
  console.log(
    `The Year is: ${year}, This is a Leap year bcz the year is divisible by 400`,
  );
} else {
  console.log("Not Leap Year");
}
