function listGifts(letter) {
  // ¡Tú puedes!
  const obj = {}
  const gifts = letter.split(' ')
    .filter(l => l.indexOf('_') == -1 && l !== '')
    .map(item => {
      if (obj[item]) {
        obj[item] += 1
      } else {
        obj[item] = 1
      }
      return item
    })
  return obj
}

listGifts('bici coche balón _playstation  bici coche peluche ')
