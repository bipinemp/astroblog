import { z, defineCollection } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      tags: z.array(
        z.enum([
          "HTML",
          "CSS",
          "React",
          "JavaScript",
          "NextJs",
          "Technical Discussion",
        ])
      ),
    }),
  }),
};
