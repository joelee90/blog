import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SideBar from "../components/side-bar"
import SideBarMenu from "../components/side-bar-menu"
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data, location }) => {
  console.log("About data", data)

  const [openSideBar, openSideBarSet] = React.useState(false)
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1 className="main-heading">About</h1>
        <SideBar openSideBar={openSideBar} openSideBarSet={openSideBarSet} />
      </header>
      {openSideBar ? (
        <SideBarMenu
          openSideBar={openSideBar}
          openSideBarSet={openSideBarSet}
        />
      ) : (
        <div>
          <div style={{ fontWeight: "bold" }}>(주)하이퍼클라우드</div>
          <div>2022.02 - 현재</div>
          <div>Front End Developer</div>
          <br />
          <div style={{ fontWeight: "bold" }}>(주)브릭</div>
          <div>2020.09 - 2022.02</div>
          <div>Front End Developer</div>
          <br />
          <div style={{ fontWeight: "bold" }}>SPICED Academy</div>
          <div>2019.05 - 20219.08</div>
          <div>Full Stack Web Development Program focused on JavaScript.</div>
        </div>
      )}
    </div>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
