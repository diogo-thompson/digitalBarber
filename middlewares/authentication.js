function middlewareAuthentic(rec, res, next) {
    console.log('Entrou no middleware de autenticação')
    if (10 === 11) {
        next()
    } else {
        console.log('A requisição foi barrada pelo middleware de autenticação')
        res.render('login')
    }
}

module.exports = {
     middlewareAuthentic
}