const express = require('express');
const {Pool} = require('pg');

const app = express();
const pool = new Pool({
  user: 'pgadmin4@pgadmin.org',
  host: 'localhost',
  database: 'mangaeul',
  password: 'h0bbes',
  port: 5432,
});

app.use(express.json());

// CRUD API routes
app.post('/api/manga', async (req, res) => {
  const {
    title,
    author,
    genre,
    description,
    cover_image,
    publication_year,
    status,
    rating,
    number_of_volumes,
    number_of_chapters,
  } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO manga (title, author, genre, description, cover_image, publication_year, status, rating, number_of_volumes, number_of_chapters) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        title,
        author,
        genre,
        description,
        cover_image,
        publication_year,
        status,
        rating,
        number_of_volumes,
        number_of_chapters,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting manga:', error);
    res.status(500).json({error: 'An error occurred while adding the manga.'});
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
