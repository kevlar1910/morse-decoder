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
}

function decode(expr) {
  const arr = expr.split('**********')
  let result = []
  let arrfromAllWords = []

  arr.forEach((item) => {
    let arrFromWord = []
    for (let i = 0; i < item.length; ) {
      arrFromWord.push(Number(item.slice(i, i + 10)))
      i += 10
    }
    arrfromAllWords.push(arrFromWord)
  })

  function toLetterArr(singleArray) {
    let word = []
    singleArray.map((item) => {
      let morze = String(item).replace(/10/g, '.').replace(/11/g, '-')
      for (let key in MORSE_TABLE) {
        if (morze === key) morze = MORSE_TABLE[key]
      }
      word.push(morze)
    })
    return word.join('')
  }

  result = arrfromAllWords.map((item) => {
    return toLetterArr(item)
  })
  return result.join(' ')
}

module.exports = {
  decode,
}
