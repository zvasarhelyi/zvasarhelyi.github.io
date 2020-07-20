function calcAmount() {
    let price = 1000;
    let quantityInput = document.querySelector("input[name='quantity-input']");
    let amountNumber = parseInt(quantityInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    
    showSumPrice(price, amountNumber);
    
}

function showSumPrice(price = 1000, amountNumber = 1) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 db terméket vásárolhat!")
    } else if (amountNumber < 1) {
        alert("Minimum 1 db terméket kell vásárolni!")
    } else {
    let amount = amountNumber * price;
    showAmount.innerHTML = amount;
    }
}