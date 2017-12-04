import React from 'react';
import { mapProps } from 'recompose';
import styled from 'styled-components';
import {
  GlobalNavigation,
  Header,
  H1,
  H2,
  Link,
  List,
  Main,
  P,
  Section,
  Time,
} from '../../components';
import { toNodes } from '../../util/graphql';

function PostExcerpt({ author, date, excerpt, path, title }) {
  return (
    <List.Item>
      <H2>
        <Link to={path}>{title}</Link>
      </H2>
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

function mapPropsToProps({ data }) {
  // TODO: Find a way to resolve the author name more easily.
  const authorIdToName = toNodes(data.authors).reduce(
    (hashMap, { id, name }) => ({ ...hashMap, [id]: name }),
    {},
  );
  const posts = toNodes(data.posts).map(node => {
    const { excerpt, fileAbsolutePath, frontmatter } = node;

    return {
      excerpt,
      author: authorIdToName[frontmatter.author],
      date: frontmatter.date,
      id: frontmatter.path,
      path: frontmatter.path,
      title: node.frontmatter.title,
    };
  });

  return { posts };
}

export default mapProps(mapPropsToProps)(BlogIndex);

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
          excerpt
          fileAbsolutePath
          frontmatter {
            author
            date
            path
            title
          }
        }
      }
    }
  }
`;
