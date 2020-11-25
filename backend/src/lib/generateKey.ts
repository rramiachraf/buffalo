export const generateKey = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const key = []

  for (let i = 0; i < 25; i += 1) {
    const randomChar = characters[Math.floor(Math.random() * characters.length)]
    const separators = [5, 10, 15, 20]
    if (separators.includes(i)) {
      key.push('-')
    }
    key.push(randomChar)
  }

  return key.join('')
}
