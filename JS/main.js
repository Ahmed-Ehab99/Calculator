document.addEventListener('DOMContentLoaded', function () {
    let input = document.getElementById('input');
    let output = document.getElementById('output');
    
    let btnClearAll = document.getElementById('btnClearAll');
    let btnMod = document.getElementById('btnMod');
    let btnClearOne = document.getElementById('btnClearOne');
    let btnDivide = document.getElementById('btnDivide');

    let btn7 = document.getElementById('btn7');
    let btn8 = document.getElementById('btn8');
    let btn9 = document.getElementById('btn9');
    let btnMultiply = document.getElementById('btnMultiply');

    let btn4 = document.getElementById('btn4');
    let btn5 = document.getElementById('btn5');
    let btn6 = document.getElementById('btn6');
    let btnSubtract = document.getElementById('btnSubtract');

    let btn1 = document.getElementById('btn1');
    let btn2 = document.getElementById('btn2');
    let btn3 = document.getElementById('btn3');
    let btnAdd = document.getElementById('btnAdd');

    let btn00 = document.getElementById('btn00');
    let btn0 = document.getElementById('btn0');
    let btnDot = document.getElementById('btnDot');
    let btnEqual = document.getElementById('btnEqual');

    function appendToDisplay(value) {
        input.value += value;
    }

    function clearDisplay() {
        input.value = '';
        output.value = '';
    }

    function clearOne() {
        input.value = input.value.toString().slice(0, -1);
        calculate();
    }

    function calculate() {
        try {
            output.value = eval(input.value);
        } catch (error) {
            output.value = 'Error';
        }
    }

    btnClearAll.addEventListener('click', function () { clearDisplay(); });
    btnMod.addEventListener('click', function () { appendToDisplay('%'); });
    btnClearOne.addEventListener('click', function () { clearOne(); });
    btnDivide.addEventListener('click', function () { appendToDisplay('/'); });

    btn7.addEventListener('click', function () { appendToDisplay('7'); });
    btn8.addEventListener('click', function () { appendToDisplay('8'); });
    btn9.addEventListener('click', function () { appendToDisplay('9'); });
    btnMultiply.addEventListener('click', function () { appendToDisplay('*'); });

    btn4.addEventListener('click', function () { appendToDisplay('4'); });
    btn5.addEventListener('click', function () { appendToDisplay('5'); });
    btn6.addEventListener('click', function () { appendToDisplay('6'); });
    btnSubtract.addEventListener('click', function () { appendToDisplay('-'); });
    
    btn1.addEventListener('click', function () { appendToDisplay('1'); });
    btn2.addEventListener('click', function () { appendToDisplay('2'); });
    btn3.addEventListener('click', function () { appendToDisplay('3'); });
    btnAdd.addEventListener('click', function () { appendToDisplay('+'); });
    
    btn00.addEventListener('click', function () { appendToDisplay('00'); });
    btn0.addEventListener('click', function () { appendToDisplay('0'); });
    btnDot.addEventListener('click', function () { appendToDisplay('.'); });
    btnEqual.addEventListener('click', function () { calculate(); });
});
