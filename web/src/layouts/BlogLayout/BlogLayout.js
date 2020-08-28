const { routes, Link } = require("@redwoodjs/router")

const BlogLayout = ({ children }) => {
  return (
    <div>
      <header>
        <div class="logo">
          <h1>
            <Link to={routes.home()}>Developing in the Woods</Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Blog Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default BlogLayout
