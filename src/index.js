import app from "./app.js";
import { PORT } from "./config.js";
import { pool } from "./db.js";

const startServer = async () => {
  try {
    await pool.query("SELECT 1"); // Test database connection
    console.log("DB connection ok ");

    app.listen(PORT, () => {
      console.log(`Escuchando puerto`, PORT);
    });
  } catch (error) {
    console.error("Error al coneactar a database: ", error);
  }
};

startServer();
