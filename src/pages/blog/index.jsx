import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import { em, rem } from 'polished';
import styled, { ThemeProvider } from 'styled-components';
import {
  GlobalNavigation,
  Main,
  PageHeader,
  PostExcerpt,
  UL,
} from '../../components';
import { lightTheme } from '../../theme';
import { toNodes } from '../../util/graphql';
import { mediaQuery } from '../../util/style';

const PostList = styled(UL)`
  list-style-type: none;
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  max-width: 1300px;
  margin: 0 auto;
  padding: ${em('36px', '18px')} ${em('36px', '18px')} 0;

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    line-height: 1.5;
    padding: ${em('75px', '21px')} ${em('42px', '21px')} 0;
  `};
`;

function BlogIndex({ posts }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <GlobalNavigation />
        <PageHeader
          large
          imgAlt="Satellite broadcasting into space"
          title="Transmissions"
          tagline="Sending our knowledge and ideas into the universe"
        />
        <PostList>
          {posts.map(post => (
            <PostExcerpt {...post} key={post.id} />
          ))}
        </PostList>
      </Main>
    </ThemeProvider>
  );
}

BlogIndex.defaultProps = {};

BlogIndex.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

function mapPropsToProps({ data }) {
  // TODO: Find a way to resolve the author name more easily.
  const authorIdToName = toNodes(data.authors).reduce(
    (hashMap, { id, name }) => ({ ...hashMap, [id]: name }),
    {},
  );
  const posts = toNodes(data.posts).map(node => {
    const { excerpt, frontmatter } = node;

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

BlogIndex.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

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
      filter: {
        fileAbsolutePath: { regex: "/_content/posts/" }
        frontmatter: { path: { ne: null } }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
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
