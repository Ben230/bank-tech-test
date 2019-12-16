describe("Bank", function() {
  describe("After creating a new bank account", function() {
    var bankAccount = new Bank();

    it("statementShow should return an empty statement", function() {
      expect(bankAccount.statementCalc()).toEqual("date || credit || debit || balance");
    });

    it("balance starts as 0", function() {
      expect(bankAccount.balance).toEqual(0);
    });

    it("increasing the balance by 250", function() {
      bankAccount.credit(250);
      expect(bankAccount.balance).toEqual(250);
    });
  });
});
