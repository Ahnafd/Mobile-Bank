document.getElementById('btn-1').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber =document.getElementById('input-1').value ;
    const accountPin =document.getElementById('input-2').value ;
    if (accountNumber.length===11) {
        if (accountPin.length===4) {
    window.location.href = "./home.html"

    }
    else {
        alert('pin is incorrect');
        
    }
    }
    else {
        alert('error');
        
    }
    
 })

 