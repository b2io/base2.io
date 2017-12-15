import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import {
  GlobalNavigation,
  Header,
  H1,
  Main,
  PostExcerpt,
  Section,
  UL,
} from '../../components';
import { toNodes } from '../../util/graphql';

class BlogIndex extends React.Component {
  static defaultProps = {};

  static propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { posts } = this.props;

    return (
      <Main>
        <GlobalNavigation />
        <Header>
          <H1>Blog</H1>
        </Header>
        <Section>
          <UL>{posts.map(post => <PostExcerpt {...post} key={post.id} />)}</UL>
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
