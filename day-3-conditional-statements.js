'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine(), 10);
    const weird = 'Weird';
    const notWeird = 'Not Weird';

    if (N % 2 != 0) {
        console.log(weird);
    }
    else {
        if (N >= 2 && N <= 5)
            console.log(notWeird);
        else if (N >= 6 && N <= 20)
            console.log(weird);
        else if (N > 20)
            console.log(notWeird);
    }

}
