import React from 'react';
import MarkdownIt from 'markdown-it';
import PropTypes from 'prop-types';

const md = new MarkdownIt();
const renderMarkdown = raw => ({ __html: md.render(raw) });

const Markdown = ({ children }) => <div dangerouslySetInnerHTML={renderMarkdown(children)} />;

Markdown.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Markdown;
