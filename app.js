const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! Welcome to AWS DevOps! and this is my first AWS project. I am so excited to learn AWS DevOps!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
