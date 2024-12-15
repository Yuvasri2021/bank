// Simulated Account Details
let accountBalance = 5000; // Example balance
const correctPIN = "1234"; // Correct PIN for the user

// Track withdrawal amount
let withdrawalAmount = 0;

// Get form elements
const withdrawForm = document.getElementById('withdrawForm');
const withdrawAmountInput = document.getElementById('withdrawAmount');
const pinCodeInput = document.getElementById('pinCode');
const message = document.getElementById('message');

// Handle form submission for withdrawal
withdrawForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    withdrawalAmount = parseFloat(withdrawAmountInput.value);
    const enteredPin = pinCodeInput.value;

    if (withdrawalAmount > 0) {
        // Check if the entered PIN is correct
        if (enteredPin === correctPIN) {
            // Check if the withdrawal is less than or equal to the balance
            if (accountBalance >= withdrawalAmount) {
                // Proceed with withdrawal
                accountBalance -= withdrawalAmount;
                showMessage(`Withdrawal of $${withdrawalAmount} successful!`, 'success');
                resetForm();
            } else {
                showMessage('Insufficient funds for this withdrawal!', 'error');
            }
        } else {
            showMessage('Incorrect PIN. Please try again!', 'error');
        }
    } else {
        showMessage('Please enter a valid withdrawal amount!', 'error');
    }
});

// Helper function to display messages
function showMessage(text, type) {
    message.classList.remove('hidden');
    message.classList.remove('success', 'error');
    message.classList.add(type);
    message.textContent = text;

    // Hide the message after 3 seconds
    setTimeout(function() {
        message.classList.add('hidden');
    }, 3000);
}

// Helper function to reset the form
function resetForm() {
    withdrawAmountInput.value = '';
    pinCodeInput.value = '';
}
