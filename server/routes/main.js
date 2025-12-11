const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('', async (req, res) => {
    const locals = {
        title: 'Node.js Blog',
        description: 'A simple blog with Node.js, express and mongo.db',
    };

    try {
        const data = await Post.find();
        res.render('index', { locals, data });
    } catch (error) {
        console.log(error);
    }
   
});


router.get('/about', (req, res) => {
    res.render('about');
});


module.exports = router;