function renderListClients(req, res, next) {
    res.render('listClients');
  }

  function renderFormClients(req, res, next) {
    res.render('formClients');
  }

module.exports = {
    renderListClients,
    renderFormClients
}
