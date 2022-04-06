class BankAccount {
    constructor(intRate = 0.2, balance = 0) { // don't forget to add some default values for these parameters!
        this.intRate = intRate;
        this.balance = balance;
	// don't worry about user info here; we'll involve the User class soon
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    displayAccountInfo() {
        console.log(`balance: ${this.balance}, intrest rate: ${this.intRate}`)
    }
    yieldInterest() {
        console.log(`interest rate: ${this.intRate}`)
    }
}