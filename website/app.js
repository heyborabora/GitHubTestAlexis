const message = prompt('Choose an option: ' +
    '\n' + '1: Show messages' +
    '\n' + '2: Add a message' +
    '\n' + '3: Delete a message' +
    '\n' + '0: Quit');


let arrMessage = ['message 01', 'message 02', 'message 03', 'message 04', 'message 05'];

let chooseOne = function() {
    for (let i = 0; i < arrMessage.length; i++) {
        document.getElementById('output').innerHTML += (i + 1) + ': ' + (arrMessage[i]) + '<br/>';
    }
};

let chooseZero = function() {
    document.getElementById('output').innerHTML = 'Good Bye';
};

let chooseOthers = function() {
    document.getElementById('output').innerHTML = 'Please refresh and select a correct command';
};

if (message === '1') {
    chooseOne();
} else if (message === '2') {
    let popupTwo = prompt('Enter a new message:');
    arrMessage.push(popupTwo);
    chooseOne();
} else if (message === '3') {
    let popupThree = prompt('Enter the message index (between 1 and ' + arrMessage.length + ')');
    arrMessage.splice(popupThree - 1, 1);
    chooseOne();
} else if (message === '0') {
    chooseZero();
} else {
    chooseOthers();
};