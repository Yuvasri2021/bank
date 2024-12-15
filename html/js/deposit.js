// Get the form and message elements
const depositForm = document.getElementById('depositForm');
const depositAmount = document.getElementById('depositAmount');
const accountSelect = document.getElementById('accountSelect');
const message = document.getElementById('message');
const balanceInfo = document.getElementById('balanceInfo');
const currentBalance = document.getElementById('currentBalance');

// Define account balances
const accounts = {
  checking: 1000,
  savings: 5000,
  business: 10000,
};

// Function to update balance info based on selected account
function updateBalanceInfo(account) {
  currentBalance.textContent = `Current Balance: $${accounts[account].toFixed(2)}`;
  balanceInfo.style.opacity = 1;
  balanceInfo.style.visibility = 'visible';
}

// Listen for the form submission
depositForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
  // Get selected account and deposit amount
  const selectedAccount = accountSelect.value;
  const depositAmountValue = parseFloat(depositAmount.value);
  
  if (depositAmountValue > 0) {
    // Update account balance
    accounts[selectedAccount] += depositAmountValue;
    
    // Display success message
    message.classList.remove('hidden');
    message.style.opacity = 1;
    message.textContent = `Deposit of $${depositAmountValue.toFixed(2)} to ${selectedAccount.charAt(0).toUpperCase() + selectedAccount.slice(1)} successful!`;

    // Update the balance info
    updateBalanceInfo(selectedAccount);

    // Reset the form
    depositForm.reset();

    // Optionally, hide the message after 3 seconds
    setTimeout(function() {
      message.style.opacity = 0;
      message.classList.add('hidden');
    }, 3000);
  } else {
    // Handle invalid deposit amount
    message.classList.remove('hidden');
    message.style.color = 'red';
    message.textContent = 'Please enter a valid amount greater than 0!';
  }
});
