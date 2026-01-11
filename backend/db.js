const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "YOUR_PASSWORD",
  database: "meal_app",
  port: 5432,
});

pool.on("connect", () => {
  console.log("PostgreSQL connected");
});

module.exports = pool;
