import grayMatter from 'gray-matter';
import React from 'react';
import { mapProps } from 'recompose';
import remark from 'remark';
import remarkReact from 'remark-react';
import styled from 'styled-components';
import {
  GlobalNavigation,
  Header,
  H1,
  H2,
  H3,
  H4,
  H5,
  Main,
  P,
  Section,
  Time,
} from '../components';

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
        p: P,
      },
    })
    .processSync(md).contents;

// TODO: Add `content` prop to GraphQL remark nodes via plugin.
const markdown = raw => (
  <HoistChildren>{markdownToElement(grayMatter(raw).content)}</HoistChildren>
);

class PostTemplate extends React.Component {
  render() {
    const { author, children, date, title } = this.props;

    return (
      <Main>
        <GlobalNavigation />
        <Header>
          <H1>{title}</H1>
          <P lead>
            <Time iso={date} /> — {author}
          </P>
        </Header>
        <Section>{children}</Section>
      </Main>
    );
  }
}

function mapPropsToProps({ data }) {
  // TODO: Find a way to resolve the author name more easily.
  const authorIdToName = data.authors.edges
    .map(e => e.node)
    .reduce((hashMap, { id, name }) => ({ ...hashMap, [id]: name }), {});

  return {
    author: data.post.frontmatter.author,
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
