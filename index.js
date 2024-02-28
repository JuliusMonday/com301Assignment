// Add this code to your existing index.js file
window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if(name) {
        document.getElementById('username').innerHTML = `Hi, ${name}`;
    }
});

document.getElementById('sum').addEventListener('click', function() {
    const sum = getSum();
    displayResult(`Sum: ${sum}`);
});

document.getElementById('average').addEventListener('click', function() {
    const average = getAverage();
    displayResult(`Average: ${average}`);
});

document.getElementById('both').addEventListener('click', function() {
    const sum = getSum();
    const average = getAverage();
    displayResult(`Sum: ${sum}, Average: ${average}`);
});

function getSum() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    const num4 = Number(document.getElementById('num4').value);
    return num1 + num2 + num3 + num4;
}

function getAverage() {
    const sum = getSum();
    return sum / 4;
}

function displayResult(message) {
    document.getElementById('result').innerText = message;
}