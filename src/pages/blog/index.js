import React from 'react';
import styled from 'styled-components';
import { Header, H1, H2, List, Main, P, Section, Time } from '../../components';

function PostListItem({ author, date, excerpt, title }) {
  return (
    <List.Item>
      <H2>{title}</H2>
      <P>
        <Time iso={date} />— {author}
      </P>
      <P>{excerpt}</P>
    </List.Item>
  );
}

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.posts.edges.map(e => e.node);
    const authorIdToName = data.authors.edges
      .map(e => e.node)
      .reduce((hashMap, { id, name }) => ({ ...hashMap, [id]: name }), {});

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
                author={authorIdToName[post.frontmatter.author]}
                date={post.frontmatter.date}
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
    authors: allTeamJson {
      edges {
        node {
          id
          name
        }
      }
    }
    posts: allMarkdownRemark(
      sort: { fields: [fileAbsolutePath], order: DESC }
    ) {
      edges {
        node {
          internal {
            contentDigest
          }
          excerpt
          fileAbsolutePath
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
