//have two values that will hold the numbers being entered
//enter the numbers as a string being concat'd then convert to numbers
// using parseint. 

let results = 0;
let a = '';
let b = '';
let process = '';
let operator = '';
let regexDec = /\./;
const buttons = document.querySelectorAll('.numbers');
const display = document.querySelector('#display');
const operators = document.querySelectorAll(".operator")
//operator functions
var math = {
    '+': function (x, y) { return x + y; },
    '-': function (x, y) { return x - y; },
    '*': function (x, y) { return x * y; },
    '/': function (x, y) { return x / y; },
}
//display is equal to a var. add b var later and switch after using an operator
function resetDisplay() {
    display.textContent = a;
}
//on button click update the display, makes sure no double input of .
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        //console.log(e.target.textContent);
        if (display.textContent.length < 15) {
            if (e.target.textContent === '.' && !regexDec.test(display.textContent)) {
                a += e.target.textContent;
                resetDisplay();
                buttons[10].disabled = true;
            } else
                a += e.target.textContent;
            resetDisplay();
        }
    }
    )
});

//clear display function
function clear() {
    if (a === '') {
        b = '';
        process = '';
    } else
        a = '';
    display.textContent = "0";
    buttons[10].disabled = false;
}
document.querySelector("#clear").addEventListener('click', () => { clear() });

//swaps the a var to b
function swapVar() {
    if (a !== ""){
    b = Number(a);
    a = '';
    buttons[10].disabled = false;
} else return
}
//making the operators work FIX BUG WITH MULTIPLE OPERATOR INPUTS. 
//IT'S EXECUTING THE EQUATION WITH THE STORED A VALUE BEFORE MAKING A NEW ONE
operators.forEach(operator => {
    operator.addEventListener('click', function (e) {
        console.log(e.target)
        switch (e.target.textContent) {
            case 'C':
                break
            case '/':
                if (process !== "" && a !== "") {
                    b = math[process](b, Number(a));
                    a = '';
                    display.textContent = `${b}`;
                    process = "";
                } else
                    swapVar();
                process = '/';
                break
            case '*':
                if (process !== "" && a !== "") {
                    b = math[process](b, Number(a));
                    a = '';
                    display.textContent = `${b}`;
                    process = "";
                } else
                    swapVar();
                process = '*';
                break
            case '-':
                if (process !== "" && a !== "") {
                    b = math[process](b, Number(a));
                    a = '';
                    display.textContent = `${b}`;
                    process = "";
                } else
                    swapVar();
                process = '-';
                break
            case '+':
                if (process !== "" && a !== "") {
                    b = math[process](b, Number(a));
                    a = '';
                    display.textContent = `${b}`;
                    process = "";
                } else
                    swapVar();
                process = '+';
                break
            case '=':
                if (process !== "" && a !== "") {
                    b = math[process](b, Number(a));
                    a = '';
                    display.textContent = `${b}`;
                    process = "";
                } else
                    break
        }
    })
})