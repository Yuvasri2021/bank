let currentBalance = 2500;
let transactionHistory = [
    'Deposit: $1000',
    'Withdraw: $200',
    'Deposit: $500'
];

// Function to update balance and transaction history
function updateAccount() {
    document.getElementById('balance').textContent = currentBalance.toLocaleString();
    let transactionList = document.getElementById('transaction-list');
    transactionList.innerHTML = '';
    transactionHistory.forEach(transaction => {
        let listItem = document.createElement('li');
        listItem.textContent = transaction;
        transactionList.appendChild(listItem);
    });
}

// Deposit function
function depositFunds(amount) {
    currentBalance += amount;
    transactionHistory.push(`Deposit: $${amount}`);
    updateAccount();
}

// Withdraw function
function withdrawFunds(amount) {
    if (currentBalance >= amount) {
        currentBalance -= amount;
        transactionHistory.push(`Withdraw: $${amount}`);
        updateAccount();
    } else {
        alert('Insufficient funds!');
    }
}

// Initial account setup
updateAccount();
