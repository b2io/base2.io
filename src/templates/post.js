import React from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import styled from 'styled-components';
import {
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

const markdown = raw => <HoistChildren>{markdownToElement(raw)}</HoistChildren>;

class PostTemplate extends React.Component {
  render() {
    const { content, data, id } = this.props.pathContext;

    // TODO: Resolve the author details from a query.
    return (
      <Main>
        <Header>
          <H1>{data.title}</H1>
          <P lead>
            <Time iso={data.date} /> — {data.author}
          </P>
        </Header>
        <Section>{markdown(content)}</Section>
      </Main>
    );
  }
}

export default PostTemplate;
