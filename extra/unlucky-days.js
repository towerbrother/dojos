// Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.

// Find the number of Friday 13th in the given year.

// Input: Year as an integer.

// Output: Number of Black Fridays in the year as an integer.

// Examples:

// unluckyDays(2015) == 3
// unluckyDays(1986) == 1

const unluckyDays = (year) => {
  const friday = 5;
  const unlucky = 13;
  const months = 12;
  let res = 0;
  for (let i = 0; i < months; i++) {
    const date = new Date(year, i, unlucky);
    if (date.getDay() === friday) {
      res++;
    }
  }
  return res;
};
