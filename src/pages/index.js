import * as React from "react"

import Seo from "../components/SEO/SEO"

import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
  </Layout>
)

export default IndexPage
