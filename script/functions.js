function calculateTotal() {
    let total = 0;

    const buyExcavator = document.getElementById('buyexcavator');
    const buyCrane = document.getElementById('buycrane');
    const buyTruck = document.getElementById('buytruck');

    if (buyExcavator.checked) {
        total += parseInt(buyExcavator.getAttribute('buyprice'));
    }
    if (buyCrane.checked) {
        total += parseInt(buyCrane.getAttribute('buyprice'));
    }
    if (buyTruck.checked) {
        total += parseInt(buyTruck.getAttribute('buyprice'));
    }

    document.getElementById('price').textContent = total;
}