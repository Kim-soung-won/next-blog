"use server";

import { Post } from "@/entities/blog/blog.types";
import { storePost } from "@/shared/db/blog/posts";
import { redirect } from "next/navigation";

export async function createPost(prevState, formData) {
    const title = formData.get("title");
    const image = formData.get("image").name;
    const content = formData.get("content");

    let errors: string[] = [];

    if (!title || title.trim().length === 0) {
      errors.push("Title is required.");
    }

    if (!content || content.trim().length === 0) {
      errors.push("Content is required.");
    }

    if (errors.length > 0) {
      return { errors };
    }

    console.log(title, image, content);

    const result = await storePost({
      image,
      title,
      content,
      userId: 1,
    } as Post);

    if (result != 0) {
      redirect("/blog");
    }
  }