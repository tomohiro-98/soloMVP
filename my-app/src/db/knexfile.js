module.exports = {
    development: {
      client: "pg",
      connection: {
        database: "solomvp",
        user: "user",
      },
      migrations: {
        directory: "./data/migrations",
      },
      seeds: { directory: "./data/seeds" },
    },
    production: {
      client: "pg",
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./data/migrations",
      },
      seeds: { directory: "./data/seeds" },
    },
};
  
  