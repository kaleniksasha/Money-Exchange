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

  let result = {};

  for (let n of ['H', 'Q', 'D', 'N', 'P']) {
    let c = Math.floor(currency / m[n]);
    currency = currency % m[n];
    if (c > 0) result[n] = c;
  }

  console.log(currency);

  return result;
};
