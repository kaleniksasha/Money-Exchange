// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  if (currency > 10000) {
    return {
      error: "You are rich, my friend! We don't have so much coins for exchange"
    };
  }

  let m = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
  };

  let r = {};

  for (let n of ["H", "Q", "D", "N", "P"]) {
    let c = 0;
    while (currency - m[n] >= 0) {
      currency -= m[n];
      c++;
    }
    if (c > 0) r[n] = c;
  }

  return r;
};
