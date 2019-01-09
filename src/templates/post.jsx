import grayMatter from 'gray-matter';
import { em } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import remark from 'remark';
import styled from 'styled-components';
import remarkReact from 'remark-react';
import { mediaQuery, themed } from '../util/style';
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
  font-size: ${em('18px')};

  ${mediaQuery.smedium`
    font-size: ${em('24px')};
  `};
`;

const PostHeader = styled(Header)`
  align-items: center;
  background-color: ${themed('color.black')};
  background-image: url('/img/backgrounds/space-fog-purple.png'),
    url('/img/backgrounds/star-field.png');
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  height: auto;
  margin-top: ${em('48px')};
  padding-bottom: ${em('28px')};
  padding-top: ${em('28px')};

  ${mediaQuery.medium`
    min-height: 530px;
  `};
`;

const PostHeaderInfo = styled.div`
  flex: 1;

  ${mediaQuery.large`
  flex: 3;
`};
`;

const PostHeaderImage = styled.div`
  display: none;
  flex: 1;

  img {
    max-width: 80%;
  }

  ${mediaQuery.smedium`
    display: block;
    text-align:right;
  `};

  ${mediaQuery.large`
    flex: 2;
  `};
`;

const PostTime = styled.span`
  text-transform: uppercase;

  ${mediaQuery.medium`
    font-size: ${em('18px')};
  `};
`;

const PostTitle = styled(H2)`
  color: ${themed('color.white')};
  font-size: ${em('36px')};
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: ${em('30px', '36px')};
  margin-top: 0;

  ${mediaQuery.small`
    font-size: ${em('52px')};
    margin-bottom: ${em('32px', '52px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('72px')};
    margin-bottom: ${em('32px', '72px')};
  `};
`;

const PostMeta = styled.div`
  color: ${themed('color.white')};
  display: flex;
  flex-direction: column;
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
        img: Img,
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
            {author && <PostByline>Posted by {author}</PostByline>}
            <PostTime>
              <Time iso={date} />
            </PostTime>
          </PostMeta>
        </PostHeaderInfo>
        <PostHeaderImage>
          <img src="/img/monitor-constellation.png" alt="" />
        </PostHeaderImage>
      </PostHeader>
      <PostContent>{children}</PostContent>
    </Main>
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
