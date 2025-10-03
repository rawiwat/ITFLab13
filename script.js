const my_account = document.getElementById("my_account")
let current_account = 1000
const my_cash = document.getElementById("my_cash")
let current_cash = 1000
const bank_operation = document.getElementById("bank_operator")
let operating_money = 1000
const chosen_operation = document.getElementById("chosen_operator")
let current_operation = "Deposit"

function deposit(x) {
	my_cash.value -= x
    my_account += x
}

function withdraw(x) {
	my_cash.value -= x
    my_account += x
}

function process(x) {
    chosen_operation = x
    if (current_operation == "Deposit") {

    }
    if (current_operation == "Withdraw") {

    }
}