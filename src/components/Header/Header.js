import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Navigation from "../Navigation/Navigation"

const Header = () => {
  const { site, menu } = useMenuQuery()
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={menu} />
      </Content>
    </Wrapper>
  )
}

export default Header
