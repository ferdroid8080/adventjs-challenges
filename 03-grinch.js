function isValid(letter) {
	// ¡No dejes que el Grinch gane!
  const notAllowed = ['[',']','{','}']
  const allowed = ['(',')']
  let regalos = letter.split(' ')
    .filter(item => item.trim().toLowerCase())
    .map(item => {
      let openParens = item.indexOf(allowed[0])
      let closeParens = item.indexOf(allowed[1])
      if (openParens === -1 && closeParens === -1 ||
         openParens !== -1 && closeParens !== -1) {
        
        if (openParens === -1 && closeParens === -1) {
          const findNotAllowed = item.split('')
            .findIndex(v => notAllowed.includes(v))
          if (findNotAllowed !== -1) {
            return false
          }
        } else {
          if (!item.match(/\w+/)) {
            return false
          }
          
          let countOpenParens = 0
          let countCloseParens = 0
          item.split('')
            .forEach(val => {
              if (val === '(')
                countOpenParens++
              if (val === ')')
                countCloseParens++
            })
          
          if (countOpenParens % 2 == 0 && countCloseParens % 2 == 0) {
            return true
          } else {
            if (openParens !== -1 && closeParens !== -1) {
              if (item.length < 3 || !item.match(/\w+/)) {
                return false
              }
              if (countOpenParens === countCloseParens) {
                return true
              }
            }
            return false
          }
        }
        
        return true
      } else if (openParens === 0 && closeParens === -1) {
        return false
      } else if (openParens === -1 && closeParens !== -1) {
        return false
      }
    })
  return regalos.findIndex(v => v === false) !== -1 ? false : true
}

// isValid('bici coche (balón) bici coche peluche')
// isValid('(muñeca) consola bici')
// isValid('bici   coche (balón bici coche ')
// isValid('peluche (bici) coche] bici coche balón')
// isValid('(peluche {) bici')
// isValid('() bici')
// isValid('(()) bici')
// isValid('(a() bici (a)')
