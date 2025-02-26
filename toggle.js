document.getElementById('cashout').style.display='none';

document.getElementById('click-1').addEventListener('click' , 
    function () {
    document.getElementById('cashout').style.display='none';
    document.getElementById('add-money').style.display='block';
})
document.getElementById('click-2').addEventListener('click' , 
    function () {
    document.getElementById('add-money').style.display='none';
    document.getElementById('cashout').style.display='block';
})