const fs = require('fs/promises')

const index = async () => {
  const obj = {
    date: Date.now() + ''
  }
  const pageageFile = {
    name: 'wytong-pub',
    version: `${obj.date[0]}.${obj.date[1]}.${obj.date.slice(2, 13)}`,
    main: 'index.js',
    author: 'Hajeekn',
    repository: {"type": "git","url": "git+https://github.com/x-ga/hubnpm.git"},
    description: 'Hajeekn的自动化储存'
  }
  const pageageFileStr = JSON.stringify(pageageFile)
  await fs.writeFile('./package.json', pageageFileStr, 'utf8', (err) => {
    if (err) throw err
  })
  console.log('写入完成')
}
index()
