import { z } from "zod"

const PostSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    body: z.string()
})

type Post = z.infer<typeof PostSchema>

export async function load({ fetch }) {
    const posts: Post[] = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
    return {
        posts
    }
}