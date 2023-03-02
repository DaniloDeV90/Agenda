const Contato = require ('../models/contatoModel')

// const HomeModel = require ('../models/HomeModel')

// HomeModel.create ({
//     titulo: 'dados'
// }) 

// HomeModel.find ()
// .then (dados => console.log (dados))
// .catch (e => console.log (e))

exports.index =  async (req,res) => {

const contatos = await Contato.buscaContatos ()


    res.render ('index', {contatos})
 
}



// exports.paginaInicial = (req,res,next) => {
//     console.log ('respondendo ao cliente')
//     res.render ('index')
//     console.log (` 'da pagina inicial' Olha o que tem na req.session.nome ${req.session.Nome}`)
//     next ()
// }
