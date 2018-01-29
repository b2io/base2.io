import grayMatter from 'gray-matter';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import remark from 'remark';
import styled from 'styled-components';
import remarkReact from 'remark-react';
import { themed } from '../util/style';
import {
  GlobalNavigation,
  Header,
  H1,
  H2,
  H3,
  H4,
  H5,
  Img,
  Main,
  P,
  Section,
  Time,
} from '../components';
import { toNodes } from '../util/graphql';

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

  pre {
    background: ${themed('color.overlay')};
    border: 1px solid ${themed('color.border')};
    overflow-x: scroll;
    padding: 10px;
  }

  hr {
    color: ${themed('color.border')};
  }
`;

const HoistChildren = props =>
  React.Children.map(props.children, child => child.props.children);

const markdownToElement = md =>
  remark()
    .use(remarkReact, {
      remarkReactComponents: {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        img: Img,
        p: P,
      },
    })
    .processSync(md).contents;

// TODO: Add `content` prop to GraphQL remark nodes via plugin.
const markdown = raw => (
  <HoistChildren>{markdownToElement(grayMatter(raw).content)}</HoistChildren>
);

class PostTemplate extends React.Component {
  static defaultProps = {};

  static propTypes = {
    author: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { author, children, date, title } = this.props;

    return (
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
    );
  }
}

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
