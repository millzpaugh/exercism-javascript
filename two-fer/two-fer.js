var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  const other = !who ? 'you' : who; 
  return `One for ${other}, one for me.`;
};

module.exports = TwoFer;
