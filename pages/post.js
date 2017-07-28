import Helmet from 'react-helmet';
import React, { Component } from 'react';
import styled from 'styled-components';
import Markdown from '../components/Markdown';

const Article = styled.article`
  border: 5px solid black;
  padding: 4em;

  ul {
    background-color: red;
    color: white;
  }
`

class Post extends Component {
  static getInitialProps({ query }) {
    return { content: query.content, data: query.data, id: query.id };
  }

  render() {
    const { content, data, id } = this.props;

    return (
      <main>
        <Helmet>
          <title>{data.title}</title>
        </Helmet>
        <Article>
          <h1>{data.title}</h1>
          <Markdown>{content}</Markdown>
        </Article>
      </main>
    );
  }
}

export default Post;
