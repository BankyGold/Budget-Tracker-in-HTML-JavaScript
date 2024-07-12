document.addEventListener("DOMContentLoaded", function() {
    const transactionForm = document.getElementById('transaction-form');
    const transactionHistory = document.getElementById('transaction-history');
    const incomeAmount = document.getElementById('income-amount');
    const expensesAmount = document.getElementById('expenses-amount');
    const balanceAmount = document.getElementById('balance-amount');

    let income = 0;
    let expenses = 0;

    transactionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const type = document.getElementById('type').value;
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);

        if (type === 'income') {
            income += amount;
        } else {
            expenses += amount;
        }

        updateBudgetDisplay();
        addTransactionToHistory(type, description, amount);
        transactionForm.reset();
    });

    function updateBudgetDisplay() {
        incomeAmount.textContent = income.toFixed(2);
        expensesAmount.textContent = expenses.toFixed(2);
        balanceAmount.textContent = (income - expenses).toFixed(2);
    }

    function addTransactionToHistory(type, description, amount) {
        const transactionItem = document.createElement('li');
        transactionItem.classList.add(type);
        transactionItem.innerHTML = `
            <span>${description}</span>
            <span>$${amount.toFixed(2)}</span>
        `;
        transactionHistory.appendChild(transactionItem);
    }
});
