import * as React from "react"
import { Link } from "gatsby"

const SideBarMenu = ({ openSideBar, openSideBarSet }) => {
  return (
    <div
      className="side-bar-menu"
      onClick={() => {
        openSideBarSet(!openSideBar)
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          About
        </Link>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          Github
        </Link>
      </div>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          Tags
        </Link>
      </div>
    </div>
  )
}

export default SideBarMenu
