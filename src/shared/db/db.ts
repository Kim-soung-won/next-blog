import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
});

interface QueryResult {
  rows: any[];
  rowCount: number;
  oid: number;
  command: string;
}

interface Query {
  (text: string, params?: any[]): Promise<QueryResult>;
}

const query: Query = async (text, params) => {
  const client = await pool.connect();
  try {
    await client.query(`SET search_path TO ${process.env.DB_SCHEMA}`);
    return client.query(text, params);
  } finally {
    client.release();
  }
};

const db = { query };

export default db;