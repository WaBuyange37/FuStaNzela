let turebe = createBankAccount('Kwizera', 1000);
turebe.getBankName();
//without passing to getBankName() you can not access the bankName

function createBankAccount(name, balance = 0) {
  let bankName = 'Equity Bank Kigali';
  return {
    name,
    balance, 
    deposit(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        alert("Insufficient funds!");
      }
    },
    getBalance() {
      return this.balance; // Fix: Correct method name
    },
    getBankName: function(){
      console.log(bankName);
    },
  };
}