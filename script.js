let accountBalance = 1000;
let cashBalance = 1000;

function updateBalance() {
  accountBalance = parseFloat(document.getElementById('accountBalance').value);
  cashBalance = parseFloat(document.getElementById('cashBalance').value);
  logHistory(`Balances updated. Account: ${accountBalance}, Cash: ${cashBalance}`);
}

function proceed() {
  let amount = parseFloat(document.getElementById('amount').value);
  let operation = document.getElementById('operation').value;

  if (operation === "deposit") {
    accountBalance += amount;
    cashBalance -= amount;
    logHistory(`Deposited ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`);
  } else if (operation === "withdraw") {
    accountBalance -= amount;
    cashBalance += amount;
    logHistory(`Withdrew ${amount}. Account: ${accountBalance}, Cash: ${cashBalance}`);
  }

  document.getElementById('accountBalance').value = accountBalance;
  document.getElementById('cashBalance').value = cashBalance;
}

function convert() {
  let inputValue = parseFloat(document.getElementById('inputValue').value);
  let currency = document.getElementById('currency').value;
  let result = 0;

  if (currency === "USD") {
    result = inputValue * 36.5;
  } else {
    result = inputValue / 36.5;
  }

  document.getElementById('outputValue').value = result.toFixed(2);
}

function logHistory(message) {
  let textarea = document.getElementById('history');
  textarea.value += "\n" + message;
  textarea.scrollTop = textarea.scrollHeight;
}