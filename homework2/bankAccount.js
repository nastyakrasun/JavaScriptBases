class BankAccount {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
        this.transactionHistory = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactionHistory.push(`Внесено: ${amount}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Недостаточно средств");
            return;
        }
        
        this.balance -= amount;
        this.transactionHistory.push(`Снято: ${amount}`);
    }

    getBalance() {
        return this.balance;
    }

    getTransactionHistory() {
        return this.transactionHistory;
    }
}

class SavingsAccount extends BankAccount {
    constructor(owner, interestRate) {
        super(owner);
        this.interestRate = interestRate;
    }

    applyInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
        this.transactionHistory.push(`Начислены проценты: ${interest}`);
    }
}

export { BankAccount, SavingsAccount };
