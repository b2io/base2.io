import { graphql } from 'gatsby';
import grayMatter from 'gray-matter';
import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import remark from 'remark';
import styled, { ThemeProvider } from 'styled-components';
import remarkReact from 'remark-react';
import { mediaQuery } from '../util/style';
import {
  A,
  Blockquote,
  BlogHeader,
  Code,
  Del,
  EM,
  GlobalNavigation,
  H1,
  H5,
  HR,
  LI,
  Main,
  OL,
  P,
  Pre,
  Section,
  Strong,
  UL,
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

const PostText = styled(P)`
  margin: 0 0 ${em('21px', '21px')};
`;

const PostContentH2 = styled.h2`
  font-size: ${rem('30px')};
  margin: ${em('36px', '34px')} 0 ${em('18px', '30px')};

  ${mediaQuery.small`
    font-size: ${rem('34px')};
    margin: ${em('42px', '34px')} 0 ${em('21px', '34px')};
  `};
`;

const PostContentH3 = styled.h3`
  font-size: ${rem('20px')};
  margin: ${em('30px', '20px')} 0 ${em('14px', '20px')};

  ${mediaQuery.small`
    font-size: ${rem('24px')};
    margin: ${em('36px', '24px')} 0 ${em('16px', '24px')};
  `};
`;

const PostContentH4 = styled.h4`
  font-size: ${rem('34px')};
  margin: ${em('36px', '34px')} 0 0;

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    margin: ${em('30px', '21px')} 0 ${em('16px', '21px')};
  `};
`;

const PostImg = styled.img`
  margin: ${em('18px', '18px')} 0;

  ${mediaQuery.small`
    margin: ${em('21px', '21px')} 0;
  `};
`;

const HoistChildren = props =>
  React.Children.map(props.children, child => child.props.children);

const markdownToElement = md =>
  remark()
    .use(remarkReact, {
      remarkReactComponents: {
        a: A,
        blockquote: Blockquote,
        code: Code,
        del: Del,
        em: EM,
        h1: H1,
        h2: PostContentH2,
        h3: PostContentH3,
        h4: PostContentH4,
        h5: H5,
        hr: HR,
        img: PostImg,
        li: LI,
        ol: OL,
        p: PostText,
        pre: Pre,
        strong: Strong,
        ul: UL,
      },
    })
    .processSync(md).contents;

// TODO: Add `content` prop to GraphQL remark nodes via plugin.
const markdown = raw => (
  <HoistChildren>{markdownToElement(grayMatter(raw).content)}</HoistChildren>
);

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
