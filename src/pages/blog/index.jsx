import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled from 'styled-components';
import {
  BlogHeader,
  GlobalNavigation,
  Main,
  PostExcerpt,
  UL,
} from '../../components';
import { toNodes } from '../../util/graphql';

const PostList = styled(UL)`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

function BlogIndex({ posts }) {
  return (
    <Main>
      <GlobalNavigation />
      <BlogHeader
        blogList
        img="/img/transmission-constellation.png"
        imgAlt="Satellite transmitting messages"
        title="Transmissions"
        tagline="Lorem Ipsum Spacey Blog Stuff"
      />
      <PostList>
        {posts.map(post => <PostExcerpt {...post} key={post.id} />)}
      </PostList>
    </Main>
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
          excerpt(pruneLength: 200)
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
