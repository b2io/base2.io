import React from 'react';
import { mapProps } from 'recompose';
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
    const { author, children, date, title } = this.props;

    return (
      <Main>
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

function mapPathContextToProps({ pathContext }) {
  return {
    author: pathContext.data.author,
    children: markdown(pathContext.content),
    date: pathContext.data.date,
    title: pathContext.data.title,
  };
}

export default mapProps(mapPathContextToProps)(PostTemplate);
