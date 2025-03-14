import express from 'express';
import pkg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const DUMMY_NEWS = [
  {
    id: 'n1',
    slug: 'will-ai-replace-humans',
    title: 'Will AI Replace Humans?',
    image: 'ai-robot.jpg',
    date: '2021-07-01',
    content:
      'Since late 2022 AI is on the rise and therefore many people worry whether AI will replace humans. The answer is not that simple. AI is a tool that can be used to automate tasks, but it can also be used to augment human capabilities. The future is not set in stone, but it is clear that AI will play a big role in the future. The question is how we will use it.',
  },
  {
    id: 'n2',
    slug: 'beaver-plague',
    title: 'A Plague of Beavers',
    image: 'beaver.jpg',
    date: '2022-05-01',
    content:
      'Beavers are taking over the world. They are building dams everywhere and flooding entire cities. What can we do to stop them?',
  },
  {
    id: 'n3',
    slug: 'couple-cooking',
    title: 'Spend more time together!',
    image: 'couple-cooking.jpg',
    date: '2024-03-01',
    content:
      'Cooking together is a great way to spend more time with your partner. It is fun and you get to eat something delicious afterwards. What are you waiting for? Get cooking!',
  },
  {
    id: 'n4',
    slug: 'hiking',
    title: 'Hiking is the best!',
    image: 'hiking.jpg',
    date: '2024-01-01',
    content:
      'Hiking is a great way to get some exercise and enjoy the great outdoors. It is also a great way to clear your mind and reduce stress. So what are you waiting for? Get out there and start hiking!',
  },
  {
    id: 'n5',
    slug: 'landscape',
    title: 'The beauty of landscape',
    image: 'landscape.jpg',
    date: '2022-07-01',
    content:
      'Landscape photography is a great way to capture the beauty of nature. It is also a great way to get outside and enjoy the great outdoors. So what are you waiting for? Get out there and start taking some pictures!',
  },
];

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
});

// 데이터베이스 초기화 함수
async function initDb() {
  const client = await pool.connect();
  await client.query(`SET search_path TO ${process.env.DB_SCHEMA}`);
  try {
    // 테이블 생성
    await client.query(`
      CREATE TABLE IF NOT EXISTS news (
        id SERIAL PRIMARY KEY,
        slug TEXT UNIQUE,
        title TEXT,
        content TEXT,
        date TEXT,
        image TEXT
      );`);
     await client.query(` CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        first_name TEXT,
        last_name TEXT,
        email TEXT
      );`);
    await client.query(`
      CREATE TABLE IF NOT EXISTS posts (
        id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        user_id INTEGER,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      );
    `);
    await client
      .query(`
      CREATE TABLE IF NOT EXISTS likes (
        user_id INTEGER,
        post_id INTEGER,
        PRIMARY KEY (user_id, post_id),
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
      );
    `);

    // 기존 데이터 확인
    const result = await client.query('SELECT COUNT(*) AS count FROM news');
    const count = parseInt(result.rows[0].count);

    // 데이터가 없을 경우 삽입
    if (count === 0) {
      const insertQuery = `
        INSERT INTO news (slug, title, content, date, image)
        VALUES ($1, $2, $3, $4, $5)
      `;

      for (const news of DUMMY_NEWS) {
        await client.query(insertQuery, [
          news.slug,
          news.title,
          news.content,
          news.date,
          news.image,
        ]);
      }
      console.log('DUMMY_NEWS 데이터를 삽입했습니다.');
    }

    const userResult = await client.query('SELECT COUNT(*) AS count FROM users');
    const userCount = parseInt(userResult.rows[0].count);

    if (userCount === 0) {
      const insertQuery = `INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)`;
      
      await client.query(insertQuery, ['John', 'Doe', 'john@example.com']);
      await client.query(insertQuery, ['Max', 'Schwarz', 'max@example.com']);
    }

  } catch (error) {
    console.error('데이터베이스 초기화 중 오류 발생:', error);
  } finally {
    client.release();
  }
}

const app = express();

app.use(cors())

app.get('/news', async (req, res) => {
  const client = await pool.connect();
  await client.query(`SET search_path TO ${process.env.DB_SCHEMA}`);


  try {
    const result = await client.query('SELECT * FROM news');

    // 3초 후에 응답 보냄
    setTimeout(() => {
      res.json(result.rows);
    }, 3000);
  } catch (error) {
    console.error('뉴스 데이터 조회 중 오류 발생:', error);
    res.status(500).json({ error: '서버 오류' });
  } finally {
    client.release();
  }
});


initDb().then(() => {
  app.listen(8080, () => {
    console.log('서버가 http://localhost:8080 에서 실행 중입니다.');
  });
});
