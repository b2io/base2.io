import React from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import { H1, P } from '../components';

const HoistChildren = props =>
  React.Children.map(props.children, child => child.props.children);

const markdownToElement = md =>
  remark()
    .use(remarkReact, {
      remarkReactComponents: {
        // TODO: Research and replace the other HAST element types from `remark`.
        p: P,
      },
    })
    .processSync(md).contents;

const markdown = raw => <HoistChildren>{markdownToElement(raw)}</HoistChildren>;

class PostTemplate extends React.Component {
  render() {
    const { content, data, id } = this.props.pathContext;

    return (
      <main>
        <H1>{data.title}</H1>
        {markdown(content)}
      </main>
    );
  }
}

export default PostTemplate;
