import { graphql } from 'gatsby';
import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import markdown from '../util/templates';
import { mediaQuery } from '../util/style';
import {
  BlogHeader,
  GlobalNavigation,
  Main,
  Section,
} from '../components';
import { toNodes } from '../util/graphql';
import { lightTheme } from '../theme';

const PostContent = styled(Section)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  max-width: 720px;
  margin: 0 auto;
  padding-top: ${em('36px', '18px')};

  img {
    max-width: 100%;
  }

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    padding: ${em('75px', '21px')} 0 0;
  `};
`;

function PostTemplate({ author, children, date, title }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <GlobalNavigation />
        <BlogHeader
          author={author}
          img="/img/transmission-constellation.png"
          imgAlt="Satellite broadcasting into space"
          date={date}
          title={title}
        />
        <PostContent>{children}</PostContent>
      </Main>
    </ThemeProvider>
  );
}

PostTemplate.defaultProps = { author: '' };

PostTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  author: PropTypes.string,
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
