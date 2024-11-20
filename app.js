const express = require('express');
const app = express();
const path = require('node:path');
const controller = require('./controllers/controller');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended: true }));

app.get('/', controller.allMessagesGet);
app.get('/new', controller.newFormGet);
app.get('/message/:index', controller.messageGet);
app.post('/new', controller.newMessagePost);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));