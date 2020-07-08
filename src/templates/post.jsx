import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';

import { BlogHeader, GlobalNavigation, Main, Section } from '../components';
import { SeoComponent } from '../components/SeoComponent';
import { lightTheme } from '../theme';
import { toNodes } from '../util/graphql';
import { mediaQuery } from '../util/style';
import { defaultComponentMap } from '../util/templates';

const YouTubeWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YouTube = ({ title, url }) => (
  <YouTubeWrapper>
    <YoutubeFrame
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      frameBorder="0"
      src={url}
      title={title}
    />
  </YouTubeWrapper>
);

YouTube.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

const PostContent = styled(Section)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  max-width: 920px;
  margin: 0 auto;
  padding-top: ${em('36px', '18px')};

  img {
    max-width: 100%;
  }

  ${mediaQuery.small`
    font-size: ${rem('21px')};
  `};
`;

function PostTemplate({ author, body, cardImage, date, title }) {
  // const seoImage = 'ogimage.publicURL';
  const cardImg = cardImage || '/img/transmission-constellation.png';

  return (
    <MDXProvider components={defaultComponentMap}>
      <ThemeProvider theme={lightTheme}>
        <SeoComponent description={title} image={cardImg} title={title} />
        <Main>
          <GlobalNavigation />
          <BlogHeader
            author={author}
            date={date}
            img="/img/transmission-constellation.png"
            imgAlt="Satellite broadcasting into space"
            title={title}
          />

          <PostContent>
            <MDXRenderer>{body}</MDXRenderer>
          </PostContent>
        </Main>
      </ThemeProvider>
    </MDXProvider>
  );
}

PostTemplate.defaultProps = { author: '', cardImage: '' };

PostTemplate.propTypes = {
  body: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  cardImage: PropTypes.string,
};

function mapPropsToProps({ data }) {
  // TODO: Find a way to resolve the author name more easily.
  const authorIdToName = toNodes(data.authors).reduce(
    (hashMap, { id, name }) => ({ ...hashMap, [id]: name }),
    {},
  );

  return {
    author: authorIdToName[data.post.frontmatter.author],
    body: data.post.body,
    date: data.post.frontmatter.date,
    title: data.post.frontmatter.title,
    cardImage: data.post.frontmatter.cardImage,
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
    post: mdx(id: { eq: $id }) {
      frontmatter {
        author
        date
        cardImage
        title
      }
      body
      internal {
        content
      }
    }
  }
`;
