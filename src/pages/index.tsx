import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
// import Image from "../components/Image/image"
import SEO from "../components/seo"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>MAIN</h1>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}
