function createBankAccount(initialBalance){
   let balance = initialBalance;
   return{
    deposit(value){
      balance += value;
      console.log(`Deposited:${value},current balance: ${balance}`);
    },
    withdraw(value){
      balance -= value;
      console.log(`withdraw:${value},current Balance: ${balance}`);
    },
    checkBalance(){
      console.log(`current Balance:${balance}`);
    },
   };
}

let user = createBankAccount(100);
user.deposit(50);
user.withdraw(100);
user.checkBalance();

console.log(user.balance);