import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
import Pagination from "../components/Pagination/Pagination"

import {
  Wrapper,
  ContentWrapper,
  PageContent,
  StyledH2,
  StyledDate,
  StyledReadMore,
} from "./archive.styles"

const archiveTemplate = ({
  data: { allWpPost },
  pageContext: { catId, catName, catUri, categories, numPages, currentPage },
}) => (
  <Layout>
    <StaticImage
      src="../images/archive_headerimage.png"
      alt="Archive Hero"
      placeholder="TRACED_SVG"
    />
    <Wrapper>
      <BreadCrumb
        parent={{
          uri: "/category/all-posts",
          title: "category",
        }}
      />
      <ContentWrapper>
        <ArchiveSidebar catId={catId} categories={categories.edges} />
        <PageContent>
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWpPost.edges.map(post => {
            return (
              <article key={post.node.id} className="entry-content">
                <Link to={`/category${post.node.uri}`}>
                  <StyledH2
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                  />
                </Link>
                <StyledDate
                  dangerouslySetInnerHTML={{ __html: post.node.date }}
                />
                <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                <StyledReadMore to={`/category${post.node.uri}`}>
                  Read More
                </StyledReadMore>
                <div className="dot-divider" />
              </article>
            )
          })}
          <Pagination
            catUri={catUri}
            page={currentPage}
            totalPages={numPages}
          />
        </PageContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)

export default archiveTemplate

export const pageQuery = graphql`
  query ($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "MMMM DD, YYYY, hh:mma")
        }
      }
    }
  }
`
