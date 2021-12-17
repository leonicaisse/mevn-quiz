const app = require('./app');
const port = process.env.port || 8000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
