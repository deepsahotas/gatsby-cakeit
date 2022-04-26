import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/Layout/Layout"
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../../components/PostSidebar/PostSidebar"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
`
const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`
const PostContent = styled.article`
  margin-top: 20px;
`

const PostTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Wrapper>
        <BreadCrumb
          parent={{
            uri: "/category/all-posts",
            title: "category",
          }}
        />
        <ContentWrapper>
          <PostSidebar
            date={data.post.date}
            author={data.post.author.node.name}
            categories={data.post.categories.nodes}
          />
          <PostContent>
            <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
            <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
            <div>Content</div>
          </PostContent>
        </ContentWrapper>
      </Wrapper>
    </Layout>
  )
}

export default PostTemplate

export const postQuery = graphql`
  query ($id: String!) {
    post: wpPost(id: { eq: $id }) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
  }
`
