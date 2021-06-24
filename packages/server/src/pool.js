const { Pool } = require('pg');
const pool = new Pool();

pool.on('error', (err, client) => {
    console.error('Error:', err);
})
