import { BankAccount } from "./bankAccount.mjs";

class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.account = new BankAccount();
        this.savings = new BankAccount();
    }
    makeDeposit(amount){
        this.account.deposit(amount);
    }
    makeWithdrawl(amount){
        this.account.withdraw(amount);
    }
    displayUserBalance(){
        this.account.displayAccountInfo();
    }
}

const Mike = new User("mike@hi", "@high");

Mike.makeDeposit(100);
Mike.makeWithdrawl(10);
Mike.displayUserBalance();