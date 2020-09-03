import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface PropsType {
  name: string
}

export default (props: PropsType) => {
  const data = useStaticQuery(graphql`
    query {
      menu: file(relativePath: { eq: "menu.png" }) {
        childImageSharp {
          fluid(maxWidth: 30, maxHeight: 30) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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

      category1: file(relativePath: { eq: "category-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      category2: file(relativePath: { eq: "category-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      category3: file(relativePath: { eq: "category-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }


      product1: file(relativePath: { eq: "product-1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product2: file(relativePath: { eq: "product-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product3: file(relativePath: { eq: "product-3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product4: file(relativePath: { eq: "product-4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product5: file(relativePath: { eq: "product-5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product6: file(relativePath: { eq: "product-6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product7: file(relativePath: { eq: "product-7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product8: file(relativePath: { eq: "product-8.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product9: file(relativePath: { eq: "product-9.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product10: file(relativePath: { eq: "product-10.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product11: file(relativePath: { eq: "product-11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      product12: file(relativePath: { eq: "product-12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }


      exclusive: file(relativePath: { eq: "exclusive.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      

      user1: file(relativePath: { eq: "user-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      user2: file(relativePath: { eq: "user-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      user3: file(relativePath: { eq: "user-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }


      logogodrej: file(relativePath: { eq: "logo-godrej.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      logooppo: file(relativePath: { eq: "logo-oppo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      logococacola: file(relativePath: { eq: "logo-coca-cola.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      logopaypal: file(relativePath: { eq: "logo-paypal.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      logophilips: file(relativePath: { eq: "logo-philips.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      playstore: file(relativePath: { eq: "play-store.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      appstore: file(relativePath: { eq: "app-store.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      logowhite: file(relativePath: { eq: "logo-white.png" }) {
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
              return <Img className="menu-icon" fluid={data.menu.childImageSharp.fluid} alt="Menu" />
            case "image1":
              return <Img className="image-header" fluid={data.image1.childImageSharp.fluid} alt="Image Banner" />
            case "cart":
              return <Img className="image-cart" fluid={data.cart.childImageSharp.fluid} alt="Shopping Cart" />
            case "logo":
              return <Img className="image-logo" fluid={data.logo.childImageSharp.fluid} alt="Logo" />

            case "category1":
              return <Img className="image-category" fluid={data.category1.childImageSharp.fluid} alt="Category" />
            case "category2":
              return <Img className="image-category" fluid={data.category2.childImageSharp.fluid} alt="Category" />
            case "category3":
              return <Img className="image-category" fluid={data.category3.childImageSharp.fluid} alt="Category" />

            case "product1":
              return <Img className="image-product" fluid={data.product1.childImageSharp.fluid} alt="Product" />
            case "product2":
              return <Img className="image-product" fluid={data.product2.childImageSharp.fluid} alt="Product" />
            case "product3":
              return <Img className="image-product" fluid={data.product3.childImageSharp.fluid} alt="Product" />
            case "product4":
              return <Img className="image-product" fluid={data.product4.childImageSharp.fluid} alt="Product" />
            case "product5":
              return <Img className="image-product" fluid={data.product5.childImageSharp.fluid} alt="Product" />
            case "product6":
              return <Img className="image-product" fluid={data.product6.childImageSharp.fluid} alt="Product" />
            case "product7":
              return <Img className="image-product" fluid={data.product7.childImageSharp.fluid} alt="Product" />
            case "product8":
              return <Img className="image-product" fluid={data.product8.childImageSharp.fluid} alt="Product" />
            case "product9":
              return <Img className="image-product" fluid={data.product9.childImageSharp.fluid} alt="Product" />
            case "product10":
              return <Img className="image-product" fluid={data.product10.childImageSharp.fluid} alt="Product" />
            case "product11":
              return <Img className="image-product" fluid={data.product11.childImageSharp.fluid} alt="Product" />
            case "product12":
              return <Img className="image-product" fluid={data.product12.childImageSharp.fluid} alt="Product" />

            case "exclusive":
              return <Img className="offer-img" fluid={data.exclusive.childImageSharp.fluid} alt="Exclusive" />

            case "user1":
              return <Img className="image-user" fluid={data.user1.childImageSharp.fluid} alt="User" />
            case "user2":
              return <Img className="image-user" fluid={data.user2.childImageSharp.fluid} alt="User" />
            case "user3":
              return <Img className="image-user" fluid={data.user3.childImageSharp.fluid} alt="User" />

            case "logogodrej":
              return <Img className="image-brands" fluid={data.logogodrej.childImageSharp.fluid} alt="Brands" />
            case "logooppo":
              return <Img className="image-brands" fluid={data.logooppo.childImageSharp.fluid} alt="Brands" />
            case "logococacola":
              return <Img className="image-brands" fluid={data.logococacola.childImageSharp.fluid} alt="Brands" />
            case "logopaypal":
              return <Img className="image-brands" fluid={data.logopaypal.childImageSharp.fluid} alt="Brands" />
            case "logophilips":
              return <Img className="image-brands" fluid={data.logophilips.childImageSharp.fluid} alt="Brands" />

            case "playstore":
              return <Img className="img-apps" fluid={data.playstore.childImageSharp.fluid} alt="PlayStore" />
            case "appstore":
              return <Img className="img-apps" fluid={data.appstore.childImageSharp.fluid} alt="AppStore" />
            case "logowhite":
              return <Img className="logowhite" fluid={data.logowhite.childImageSharp.fluid} alt="AppStore" />
            default:
              break;
          }
        })()
      }
    </>
  )
}
