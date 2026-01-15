const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "KhataApp",
  port: 5432,
});

pool.on("connect", () => {
  console.log("PostgreSQL connected");
});

module.exports = pool;
