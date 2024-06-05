
import { revalidateTag } from "next/cache"
import { AddPostButton } from "./add-post-button"

export function AddPost() {

    const handleSubmit = async (form: FormData) => {
        'use server'

        const title = form.get('title')

        await new Promise(resolve => setTimeout(resolve, 2000))

        await fetch('http://localhost:3333/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title
            })
        })

        revalidateTag('get-posts')
    }
    return (
        <form action={handleSubmit} method="POST">
            <input type="text" name="title" placeholder="post" />
            <AddPostButton />
        </form>
    )
}