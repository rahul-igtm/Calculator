const maininput = document.getElementById('maininput');
const sideinput = document.getElementById('sideinput');
const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const backspace = document.getElementById('backspace');

const numberdot = document.querySelector('.numberdot');
let havedot = true;
//gettting input from user
Array.from(number).forEach(function (item) {
    item.addEventListener('click', function (el) {
        if (el.target.innerText == 'C') {
            maininput.value = '';
            sideinput.value = '';
            havedot = true;
            haveopertor=true;
        }
        else {
            maininput.value += el.target.innerText;
            haveopertor=true;
        }
    })
})

//restricting user to enter multiple dots
numberdot.addEventListener('click', function () {
    if (numberdot.innerText == '.' && havedot == true) {
        maininput.value += numberdot.innerText;
        havedot = false;
    }
})
//Backspace Key
backspace.addEventListener('click', function () {
    maininputvalue = maininput.value;
    let screenArray = Array.from(maininputvalue);
    removedDot = screenArray.pop();
    maininput.value = screenArray.join("");

    //condition if user remove dot using backspace then making havedot value true
    if (removedDot == '.') {
        havedot = true;
    }
    //condition if user remove any operator using backspace then making haveoperator value true
    if(removedDot=="+"||removedDot=='-'||removedDot=='*'||removedDot=='/'){
        haveopertor=true;
    }
})

let haveopertor = true;
//Operations
Array.from(operation).forEach(function (item) {
    item.addEventListener('click', function (e) {
        if (maininput.value == '') {
            return;
        }
        else {
            if (e.target.innerText == "=") {
                sideinput.value = maininput.value;
                maininput.value = eval(maininput.value);
                maininputvalue = maininput.value;
                if (maininputvalue.includes('.')) {
                    havedot = false;
                }
                else {
                    havedot = true;
                }
            }
            else {
                if (e.target.innerText == '+' && haveopertor == true) {
                    maininputvalue = maininput.value;
                    maininput.value = `${maininputvalue}${e.target.innerText}`
                }
                else if(e.target.innerText == '*' && haveopertor == true){
                    maininputvalue = maininput.value;
                    maininput.value = `${maininputvalue}${e.target.innerText}`;
                }
                else if(e.target.innerText == '/' && haveopertor == true){
                    maininputvalue = maininput.value;
                    maininput.value = `${maininputvalue}${e.target.innerText}`;
                }
                else if(e.target.innerText == '-' && haveopertor == true){
                    maininputvalue = maininput.value;
                    maininput.value = `${maininputvalue}${e.target.innerText}`;
                }
                havedot = true;
                haveopertor=false;
            }
        }
    })
})
