const { Pool } = require("pg");

// Replace these with your database connection details
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "3759",
  port: 5432, // Default PostgreSQL port
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

// ("postgresql://postgres:3759@localhost:5432/postgres");
