function renderListAppointments(req, res, next) {
    res.render('listAppointments');
  }

  function renderFormAppointments(req, res, next) {
    res.render('formAppointments');
  }

module.exports = {
    renderListAppointments,
    renderFormAppointments
}
