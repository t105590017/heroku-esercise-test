var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('mainPage', {
        navActive: 'Home',
        ContentViewName:'Home/home',
        ContentViewData: {
            Carousel:[
                {
                    ImgPath:'https://goo.gl/PPDTMH',
                    Description:'430i M Sport'
                },
                {
                    ImgPath:'https://goo.gl/ZPCXA8',
                    Description:'Ranger 2.0L Bi-Turbo Wildtrak'
                },
                {
                    ImgPath:'https://goo.gl/Z15J4c',
                    Description:'i8 Roadster'
                },
                {
                    ImgPath:'https://goo.gl/Nwmeca',
                    Description:'RX 350'
                },
            ]
        }
    });
});

module.exports = router;

