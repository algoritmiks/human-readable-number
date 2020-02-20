module.exports = function toReadable (number) {
 
    const digits = {
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
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
      }
    
      if (number === 0) return "zero";
      let hundreds = '';
      let tens = '';
      let units = '';
      let arr = String(number).split('').map(Number);
    
      if (arr.length == 3) {
        hundreds = `${digits[arr[0]]} hundred`;
        arr.shift();
      }
      
      if (arr.length == 2) {
        if (arr[0] == 1) {
          tens = digits[arr[0] * 10 + arr[1]];
          arr.shift(2);
        } else {
          if (arr[0] !== 0) {
            tens = `${digits[arr[0] * 10]}`;
          }
        }
        arr.shift();
      };
    
    
      if (arr.length == 1) {
        arr[0] == 0 ? '' : units = (digits[arr[0]]);
      } 
    
      if (!tens) return `${hundreds} ${units}`.trim();
    
      return `${hundreds} ${tens} ${units}`.trim();
}
