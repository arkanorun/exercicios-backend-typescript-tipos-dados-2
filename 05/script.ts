const fs = require('fs')
const caminhoArquivo = '../bd.json'

const filtrarUsuarios = (caminho: String, profissao: String) => {

    const lerArquivo = fs.readFileSync(caminho)
    const arquivo = JSON.parse(lerArquivo)

    const usuariosFiltrados = arquivo.filter((pessoa: any) => {
        return pessoa.profissao === profissao
    })

    if (usuariosFiltrados.length < 1) {
        return 'não foram encontrados usuarios com a profissao informada'
    }
    return usuariosFiltrados
}


console.log(filtrarUsuarios(caminhoArquivo, "Programador"))