function calcAmount() {
    let price = 1000;
    let quantityInput = document.querySelector("input[name='quantity-input']");
    let showAmount = document.querySelector("span.show-amount");
    amount = parseInt(quantityInput.value) * price;
    showAmount.innerHTML = amount;
}