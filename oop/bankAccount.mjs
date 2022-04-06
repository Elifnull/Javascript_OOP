class BankAccount {
    constructor(intRate = 0.2, balance = 0) { // don't forget to add some default values for these parameters!
        this.intRate = intRate;
        this.balance = balance;
	// don't worry about user info here; we'll involve the User class soon
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Your Balance: $${this.balance}`);
    }
    withdraw(amount) {
        if(this.balance > amount){
            this.balance -= amount;
        } else {
            console.log(`insufficient amout you will be charged $5`);
            this.balance -= 5;
        }
        console.log(`Your Balance: $${this.balance}`);
        
    }
    displayAccountInfo() {
        console.log(`balance: ${this.balance}, intrest rate: ${this.intRate}`);
    }
    yieldInterest() {
        if (this.balance > 0){
            this.balance *= (1+ this.intRate);
        }
        console.log(`Your Balance: $${this.balance}`);
    }
}

export { BankAccount };