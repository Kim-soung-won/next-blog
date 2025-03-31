import PostForm from "@/features/blog/post-form";
import { createPost } from "../actions/posts";

export default function NewPostPage() {
  return <PostForm createPost={createPost} />;
}
