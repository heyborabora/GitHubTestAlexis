let num = prompt('Please enter a number between 2 and 10:');
let numCount = parseInt(num, 10);

for (let i = 1;
    (numCount / 2 ** i) > 0.000001; i++) {
    lastNum = i + 1;
}
//console.log(lastNum);

function getNum() {
    if (numCount <= 1 || numCount >= 11) {
        document.getElementById("warning").innerHTML = "Your input is " + numCount + ". The valid input number is between 2 and 10. Please reload this page and try again.";
    } else {
        document.getElementById("msg").innerHTML = "Your input number is " + numCount;
        document.getElementById("msg2").innerHTML = "The number of times to divide " + numCount + " by 2 to get a value less than one millionth is " + lastNum
    }
}
getNum();


let arr = ['*', '**', '***', '****', '*****', '******', '*******', '********', '*********', '**********']
for (let i = numCount; i >= 1; i--) {
    if (numCount > 10) {} else { document.write('<br>' + arr[i - 1]) }
}