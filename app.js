const express = require('express');
const app = express();
const path = require('node:path');

const messages = [
  {
    text: 'Hello there!',
    user: 'Mike',
    added: new Date()
  },
  {
    text: 'How are you?',
    user: 'John',
    added: new Date()
  },
  {
    text: 'Where are you?',
    user: 'Jake',
    added: new Date()
  },
  {
    text: 'I\'m good.',
    user: 'Chris',
    added: new Date()
  },
  {
    text: 'You\'re welcome!',
    user: 'Ron',
    added: new Date()
  }
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded( {extended: true }));

app.get('/', (req, res) => {
  res.render('index', { messages: messages});
});

app.get('/new', (req, res) => {
  res.render('form');
});

app.get('/message/:index', (req, res) => {
  res.render('messages/message', {message: messages[req.params.index]});
});

app.post('/new', (req, res) => {
  messages.push({ text: req.body.text, user: req.body.user, added: new Date() });
  res.redirect('/');
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening: http://localhost:${PORT}`));