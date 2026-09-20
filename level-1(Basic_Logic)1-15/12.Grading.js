/**
 * ?12. Calculate a student's grade based on their marks.
 *
 * *5.0 GPA Scale Breakdown5.00 (A+): 80% – 100% (Outstanding / Excellent)
 *
 * 4.00 (A): 70% – 79% (Very Good / Good)
 *
 * *3.50 (A-): 60% – 69% (Above Average)
 *
 * 3.00 (B): 50% – 59% (Satisfactory / Good)
 *
 * *2.00 (C): 40% – 49% (Pass / Fair)
 *
 * 1.00 (D): 33% – 39% (Lowest Passing Grade)
 *
 * *0.00 (F): Below 33% or 40% (Fail)
 */

let marks = 32;

if (marks < 0 || marks > 100) {
  console.log("Invalid mark");
} else if (marks >= 80) {
  console.log("A+");
} else if (marks >= 70) {
  console.log("A");
} else if (marks >= 60) {
  console.log("A-");
} else if (marks >= 50) {
  console.log("B");
} else if (marks >= 40) {
  console.log("C");
} else if (marks >= 33) {
  console.log("D");
} else {
  console.log("fail");
}
