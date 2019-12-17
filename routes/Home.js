var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('mainPage', {
        viewContent: {
            name: 'Home/home'
        }
    });
});

module.exports = router;

