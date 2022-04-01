document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');

    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // update deposit total 

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance total 

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear 
    depositInput.value = ''
})

// handle widthdraw event 

document.getElementById('widthdraw-button').addEventListener('click', function () {

    const widthdrawInput = document.getElementById('Widthdraw-input');
    const widthdrawAmountText = widthdrawInput.value;
    const newWidthdrawAmount = parseFloat(widthdrawAmountText);
    // set widthdraw total 
    const widthdrawTotal = document.getElementById('widthdraw-total');

    const previousWidthdrawText = widthdrawTotal.innerText;
    const previousWidthdrawAmount = parseFloat(previousWidthdrawText);
    const newWidthdrawTotal = previousWidthdrawAmount + newWidthdrawAmount;

    widthdrawTotal.innerText = newWidthdrawTotal;
    widthdrawInput.value = '';
    // update balance 

    const balanceTotal = document.getElementById('balance-total');
    const previoustBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previoustBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWidthdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
})