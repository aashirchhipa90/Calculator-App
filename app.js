console.log("Java Script Connected!");

var input = document.getElementById("input");

function addValue(value) {
    var current = input.value;
    var lastChar = current.slice(-1);
    if (
        ["+", "-", "*", "/"].includes(value) &&
        ["+", "-", "*", "/"].includes(lastChar)
    ) {
        input.value = current.slice(0, -1) + value;
    } else {
        input.value += value;
    }
}

function allClear() {
    input.value = "";
}

function valueClear() {
    var value = input.value;
    input.value = value.slice(0, -1);
}

function calculate() {
    input.value = eval(input.value);
}