const fs = require('fs')
const caminhoArquivo = '../bd.json'

const cadastrarUsuarios = (caminho: string, usuario: tipoUsuario) => {
    const lerArquivo = fs.readFileSync(caminho)
    const Cadastro = JSON.parse(lerArquivo)

    if (!usuario.nome || !usuario.email || !usuario.cpf) {

        return 'os campos nome, email e cpf são obrigatórios'
    }

    if (!usuario.endereco) {
        usuario.endereco = null
    }

    Cadastro.push(usuario)
    let usuarioCadastrado = JSON.stringify(Cadastro)
    fs.writeFileSync(caminho, usuarioCadastrado)
    usuarioCadastrado = JSON.parse(usuarioCadastrado)
    return usuarioCadastrado[usuarioCadastrado.length - 1]
}

const listarUsuarios = (caminho: string) => {
    const lerArquivo = fs.readFileSync(caminho)
    const listagem = JSON.parse(lerArquivo)
    return listagem
}

type tipoUsuario = {
    nome: string, email: string, cpf: number, profissao?: string,
    endereco: string | null
}

const novoUsuario: tipoUsuario = {
    nome: 'raven',
    email: 'raven@email.com',
    cpf: 25045677851,
    profissao: 'Programador',
    endereco: 'Rua dos Programadores'
}

console.log(cadastrarUsuarios(caminhoArquivo, novoUsuario))
console.log()
console.log(listarUsuarios(caminhoArquivo))