import { Link, routes } from '@redwoodjs/router'

const BlogPost = ({ post }) => {
  return (
    <article key={post.id}>
      <header>
        <h2><Link to={routes.blogPost({id: post.id})}>{post.title}</Link></h2>
      </header>
      <p>{post.body}</p>
      <time>Posted at: {post.createdAt}</time>
    </article>
  )
}

export default BlogPost
