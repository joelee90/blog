import * as React from "react"
import { Link } from "gatsby"
import SideBar from "./side-bar"
import SideBarMenu from "./side-bar-menu"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const [openSideBar, openSideBarSet] = React.useState(false)
  React.useEffect(() => {
    openSideBarSet(false)
  }, [])

  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <SideBar openSideBar={openSideBar} openSideBarSet={openSideBarSet} />
      </header>
      {openSideBar ? (
        <SideBarMenu
          openSideBar={openSideBar}
          openSideBarSet={openSideBarSet}
        />
      ) : (
        <>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </>
      )}
    </div>
  )
}

export default Layout
