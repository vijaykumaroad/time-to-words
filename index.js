// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  const splitTime = time.split(":");
  const h = parseInt(splitTime[0]),
    m = parseInt(splitTime[1]);

  let englishWords = "";

  if (m === 0) {
    if (h === 0) {
      englishWords = "midnight";
    } else if (h === 12) {
      englishWords = "midday";
    } else {
      englishWords = `${numberConversions[h]} o'clock`;
    }
  } else if (m != 15 && m < 30) {
    englishWords = `${numberConversions[m]} past ${numberConversions[h]}`;
  } else if (m === 15) {
    englishWords = `quarter past ${numberConversions[h]}`;
  } else if (m === 30) {
    englishWords = `half past ${numberConversions[h]}`;
  } else if (m > 30 && m != 45) {
    englishWords = `${numberConversions[60 - m]} to ${
      numberConversions[h + 1]
    }`;
  } else if (m === 45) {
    englishWords = `quarter to ${numberConversions[h + 1]}`;
  }

  if (englishWords === "") {
    //show error
  }

  return englishWords;
}

const numberConversions = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twenty one",
  22: "twenty two",
  23: "twenty three",
  24: "twenty four",
  25: "twenty five",
  26: "twenty six",
  27: "twenty seven",
  28: "twenty eight",
  29: "twenty nine",
  30: "thirty",
  45: "fourty five",
  55: "fifty five",
};

module.exports = { convertTimeToWords };
