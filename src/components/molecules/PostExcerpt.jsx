import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { H2, Link, LI, P, Time } from '../atoms';

const PostListItem = styled(LI)`
  border-bottom: 1px solid #eee;
`;

const PostTitle = styled(H2)`
  font-weight: 400;
`;

const Excerpt = styled(P)`
  font-weight: normal;
`;

class PostExcerpt extends React.Component {
  static defaultProps = {};

  static propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    const { author, date, excerpt, path, title } = this.props;

    return (
      <PostListItem>
        <PostTitle>
          <Link to={path}>{title}</Link>
        </PostTitle>
        <P>
          <Time iso={date} />— {author}
        </P>
        <Excerpt>{excerpt}</Excerpt>
      </PostListItem>
    );
  }
}

export default PostExcerpt;
