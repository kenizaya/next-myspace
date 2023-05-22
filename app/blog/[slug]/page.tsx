export const revalidate = 420

interface Post {
  title: string
  content: string
  slug: string
}

interface Props {
  params: { slug: string }
}

const BlogPostPage = async ({ params }: Props) => {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  )

  const post = posts.find((post) => post.slug === params.slug)!

  console.log(posts)

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )
}

export default BlogPostPage
