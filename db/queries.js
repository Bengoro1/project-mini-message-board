const pool = require('./pool');

async function getAllMessages() {
  const {rows} = await pool.query('SELECT * FROM messages');
  return rows;
}

async function selectMessage(num) {
  const {rows} = await pool.query(`SELECT * FROM messages LIMIT 1 OFFSET $1`, [num]);
  return rows;
}

async function newMessage(text, user) {
  await pool.query(`INSERT INTO messages (text, "user", added) VALUES ($1, $2, NOW())`, [text, user]);
}

module.exports = {
  getAllMessages,
  selectMessage,
  newMessage
}