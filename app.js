function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }

}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('pin-generate').addEventListener('click', function () {
    const pin = getPin();
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const typeNumberField = document.getElementById('type-number');
    const previousTypeNumber = typeNumberField.value;
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})
document.getElementById('submit-btn').addEventListener('click', function () {
    const displayField = document.getElementById('display-pin');
    const displayFieldPin = displayField.value;

    const calculatorField = document.getElementById('type-number');
    const calculatorFieldPin = calculatorField.value;

    const pinSuccessMessage = document.getElementById('success');

    const pinWrongMessage = document.getElementById('wrong');


    if (displayFieldPin === calculatorFieldPin) {
        pinSuccessMessage.style.display = 'block';
        pinWrongMessage.style.display = 'none';
    }
    else {
        pinWrongMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})