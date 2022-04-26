import { Link } from "gatsby"
import React from "react"
import { NavigationWrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => {
  return (
    <NavigationWrapper>
      <ul>
        {menu.menuItems.nodes.map(menuItem => {
          return !menuItem.parentId ? (
            <li key={menuItem.id}>
              <Link to={menuItem.url} activeClassName="nav-active">
                {menuItem.label}
                {menuItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
              </Link>
              {menuItem.childItems.nodes.length !== 0 ? (
                <ul>
                  {menuItem.childItems.nodes.map(childItem => {
                    return (
                      <li key={childItem.id}>
                        <Link to={childItem.url} activeClassName="nav-active">
                          {childItem.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </li>
          ) : null
        })}
      </ul>
    </NavigationWrapper>
  )
}

export default Navigation
