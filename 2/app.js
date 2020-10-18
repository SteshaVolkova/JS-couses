const task3Element = document.getElementById('task-3');

function text() {
    alert('My first function.');
}

function sayName(name) {
    alert(name);  
}

text();
sayName('Stefany');

task3Element.onclick = text;

function returnLine(line1, line2, line3) {
    return line1 + line2 + line3;
}
let line = returnLine('Ниф-ниф ', 'Наф-наф ', 'Нуф-нуф ');

alert(line);
