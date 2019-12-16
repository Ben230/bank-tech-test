describe("Bank", function() {
  describe("After creating a new bank account", function() {

    var bankAccount;

    beforeEach(function() {
      bankAccount = new Bank();
    });

    it("statementShow returns an empty statement", function() {
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance");
    });

    it("balance starts as 0", function() {
      expect(bankAccount.balance).toEqual(0);
    });

    it("crediting the balance by 15.39", function() {
      bankAccount.credit(15.39);
      expect(bankAccount.balance).toEqual(15.39);
    });

    it("credit the balance by 250 then debiting the balance by 10.27", function() {
      bankAccount.credit(250);
      bankAccount.debit(10.27);
      expect(bankAccount.balance).toEqual(239.73);
    });

    it("display after credit of 200", function() {
      bankAccount.credit(200);
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance\n"
       + "16/12/19 || 200.00 || || 200.00");
    });

    it("display after credit of 200 and 250", function() {
      bankAccount.credit(200);
      bankAccount.credit(250.99);
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance\n"
       + "16/12/19 || 200.00 || || 200.00\n16/12/19 || 250.99 || || 450.99");
    });

    it("display after credit of 200 and debit of 75", function() {
      bankAccount.credit(200.50);
      bankAccount.debit(75);
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance\n"
       + "16/12/19 || 200.50 || || 200.50\n16/12/19 || || 75.00 || 125.50");
    });
  });
});
