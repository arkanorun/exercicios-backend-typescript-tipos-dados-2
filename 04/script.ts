const fs = require('fs')
const caminhoArquivo = '../bd.json'

const deletarUsuario = (caminho: string, cpf: number) => {
    const arquivoLido = fs.readFileSync(caminho)
    const arquivo = JSON.parse(arquivoLido)
    const buscaUsuario = arquivo.find((valor: any) => {
        return valor.cpf === cpf
    })


    if (!buscaUsuario) {
        return 'usuario não existe'
    }

    const novoArquivo = arquivo.filter((pessoa: any) => {
        return pessoa.cpf !== cpf
    })

    const usuarioExcluido = JSON.stringify(novoArquivo)

    fs.writeFileSync(caminhoArquivo, usuarioExcluido)

    return buscaUsuario

}

console.log(deletarUsuario(caminhoArquivo, 25045677851))