import { pool } from "../db.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // confirmar si esxiste usuario
    const selectQuery = 'SELECT * FROM usuario WHERE email = ?';
    const [selectResults] = await pool.query(selectQuery, [email]);

    if (selectResults.length === 0) {
      return res.status(401).json({ error: 'credencial invalida' });
    }

    const user = selectResults[0];

    // Compare the provided password with the stored hash
    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    return res.json({ message: 'Bienvenido', });
  } catch (error) {
    console.error('Error logging in: ', error);
    res.status(500).json({ error: 'Error logging in' });
  }
};