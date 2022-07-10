/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  // const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["AUTO", "WEBP", "AVIF"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br />
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/GitHub-Mark-64px.png"
            width={20}
            height={20}
            quality={95}
          />
          <a
            href={"https://github.com/joelee90"}
            target="_blank"
            style={{ marginLeft: 2, textDecoration: "none" }}
          >
            Github
          </a>
          <br />
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/LI-In-Bug.png"
            width={20}
            height={20}
            quality={95}
          />
          <a
            href={"https://www.linkedin.com/in/jonghyeoklee90"}
            target="_blank"
            style={{ marginLeft: 2, textDecoration: "none" }}
          >
            LinkedIn
          </a>
          <br />
          <StaticImage
            formats={["AUTO", "WEBP", "AVIF"]}
            src="../images/logo-twitter.png"
            width={20}
            height={20}
            quality={95}
          />
          <a
            href={"https://twitter.com/jhl_90"}
            target="_blank"
            style={{ marginLeft: 2, textDecoration: "none" }}
          >
            Twitter
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
