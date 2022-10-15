
/*
Turn a string of 24h time into words.

You can trust that you’ll be given a valid string (it will always have a two-digit hour 00-23, and a two-digit minute 00-59). Hours 0-11 are am, and hours 12-23 are pm.

Examples of the output we’d like:

Input	Expected Output
00:00	midnight
00:12	twelve twelve am
01:00	one o’clock am
06:01	six oh one am
06:10	six ten am
06:18	six eighteen am
06:30	six thirty am
10:34	ten thirty four am
12:00	noon
12:09	twelve oh nine pm
23:23	eleven twenty three pm
*/

// ####################################
// Array 0 to 59 => the index match the number in string
// So using that i can return
// num[10] is ten
// num[6] is six
// num[59] is fifty-nine
// Doing that makes the exersice easy
// I iknow that this way dont scale over 59 bud the exercise is until 59 :)

let num = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-three",
  "twenty-four",
  "twenty-five",
  "twenty-six",
  "twenty-seven",
  "twenty-eight",
  "twenty-nine",
  "thirty",
  "thirty-one",
  "thirty-two",
  "thirty-three",
  "thirty-four",
  "thirty-five",
  "thirty-six",
  "thirty-seven",
  "thirty-eight",
  "thirty-nine",
  "forty",
  "forty-one",
  "forty-two",
  "forty-three",
  "forty-four",
  "forty-five",
  "forty-six",
  "forty-seven",
  "forty-eight",
  "forty-nine",
  "fifty",
  "fifty-one",
  "fifty-two",
  "fifty-three",
  "fifty-four",
  "fifty-five",
  "fifty-six",
  "fifty-seven",
  "fifty-eight",
  "fifty-nine",
];

function timeWord(time) {
  let h = parseInt(time.split(":")[0]);
  let m = parseInt(time.split(":")[1]);
  let pm_am = h >= 12 ? "pm" : "am";

  if (h === 00 && m === 00) {
    console.log("midnight");
    return "midnight";
  }
  if (h === 12 && m === 00) {
    console.log("noon");
    return "noon";
  }
  if (h === 00) {
    console.log(`twelve ${num[m]} ${pm_am}`);
    return `twelve ${num[m]} ${pm_am}`;
  }
  if (m === 00) {
    console.log(`${num[h]} o'clock ${pm_am}`);
    return `${num[h]} o'clock ${pm_am}`;
  }
  if (m === 01) {
    console.log(`${num[h]} oh one ${pm_am}`);
    return `${num[h]} oh one ${pm_am}`;
  }
  if (m === 09) {
    console.log(`${num[h]} oh nine ${pm_am}`);
    return `${num[h]} oh nine ${pm_am}`;
  }

  console.log(`${num[h]} ${num[m]} ${pm_am}`);
  return `${num[h]} ${num[m]} ${pm_am}`;
}

timeWord("00:00");
timeWord("00:12");
timeWord("01:00");
timeWord("06:01");
timeWord("06:10");
timeWord("06:18");
timeWord("06:30");
timeWord("10:34");
timeWord("12:00");
timeWord("12:09");
timeWord("23:23");

module.exports = timeWord;
