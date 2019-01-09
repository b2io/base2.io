import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { H2, Link, LI, P, Time } from '../atoms';
import { themed } from '../../util/style';

const PostListItem = styled(LI)`
  border-bottom: 1px solid ${themed('color.border')};
`;

const PostTitle = styled(H2)`
  font-weight: 400;
  margin: 0.5em 0 0;
`;

const PostMeta = styled(P)`
  font-size: 0.85em;
  font-style: italic;
`;

const Excerpt = styled(P)`
  font-weight: 400;
`;

function PostExcerpt({ author, date, excerpt, path, title }) {
  return (
    <PostListItem>
      <PostTitle>
        <Link to={path}>{title}</Link>
      </PostTitle>
      <PostMeta>
        <Time iso={date} /> {author && ` - ${author}`}
      </PostMeta>
      <Excerpt>{excerpt}</Excerpt>
    </PostListItem>
  );
}

PostExcerpt.defaultProps = { author: '' };

PostExcerpt.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  author: PropTypes.string,
};

export default PostExcerpt;
