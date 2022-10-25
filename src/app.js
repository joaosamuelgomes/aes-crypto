const { promises } = require('fs')
async function run() {
    const fileTarget = 'arquivo-hiper-seguro.txt.enc'

    const text = `Badunts! Hoje e ${new Date().toLocaleDateString()} e agora sao ${new Date().toLocaleTimeString()}`

    await promises.writeFile(fileTarget, text)

    console.log('Escrevendo arquivo:', fileTarget)
    console.log('Conteúdo descriptografado:', (await promises.readFile(fileTarget)).toString())
    console.log('Terminou!')
}

module.exports = { run }