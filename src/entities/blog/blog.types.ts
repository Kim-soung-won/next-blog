import { z } from "zod";
import { postSchema } from "./blog.constract";

export type Post = z.infer<typeof postSchema>;