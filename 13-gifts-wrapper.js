function wrapGifts(gifts) {
  let wrapperLength = 0
  const wrapper = gifts.map((value, index) => {
    const wrapping = `*${value}*`;
    wrapperLength = wrapping.length
    return wrapping
  })
  wrapper.unshift('*'.repeat(wrapperLength))
  wrapper.push('*'.repeat(wrapperLength))  
  return wrapper
}

wrapGifts(["📷", "⚽️"])
wrapGifts(["🏈🎸", "🎮🧸"])
