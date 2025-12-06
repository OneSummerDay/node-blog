const express = require('express');
const router = express.Router();


router.get('', (req, res) => {
    const locals = {
        title: 'Node.js Blog',
        description: 'A simple blog with Node.js, express and mongo.db',
    };


    res.render('index', locals);
});

router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;