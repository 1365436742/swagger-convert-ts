const fs = require('fs')
const path = require('path')

function copTemplateFiles(source, destination) {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination, { recursive: true })
  }
  const files = fs.readdirSync(source)
  for (const file of files) {
    const sourcePath = path.join(source, file)
    const destPath = path.join(destination, file)

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copTemplateFiles(sourcePath, destPath)
    } else if (file.endsWith('.template.ts')) {
      fs.copyFileSync(sourcePath, destPath.replace(".template.", "."))
      console.log(`Copied: ${sourcePath} -> ${destPath}`)
    }
  }
}
copTemplateFiles('src', 'dist')
