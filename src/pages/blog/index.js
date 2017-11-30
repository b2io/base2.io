import React from 'react';
import { mapProps } from 'recompose';
import styled from 'styled-components';
import {
  GlobalNavigation,
  Header,
  H1,
  H2,
  List,
  Main,
  P,
  Section,
  Time,
} from '../../components';

function PostExcerpt({ author, date, excerpt, title }) {
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
    const { posts } = this.props;

    return (
      <Main>
        <GlobalNavigation />
        <Header>
          <H1>Blog</H1>
        </Header>
        <Section>
          <List unstyled>
            {posts.map(post => <PostExcerpt {...post} key={post.id} />)}
          </List>
        </Section>
      </Main>
    );
  }
}

function mapDataToProps({ data }) {
  const authorIdToName = data.authors.edges
    .map(e => e.node)
    .reduce((hashMap, { id, name }) => ({ ...hashMap, [id]: name }), {});
  const posts = data.posts.edges.map(e => e.node).map(node => ({
    author: authorIdToName[node.frontmatter.author],
    date: node.frontmatter.date,
    excerpt: node.excerpt,
    id: node.internal.contentDigest,
    title: node.frontmatter.title,
  }));

  return { posts };
}

export default mapProps(mapDataToProps)(BlogIndex);

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
