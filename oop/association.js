class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.account = new BankAccount(intRate=0.02, balance=0);	// this is the NEW line
    }
}