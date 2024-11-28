const fs = require('fs')

const content = fs.readFileSync('README.MD', 'utf-8')

const words = content.split(' ')

const reactWordCount = content.match(/react/gi ?? [])

console.log('Palabras:', words.length)
console.log('Palabras React:', reactWordCount.length)