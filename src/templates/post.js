import { DateTime } from 'luxon';
import React from 'react';
import remark from 'remark';
import remarkReact from 'remark-react';
import styled from 'styled-components';
import { Header, H1, Main, P, Section } from '../components';
import { hugeDate } from '../util/datetime';

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

    // TODO: Resolve the author details from a query.
    return (
      <Main>
        <Header>
          <H1>{data.title}</H1>
          <P lead>
            {hugeDate(data.date)} — {data.author}
          </P>
        </Header>
        <Section>{markdown(content)}</Section>
      </Main>
    );
  }
}

export default PostTemplate;
