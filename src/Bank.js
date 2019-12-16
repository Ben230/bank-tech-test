function Bank() {
  this.balance = 0;
};

Bank.prototype.statementCalc = function() {
  return "date || credit || debit || balance";
};

Bank.prototype.statementShow = function() {
  console.log(this.statementCalc());
};

Bank.prototype.credit = function(sum) {
  this.balance += sum;
};
