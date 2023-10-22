import { z } from "zod"

const PostSchema = z.object({
    userId: z.number().positive(),
    id: z.number().positive(),
    title: z.string(),
    body: z.string()
})

const PostArraySchema = z.array(PostSchema)

// faire une inférence pour déterminer le type a partir du schema
// type Post = z.infer<typeof PostSchema>

export async function load({ fetch }) {
    // const posts: Post[] = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()

    const posts = PostArraySchema.parse(await (await fetch("https://jsonplaceholder.typicode.com/posts")).json())

    return {
        posts
    }
}

