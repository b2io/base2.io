import PropTypes from 'prop-types';
import React from 'react';
import { H2, Link, LI, P, Time } from '../atoms';

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
      <LI>
        <H2>
          <Link to={path}>{title}</Link>
        </H2>
        <P>
          <Time iso={date} />— {author}
        </P>
        <P>{excerpt}</P>
      </LI>
    );
  }
}

export default PostExcerpt;
