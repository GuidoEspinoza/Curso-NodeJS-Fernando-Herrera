const fs = require('fs')

const data = fs.readFileSync('README.MD', 'utf-8')

const newData = data.replace(/React/ig, 'Angular')

fs.writeFileSync('Readme-Angular.md', newData)