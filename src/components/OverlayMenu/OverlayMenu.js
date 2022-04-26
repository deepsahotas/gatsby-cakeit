import React from "react"
import { Link } from "gatsby"
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close_btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Overlay } from "../OverlayMenu/OverlayMenu.styles"

const OverlayMenu = ({ menuOpen, callback }) => {
  const { menu } = useMenuQuery()
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img className="invertedLogo" src={InvertedLogo} alt="White-logo" />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map(Item => {
            return !Item.parentId ? (
              <li key={Item.id}>
                <Link to={Item.url} activeClassName="overlayActive">
                  {Item.label}
                </Link>
              </li>
            ) : null
          })}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
