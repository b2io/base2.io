import Helmet from 'react-helmet';
import React, { Component } from 'react';
import markdown from '../util/markdown';

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
        <h1>{data.title}</h1>
        {markdown([content])}
      </main>
    );
  }
}

export default Post;
