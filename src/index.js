const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.split('**********');
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('');
      for (let j = 0; j < arr[i].length / 2; j++) {
        arr[i][j] = arr[i][j + j] + arr[i][j + j + 1];
      }
      arr[i] = arr[i].slice(0, arr[i].length / 2);
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === '00') { arr[i][j] = ''; }
        else if (arr[i][j] === '10') { arr[i][j] = '.'; }
        else { arr[i][j] = '-'; }
      }
      for (let k = 0, n = 0; k < arr[i].length/5; k++, n += 4) {
        arr[i][k] = arr[i].slice(k + n, k + n + 5).join('');
    }
    arr[i] = arr[i].slice(0, arr[i].length/5);
  
    for(let j = 0; j < arr[i].length; j++) {
      arr[i][j] = MORSE_TABLE[arr[i][j]];
    }
    arr[i] = arr[i].join('');
    }
    return arr.join(' ');
  }

module.exports = {
    decode
}