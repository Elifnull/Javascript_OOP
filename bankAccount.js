class BankAccount {
    constructor(intRate = 0.2, balance = 0) { // don't forget to add some default values for these parameters!
        this.intRate = intRate;
        this.balance = balance;
	// don't worry about user info here; we'll involve the User class soon
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`$${this.balance}`);
    }
    withdraw(amount) {
        if(this.balance > amount){
            this.balance -= amount;
        } else {
            console.log(`insufficient amout you will be charged $5`);
            this.balance -= 5;
        }
        console.log(`$${this.balance}`);
        
    }
    displayAccountInfo() {
        console.log(`balance: ${this.balance}, intrest rate: ${this.intRate}`);
    }
    yieldInterest() {
        if (this.balance > 0){
            this.balance *= (1+ this.intRate);
        }
    }
}

const bank = new BankAccount();
const bank2 = new BankAccount(0.06, 200);

bank.withdraw(1);

bank.deposit(300);
bank2.deposit(1000);

bank.withdraw(100);