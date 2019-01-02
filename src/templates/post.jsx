import grayMatter from 'gray-matter';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import remark from 'remark';
import styled from 'styled-components';
import remarkReact from 'remark-react';
import { mediaQuery } from '../util/style';
import {
  A,
  Blockquote,
  Code,
  Del,
  EM,
  GlobalNavigation,
  Header,
  H1,
  H2,
  H3,
  H4,
  H5,
  HR,
  Img,
  LI,
  Main,
  P,
  Pre,
  OL,
  Section,
  Strong,
  Time,
  UL,
} from '../components';
import { toNodes } from '../util/graphql';

const PostByline = styled.span`
  font-size: 24px;

  ${mediaQuery.xsmall`
  font-size: 18px;
`};
`;

const PostHeader = styled(Header)`
  background-color: #000;
  background-image: url('/img/backgrounds/star-field.png');
  display: flex;
  align-items: center;
  height: 530px;
  margin-top: 3em;

  ${mediaQuery.xsmall`
    align-items: flex-start;
    height: auto;
    padding-bottom: 28px;
    padding-top: 28px;
  `};
`;

const PostHeaderInfo = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const PostImage = styled(Img)`
  display: none;
  flex: 1;
  margin: 0 auto;
  max-width: 80%;

  ${mediaQuery.small`
    display: block;
  `};
`;

const PostTime = styled.span`
  font-size: 18px;
  text-transform: uppercase;

  ${mediaQuery.xsmall`
    font-size: 16px;
  `};
`;

const PostTitle = styled(H2)`
  color: #fff;
  font-weight: 400;
  font-size: 36px;
  line-height: 1.1;
  margin-bottom: 30px;
  margin-top: 0;

  ${mediaQuery.small`
    font-size: 52px;
    margin-bottom: 32px;
  `};

  ${mediaQuery.medium`
    font-size: 72px;
    margin-bottom: 56px;
  `};
`;

const PostMeta = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-weight: 400;
  line-height: 1.5;
`;

const PostContent = styled(Section)`
  font-weight: 400;

  img {
    max-width: 100%;
  }
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
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        hr: HR,
        // img: Img,
        li: LI,
        ol: OL,
        p: P,
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
    <Main>
      <GlobalNavigation />
      <PostHeader>
        <PostHeaderInfo>
          <PostTitle>{title}</PostTitle>
          <PostMeta>
            <PostByline>Posted by {author}</PostByline>
            <PostTime>
              <Time iso={date} />
            </PostTime>
          </PostMeta>
        </PostHeaderInfo>
        <PostImage src="/img/monitor-constellation.png" alt="" />
      </PostHeader>
      <PostContent>{children}</PostContent>
    </Main>
  );
}

PostTemplate.defaultProps = {};

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
