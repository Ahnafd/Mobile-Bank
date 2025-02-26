document.getElementById('btn-2').addEventListener('click', function (event) {
    event.preventDefault();
    
    const amount = document.getElementById('amount-handler').value;
    const convertedAmount = parseFloat(amount) || 0; // Prevent NaN
    
    const innerPin = document.getElementById('pinVer').value;
    const innerAccount = document.getElementById('inner-account').value;
    
    const mainBalanceElement = document.getElementById('main-balance');
    const convertedMainBalance = parseFloat(mainBalanceElement.innerText) || 0; // Prevent NaN
    
    if (innerPin.length === 4) {
        const sum = convertedMainBalance + convertedAmount;
        mainBalanceElement.innerText = sum;
        
        if (innerAccount.length === 11) {
            console.log('Number is correct');
            
        } else {
            alert('Number is incorrect');
        }
    } else {
        alert('pin is incorrect');
    }
});

 