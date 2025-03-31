import { Post } from "@/entities/blog/blog.types";
import db from "../db";

export async function getPosts(maxNumber?: number){
  const limitClause = maxNumber ? `LIMIT ${maxNumber}` : '';
  try {
    const query = `
      SELECT 
        posts.id, 
        image_url AS image, 
        title, 
        content, 
        created_at AS createdAt, 
        first_name AS userFirstName, 
        last_name AS userLastName, 
        COUNT(likes.post_id) AS likes, 
        EXISTS(
          SELECT 1 FROM likes WHERE likes.post_id = posts.id AND likes.user_id = 2
        ) AS isLiked
      FROM posts
      INNER JOIN users ON posts.user_id = users.id
      LEFT JOIN likes ON posts.id = likes.post_id
      GROUP BY posts.id, image_url, title, content, created_at, first_name, last_name
      ORDER BY createdAt DESC
      ${limitClause};
    `;

    const result = await db.query(query);
    // return result.rows;
    setTimeout(() => {
      return result.rows;
    }, 2000);
    
  } catch (error) {
    console.error('데이터를 불러오는 데 실패했습니다:', error);
  }
}

export async function storePost(post: Post): Promise<number>{
  const result = await db.query(`
    INSERT INTO posts (image_url, title, content, user_id)
    VALUES ($1, $2, $3, $4)`, [post.image, post.title, post.content, post.userId]);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return result.rowCount; 
}

export async function getAllPosts(){
  const result = await db.query(`
    SELECT 
      posts.id, 
      image_url AS image, 
      title, 
      content, 
      created_at AS createdAt, 
      first_name AS userFirstName, 
      last_name AS userLastName, 
      COUNT(likes.post_id) AS likes, 
      EXISTS(
        SELECT 1 FROM likes WHERE likes.post_id = posts.id AND likes.user_id = 2
      ) AS isLiked
    FROM posts
    INNER JOIN users ON posts.user_id = users.id
    LEFT JOIN likes ON posts.id = likes.post_id
    GROUP BY posts.id, image_url, title, content, created_at, first_name, last_name
    ORDER BY createdAt DESC;
  `);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return result.rows;
}

export async function updatePostLikeStatus(postId: number, userId: number) {
  const result = await db.query(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = $1 AND post_id = $2`, [userId, postId]);

  const isLiked = result.rowCount === 0;

  if (isLiked) {
    const result = await db.query(`
      INSERT INTO likes (user_id, post_id)
      VALUES ($1, $2)`, [userId, postId]);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return result.rows;
  } else {
    const result = await db.query(`
      DELETE FROM likes
      WHERE user_id = $1 AND post_id = $2`, [userId, postId]);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return result.rowCount;
  }
}
