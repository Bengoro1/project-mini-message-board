const db = require('../db/queries');

async function allMessagesGet(req, res) {
  const messages = await db.getAllMessages();
  res.render('index', { messages: messages});
}

async function newFormGet(req, res) {
  res.render('form');
}

async function messageGet(req, res) {
  const message = await db.selectMessage(req.params.index);
  res.render('messages/message', {message: message[0]});
}

async function newMessagePost(req, res) {
  const { text, user } = req.body;
  await db.newMessage(text, user);
  res.redirect('/');
}

module.exports = {
  allMessagesGet,
  newFormGet,
  messageGet,
  newMessagePost
}