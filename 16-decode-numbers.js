function decodeNumbers(symbols) {
  const relations = {
    '.': 1, 
    ',': 5, 
    ':': 10, 
    ';': 50, 
    '!': 100
  }
  const symbols_sum = symbols.split('')
    .map((item, i) => ({
      current: relations[symbols.charAt(i)],
      next: relations[symbols.charAt(i+1)]
    }))
    .reduce((prev, curr, i) => {
      if (symbols.charAt(i+1) && curr.next > curr.current) {
        return prev - curr.current
      } else {
        return prev + curr.current
      }
    }, 0)
  return symbols_sum
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
