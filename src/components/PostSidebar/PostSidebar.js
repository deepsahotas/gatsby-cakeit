import React from "react"
import { Link } from "gatsby"
import { Wrapper, Menu } from "./PostSidebar.styles"

const PostSidebar = ({ date, author, categories }) => {
  console.log(categories)
  return (
    <Wrapper>
      <Menu>
        <li className="sidebar-section">
          <span>{date}</span>
        </li>
        <li className="sidebar-section">
          <span>{author}</span>
        </li>
        <li className="sidebar-section">
          <span>Categories</span>
        </li>

        {categories.map(cat => {
          return cat.slug !== "all-posts" ? (
            <li key={cat.id} className="sidebar-section">
              <Link to={cat.uri}>
                <span>{cat.name}</span>
              </Link>
            </li>
          ) : null
        })}
      </Menu>
    </Wrapper>
  )
}

export default PostSidebar
