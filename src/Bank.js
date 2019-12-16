function Bank() {
  this.balance = 0;
  this.arrOutput = ["date || credit || debit || balance"];
};

Bank.prototype.statementCalc = function() {

  var output = "";
  for ( i=0; i<this.arrOutput.length ;i++) {
    if (i === this.arrOutput.length-1) {
      output += this.arrOutput[i];
    } else {
      output += this.arrOutput[i] + "\n";
    }
  }
  return output;
};

Bank.prototype.statementShow = function() {
  console.log(this.statementCalc());
};

Bank.prototype.credit = function(sum) {
  this.balance += sum;

  var d = new Date();
  this.arrOutput.push(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear().toString().charAt(2)+
  d.getFullYear().toString().charAt(3)+' || '+Number(sum).toFixed(2)+' || || '+Number(this.balance).toFixed(2));
};

Bank.prototype.debit = function(sum) {
  this.balance -= sum;

  var d = new Date();
  this.arrOutput.push(d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear().toString().charAt(2)+
  d.getFullYear().toString().charAt(3)+' || || '+Number(sum).toFixed(2)+' || '+Number(this.balance).toFixed(2));
};
