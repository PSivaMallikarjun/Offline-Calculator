let display = document.getElementById("display");

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    if (display.value.length > 0) {
        display.value += operator;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Using BigInt for handling large numbers
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
