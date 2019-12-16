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

    it("crediting the balance by 250", function() {
      bankAccount.credit(250);
      expect(bankAccount.balance).toEqual(250);
    });

    it("credit the balance by 250 then debiting the balance by 10", function() {
      bankAccount.credit(250);
      bankAccount.debit(10);
      expect(bankAccount.balance).toEqual(240);
    });

    it("display after credit of 200", function() {
      bankAccount.credit(200);
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance\n"
       + "16/12/19 || 200 || || 200");
    });

    it("display after credit of 200 and 250", function() {
      bankAccount.credit(200);
      bankAccount.credit(250);
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance\n"
       + "16/12/19 || 200 || || 200\n16/12/19 || 250 || || 450");
    });
  });
});
