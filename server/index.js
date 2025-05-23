const dotenv = require('dotenv');
const path = require('path');
const express = require("express");
const cors = require("cors");
const { Pool } = require('pg');
const app = express();
const PORT = process.env.PORT || 3001;

const envPath = process.env.NODE_ENV === 'development' ? '.env.development' : '.env';
dotenv.config({ path: path.resolve(__dirname, envPath) });

const poolConfig = {
    connectionString: process.env.DATABASE_URL,
};

if (process.env.NODE_ENV === 'production') {
    poolConfig.ssl = { rejectUnauthorized: false };
}

const pool = new Pool(poolConfig);

app.use(express.json());
app.use(cors());

app.get('/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching todos:', err);
        res.status(500).json({ error: 'Internal Server Error' });

    }

});


app.post('/todos', async (req, res) => {
    console.log('POST受信データ:', req.body);
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }
    try {
        const result = await pool.query(
            'INSERT INTO todos (title, is_done) VALUES ($1, $2) RETURNING *',
            [title, false]
        );
        console.log('Query result:', result);
        if (result.rows && result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(400).json({ error: 'Failed to add todo' });
        }
    } catch (err) {
        console.error('Error adding todo:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM todos WHERE id = $1', [id]);
        res.status(200).json();
    } catch (err) {
        console.error('Error deleting todo:', err);
        res.status(500).json({ error: 'Internal Server Error' });

    }
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});



