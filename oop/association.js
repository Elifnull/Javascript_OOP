class BankAccount {
    constructor(intRate, balance) { // don't forget to add some default values for these parameters!
    	// your code here! (remember, this is where we specify the attributes for our class)
	// don't worry about user info here; we'll involve the User class soon
    }
    deposit(amount) {
	// your code here
    }
    withdraw(amount) {
	// your code here
    }
    displayAccountInfo() {
	// your code here
    }
    yieldInterest() {
	// your code here
    }
}




class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.account = new BankAccount(intRate=0.02, balance=0);	// this is the NEW line
    }
}

const account1 = new BankAccount(intRate=0.02, balance=100);
const account2 = new BankAccount(balance=100, intRate=0.02);


