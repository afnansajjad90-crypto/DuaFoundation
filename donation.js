function setAmount(value) {
  const amountInput = document.getElementById('amount');
  if (amountInput) {
    amountInput.value = value;
    amountInput.focus();
  }
}
