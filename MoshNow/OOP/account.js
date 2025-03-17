let cash = document.getElementById("money");
let accountName = document.getElementById("name"); 
let nameInput = document.getElementById("nameIn");
let depositInput = document.getElementById("deposit");
let withdrawInput = document.getElementById("withdraw");

let account = null;

// Handle form submission
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const userName = nameInput.value.trim();
  const depositAmount = parseFloat(depositInput.value) || 0;
  const withdrawAmount = parseFloat(withdrawInput.value) || 0;

  // Fix: Create account only if it doesn't exist
  if (!account) {
    account = createBankAccount(userName, 0);
  }

  // Perform transactions
  account.deposit(depositAmount);
  account.withdraw(withdrawAmount);

  accountName.textContent = account.name;
  cash.textContent = `$${account.getBalance()}`;

  depositInput.value = "";
  withdrawInput.value = "";
});

function createBankAccount(name, balance = 0) {
  return {
    name,
    balance, // Fix: Use correct balance property
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
    }
  };
}
