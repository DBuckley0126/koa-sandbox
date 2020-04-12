const path = require("path");

const BASE_PATH = path.join(__dirname, "src", "server", "db");

module.exports = {
  test: {
    client: "pg",
    connection:
      "postgres://dannybuckley:dannyboy.0126@localhost:5432/lumistage_backend_test",
    migrations: {
      directory: path.join(BASE_PATH, "migrations")
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds")
    }
  },
  development: {
    client: "pg",
    connection:
      "postgres://dannybuckley:dannyboy.0126@localhost:5432/lumistage_backend",
    migrations: {
      directory: path.join(BASE_PATH, "migrations")
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds")
    }
  }
};
