import React from 'react';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();
const renderMarkdown = raw => ({ __html: md.render(raw) });

const Markdown = ({ children }) => (
  <div dangerouslySetInnerHTML={renderMarkdown(children)} />
);

export default Markdown;
