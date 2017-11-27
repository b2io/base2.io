import React from 'react';
import styled from 'styled-components';
import { Header, H1, H2, List, Main, P, Section } from '../../components';
import { hugeDate } from '../../util/datetime';

function PostListItem({ author, date, excerpt, title }) {
  return (
    <List.Item>
      <H2>{title}</H2>
      <P>{date} — {author}</P>
      <P>{excerpt}</P>
    </List.Item>
  );
}

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges.map(e => e.node);

    // TODO: Resolve the author details from a query.
    return (
      <Main>
        <Header>
          <H1>Blog</H1>
        </Header>
        <Section>
          <List unstyled>
            {posts.map(post => (
              <PostListItem
                author={post.frontmatter.author}
                date={hugeDate(post.frontmatter.date)}
                excerpt={post.excerpt}
                key={post.internal.contentDigest}
                title={post.frontmatter.title}
              />
            ))}
          </List>
        </Section>
      </Main>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    posts: allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) {
      edges {
        node {
          internal {
            contentDigest
          }
          excerpt
          frontmatter {
            author
            date
            title
          }
        }
      }
    }
  }
`;
