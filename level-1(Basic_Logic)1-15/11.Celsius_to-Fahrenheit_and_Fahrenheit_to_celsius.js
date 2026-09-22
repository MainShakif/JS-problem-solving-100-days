/**
 * *11. Convert Celsius to Fahrenheit and Fahrenheit to Celsius.
 */

// ***Problem Decomposition
/**
 
 * * C to F ------
 * *1.Start
 * 2. input --> c calue
 * 3. F = 1.8C +32 ==>> F -> value calculation
 * 4. print F value
 * 5. End
 */

// ***Problem Decomposition

/**
 * * F to C ------
 * *1.Start
 * 2. input --> F calue
 * 3. C = 5/9 * (F - 32) ==>> C -> value calculation
 * 4. print C value
 * 5. End
 */

//* C to F : Solution***********************************

// let celsiusTemp = 90; //*degree

// let fahrenheitTemp = 1.8 * celsiusTemp + 32;

// console.log("Temp is:", fahrenheitTemp, "degree fahrenheit");

//* F to C : Solution***********************************

let fahrenheitTemp = 194; //*degree

let celsiusTemp = (5 / 9) * (fahrenheitTemp - 32);

console.log("Temp is:", celsiusTemp, "degree celsius");
