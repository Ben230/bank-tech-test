function Bank() {
  this.balance = 0;
  this.arrOutput = ["date || credit || debit || balance"];
};

Bank.prototype.statementCalc = function() {

  var output = "";

  for ( i=0; i<this.arrOutput.length; i++) {
    output += this.arrOutput[i] + "\n";
  }

  output = output.substring(0,output.length-1)
  return output;
};

Bank.prototype.statementShow = function() {
  console.log(this.statementCalc());
};

Bank.prototype.credit = function(sum) {
  this.balance += sum;

  this.addCreditDisplay(sum);
};

Bank.prototype.debit = function(sum) {
  this.balance -= sum;

  this.addDebitDisplay(sum);
};

Bank.prototype.addCreditDisplay = function(sum) {
  var d = new Date();
  this.arrOutput.push(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear().toString().charAt(2)+
  d.getFullYear().toString().charAt(3)+' || '+Number(sum).toFixed(2)+' || || '+Number(this.balance).toFixed(2));
};

Bank.prototype.addDebitDisplay = function(sum) {
  var d = new Date();
  this.arrOutput.push(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear().toString().charAt(2)+
  d.getFullYear().toString().charAt(3)+' || || '+Number(sum).toFixed(2)+' || '+Number(this.balance).toFixed(2));
};
