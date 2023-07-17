import {createPool} from 'mysql2/promise'

import {DB_USER,DB_PORT,DB_DATABASE,DB_PASSWORD,DB_HOST} from './config.js'



export const pool = createPool({
  host: DB_HOST,//si mysql esta en nube o IP 
  user: DB_USER,
  password:DB_PASSWORD, 
  port:DB_PORT,
  database: DB_DATABASE,
  
});

