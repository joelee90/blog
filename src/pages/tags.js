import * as React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import SideBar from "../components/side-bar"
import SideBarMenu from "../components/side-bar-menu"

const Tags = ({ data, location }) => {
  // console.log("Tags data", data)
  const tags = data.allMarkdownRemark.nodes
  let key = "tags"
  const getTagList = tags.map(tagItem => {
    if (tagItem.frontmatter.tags !== null && tagItem.frontmatter.tags !== "") {
      return tagItem.frontmatter
    }
  })

  const findOcc = (array, key) => {
    let tagList = []
    array.forEach(i => {
      if (i !== undefined) {
        if (
          tagList.some(val => {
            return val[key] === i[key]
          })
        ) {
          tagList.forEach(k => {
            if (k[key] === i[key]) {
              k["occurrence"]++
            }
          })
        } else {
          let a = {}
          a[key] = i[key]
          a["occurrence"] = 1
          tagList.push(a)
        }
      }
    })
    return tagList
  }
  const tagListArray = findOcc(getTagList, key)

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
        <div className="tag-list">
          {tagListArray.map((tag, idx) => {
            return (
              <div className="tag-item" key={idx}>
                # {tag.tags} ({tag.occurrence})
              </div>
            )
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
