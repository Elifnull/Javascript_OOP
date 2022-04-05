class User {
    constructor(username, emailAddress) {  // here's what we have so far       
        this.name = username      
        this.email = emailAddress  
        this.accountBalance = 0
    }
    makeDeposit(amount) {// takes a parameter this is the amount of the deposit
        this.accountBalance += amount;   // the specific user's account increases by the amount of the value received
    }
    makeWithdrawl(amount) {
        this.accountBalance -= amount;
    }
}

uido.makeDeposit(100)
guido.makeDeposit(200)
monty.makeDeposit(50)
console.log(guido.accountBalance)	// output: 300
console.log(monty.accountBalance)	// output: 50