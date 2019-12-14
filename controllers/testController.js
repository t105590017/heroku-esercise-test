const getView = (req, res) => {
    res.render('test', {
        name: 'sss'
    })
}

module.exports = { getView }
