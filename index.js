const fs = require('fs/promises')

const index = async () => {
  const obj = {
    date: Date.now() + ''
  }
  const pageageFile = {
    name: process.env.NPM_NAME || '',
    version: `${obj.date[0]}.${obj.date[1]}.${obj.date.slice(2, 13)}`,
    main: 'index.js',
    description: 'Hajeekn的自动化储存'
  }
  const pageageFileStr = JSON.stringify(pageageFile)
  await fs.writeFile('./package.json', pageageFileStr, 'utf8', (err) => {
    if (err) throw err
  })
  console.log('写入完成')
}
index()
