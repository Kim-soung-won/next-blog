import { z } from "zod";
import { NewsesSchema, NewsSchema } from "./news.contract";

export type News = z.infer<typeof NewsSchema>
export type Newses = z.infer<typeof NewsesSchema>