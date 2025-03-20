function renderHome (req, res, next) {
    res.render('home');
}

function renderLogin (req, res, next) {
    res.render('login');
}

module.exports = {
    renderHome,
    renderLogin
}
