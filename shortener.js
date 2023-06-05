function generateShortCode() {
  const letterAndNumber = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
  let shortCode = ''
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * letterAndNumber.length)
    shortCode += letterAndNumber[index]
  }
  return shortCode
}

module.exports = generateShortCode