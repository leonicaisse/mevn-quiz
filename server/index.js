const express = require("express")
const morgan = require("morgan")
const app = express()
const port = 8000

app.use(morgan())

app.get('/', (req, res) => {
    res.json({
        "id": 1,
        "title": "Test"
    });
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})