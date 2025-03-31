import { getAllPosts } from "@/shared/db/blog/posts";

export async function GET(request) {
  "use server";
  const data = await getAllPosts();
  console.log("data", data);

  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json",
      },
      });
}