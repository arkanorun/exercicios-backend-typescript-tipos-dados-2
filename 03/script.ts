const fs = require('fs')
const caminhoArquivo = '../bd.json'

const atualizarUsuario = (caminhoArquivo: string, cpf: number, atualizacao: tipoAtualizar) => {
    const lerArquivo = fs.readFileSync(caminhoArquivo)
    const arquivo = JSON.parse(lerArquivo)
    const encontrarUsuario = arquivo.findIndex((valor: any) => {
        return valor.cpf === cpf
    })

    if (encontrarUsuario < 0) {
        return 'usuario não encontrado'
    }

    if (atualizacao.nome) {
        arquivo[encontrarUsuario].nome = atualizacao.nome
    }
    if (atualizacao.email) {
        arquivo[encontrarUsuario].email = atualizacao.email
    }
    if (atualizacao.cpf) {
        arquivo[encontrarUsuario].cpf = atualizacao.cpf
    }
    if (atualizacao.profissao) {
        arquivo[encontrarUsuario].profissao = atualizacao.profissao
    }
    if (atualizacao.endereco) {
        arquivo[encontrarUsuario].endereco = atualizacao.endereco
    }

    const usuarioAtualizado = JSON.stringify(arquivo)
    fs.writeFileSync(caminhoArquivo, usuarioAtualizado)
    return arquivo[encontrarUsuario]
}

const detalharUsuario = (caminhoArquivo: string, cpf: number) => {
    const lerArquivo = fs.readFileSync(caminhoArquivo)
    const arquivo = JSON.parse(lerArquivo)
    const encontrarUsuario = arquivo.find((valor: any) => {
        return valor.cpf === cpf
    })
    if (encontrarUsuario < 0) {
        return 'usuario não encontrado'
    }
    return encontrarUsuario
}

type tipoAtualizar = {
    nome?: string, email?: string, cpf?: number, profissao?: string,
    endereco?: string
}

const usuarioAtualizado: tipoAtualizar = {
    endereco: 'Rua da magia, 3'
}

console.log(detalharUsuario(caminhoArquivo, 12345678941))
console.log('-----------------------------')
console.log(atualizarUsuario(caminhoArquivo, 12345678949, usuarioAtualizado))