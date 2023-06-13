import {createPool} from 'mysql2/promise'

import {DB_USER,DB_PORT,DB_DATABASE,DB_PASSWORD,DB_HOST} from './config.js'



export const pool = createPool({
  host: DB_HOST,//si mysql esta en nube o IP 
  user: DB_USER,
  password:DB_PASSWORD, 
  port:DB_PORT,
  database: DB_DATABASE,
  // waitForConnections: true,
  // connectionLimit: 10,
  // maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  // idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  // queueLimit: 0,
  // enableKeepAlive: true,
  // keepAliveInitialDelay: 0
});

