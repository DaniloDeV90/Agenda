exports.meuMiddleware = (req,res,next) => {
    res.locals.errors =  req.flash ('errors')
    res.locals.success = req.flash ('success')
    res.locals.user = req.session.user
    next ()
}

// if (req.body.cliente) {
//     req.body.cliente = req.body.cliente.replace ('Miranda', 'NÃO USE MIRANDA')
//     console.log ()
//     console.log ('Vi que voce postou ' + req.body.cliente)
//      console.log ()
// }

exports.checkCsrfError = (err,req,res,next) => {
    if (err) {
        return res.render ('./includes/404')
    }
    next ()
}

exports.csrMiddleware = (req,res,next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}

exports.loginRequired = (req,res,next) => {
    if (!req.session.user) {
        req.flash ('errors', 'Você precisa fazer login.')
        req.session.save (() => res.redirect ('/login/index'))
        return 
    }

    next ()
}