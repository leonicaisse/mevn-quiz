const express = require('express');
const router = express.Router()

const homePage = (req, res, next) => {
    res.send('Home Page');
}

router.get('/', homePage);


module.exports = router;