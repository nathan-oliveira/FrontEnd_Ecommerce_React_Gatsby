import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import Categories from "../components/Layout/Main/categories"
import Products from "../components/Layout/Main/products"
import Offer from "../components/Layout/Main/offer"
import Testimonial from "../components/Layout/Main/testimonial"
import Brands from "../components/Layout/Main/brands"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Categories />
      <Products />
      <Offer />
      <Testimonial />
      <Brands />
    </Layout>
  )
}
