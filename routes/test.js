var express = require('express');
var router = express.Router();

router.get('/test111', (req, res) => {
    res.render('mainPage', {
        name: 'mainPage',
        viewContent: {
            name: 'test'
        }
    })
});

module.exports = router;

