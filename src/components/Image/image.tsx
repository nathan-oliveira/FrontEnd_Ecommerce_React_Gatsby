import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 30, maxHeight: 30) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }

      image1: file(relativePath: { eq: "image1.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      cart: file(relativePath: { eq: "cart.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <>
      {
        (() => {
          switch (props.name) {
            case "menu":
              return <Img className="menu-icon" fluid={data.menu.childImageSharp.fluid} alt="menu" />
            case "image1":
              return <Img className="image-header" fluid={data.image1.childImageSharp.fluid} alt="Image Banner" />
            case "cart":
              return <Img className="image-cart" fluid={data.cart.childImageSharp.fluid} alt="Shopping Cart" />
            case "logo":
              return <Img className="image-logo" fluid={data.logo.childImageSharp.fluid} alt="Shopping Cart" />
            default:
              break;
          }
        })()
      }
    </>
  )
}
