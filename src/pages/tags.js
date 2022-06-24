import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SideBar from "../components/side-bar"
import SideBarMenu from "../components/side-bar-menu"

const Tags = ({ data, location }) => {
  console.log("data", data)
  const tags = data.allMarkdownRemark.nodes

  const [openSideBar, openSideBarSet] = React.useState(false)
  return (
    <div className="global-wrapper">
      <header className="global-header">
        <h1 className="main-heading">Tags</h1>
        <SideBar openSideBar={openSideBar} openSideBarSet={openSideBarSet} />
      </header>
      {openSideBar ? (
        <SideBarMenu
          openSideBar={openSideBar}
          openSideBarSet={openSideBarSet}
        />
      ) : (
        <div>
          {tags.map(tag => {
            const tags = tag.frontmatter.tags || ""
            // console.log("tags", tags)
            return <div key={tag.fields.slug}>{tags}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default Tags

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
