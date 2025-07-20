import pool from './pool.js'

export async function getAllMessages() {
    const { rows } = await pool.query('SELECT * FROM message');
    return rows;
}

export async function addMessage(userName, text) {
    await pool.query('INSERT INTO message (userName, text) VALUES ($1, $2)', [userName, text])
}

export async function getMessageById(id) {
    const result  = await pool.query(`SELECT * FROM message where id = $1`, [id] )

    return result.rows[0]
}