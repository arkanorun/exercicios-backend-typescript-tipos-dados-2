const fs = require('fs')
const endereco: String = './bd.json'
function leitura(arquivo: String) {
    const leituraArquivo = fs.readFileSync(arquivo)
    const arquivoLido = JSON.parse(leituraArquivo)
    return arquivoLido
}

function escrita(arquivo: String, conteudo: any) {
    const leituraArquivo = fs.readFileSync(arquivo)
    const arquivoLido = JSON.parse(leituraArquivo)
    arquivoLido.push(conteudo)
    const novoArquivo = JSON.stringify(arquivoLido)
    fs.writeFileSync(arquivo, novoArquivo)
    return
}

let a: any = {
    nome: 'Raven',
    Hobbie: 'jogar LOL',
    profissão: "frontend"
}

escrita(endereco, a)

console.log(leitura(endereco))