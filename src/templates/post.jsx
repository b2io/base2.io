import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import markdown from '../util/templates';
import {
  GlobalNavigation,
  Header,
  H2,
  Main,
  P,
  Section,
  Time,
} from '../components';
import { toNodes } from '../util/graphql';
import { lightTheme } from '../theme';

const PostHeader = styled(Header)`
  margin-top: 4em;
`;

const PostTitle = styled(H2)`
  font-weight: 400;
  margin-top: 0;
`;

const PostMeta = styled(P)`
  font-size: 0.85em;
  font-style: italic;
`;

const PostContent = styled(Section)`
  font-weight: 400;

  img {
    max-width: 100%;
  }
`;

function PostTemplate({ author, children, date, title }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <GlobalNavigation />
        <PostHeader>
          <PostTitle>{title}</PostTitle>
          <PostMeta>
            <Time iso={date} /> — {author}
          </PostMeta>
        </PostHeader>
        <PostContent>{children}</PostContent>
      </Main>
    </ThemeProvider>
  );
}

PostTemplate.propTypes = {
  author: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function mapPropsToProps({ data }) {
  // TODO: Find a way to resolve the author name more easily.
  const authorIdToName = toNodes(data.authors).reduce(
    (hashMap, { id, name }) => ({ ...hashMap, [id]: name }),
    {},
  );

  return {
    author: authorIdToName[data.post.frontmatter.author],
    children: markdown(data.post.internal.content),
    date: data.post.frontmatter.date,
    title: data.post.frontmatter.title,
  };
}

export default mapProps(mapPropsToProps)(PostTemplate);

export const pageQuery = graphql`
  query PostTemplateQuery($id: String!) {
    authors: allTeamJson {
      edges {
        node {
          id
          name
        }
      }
    }
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        author
        date
        title
      }
      internal {
        content
      }
    }
  }
`;
