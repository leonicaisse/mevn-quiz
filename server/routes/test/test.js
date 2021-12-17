const routes = require('express').Router();
const Test = require('../../models/test');

routes.get('/', async (req, res) => {
    try {
        const test = await Test.find();
        res.json(test);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

routes.post('/', async (req, res) => {
    const test = new Test({
        text: "first post"
    });
    try {
        const newTest = await test.save();
        res.status(200).json(newTest);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = routes;