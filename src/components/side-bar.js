/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const SideBar = ({ openSideBar, openSideBarSet }) => {
  return (
    <div
      className="gatsby-side-container"
      onClick={() => {
        openSideBarSet(!openSideBar)
      }}
    >
      {!openSideBar ? (
        <StaticImage
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src={"../images/side-bar.png"}
          width={30}
          height={30}
          quality={95}
          alt="side-bar"
        />
      ) : (
        <StaticImage
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src={"../images/close.png"}
          width={30}
          height={30}
          quality={95}
          alt="side-bar"
        />
      )}
    </div>
  )
}

export default SideBar
