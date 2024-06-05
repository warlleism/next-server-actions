export async function Tags() {

    const response = await fetch('http://localhost:3333/posts',
        {
            next: {
                tags: ['get-posts']
            }
        }
    )
    const data = await response.json()

    return (
        <ul>
            {data.map((item: any) => <li key={item.id}>{item.title}</li>)}
        </ul>
    )
}