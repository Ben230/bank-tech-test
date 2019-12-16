function Bank() {
  this.balance = 0;
  this.outputArr = ["date || credit || debit || balance"];
};

Bank.prototype.statementCalc = function() {

  var output = "";

  for ( i=0; i<this.outputArr.length; i++) {
    output += this.outputArr[i] + "\n";
  }

  output = output.substring(0,output.length-1)
  return output;
};

Bank.prototype.statementShow = function() {
  console.log(this.statementCalc());
};

Bank.prototype.credit = function(sum) {
  this.balance += sum;
  this.creditDisplay(sum);
};

Bank.prototype.debit = function(sum) {
  this.balance -= sum;
  this.debitDisplay(sum);
};

Bank.prototype.creditDisplay = function(sum) {
  this.outputArr.push(this.getDate()+' || '+this.twoDP(sum)+' || || '+
  this.twoDP(this.balance));
};

Bank.prototype.debitDisplay = function(sum) {
  this.outputArr.push(this.getDate()+' || || '+this.twoDP(sum)+' || '+
  this.twoDP(this.balance));
};

Bank.prototype.getDate = function() {
  var d = new Date();
  return d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear().toString().charAt(2)+
  d.getFullYear().toString().charAt(3);
};

Bank.prototype.twoDP = function(num) {
  return Number(num).toFixed(2);
};
