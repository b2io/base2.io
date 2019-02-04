import PropTypes from 'prop-types';
import React from 'react';
import { rem } from 'polished';
import styled from 'styled-components';
import { H2, Link, LI, P, Time } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const PostListItem = styled(LI)`
  display: flex;
  margin-bottom: 50px;
`;

const PostListImage = styled.div`
  background-color: ${themed('color.black')};
  display: none;
  margin-right: 30px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  ${mediaQuery.medium`
    display: block;
    width: 275px;
    height: 235px;
  `};
`;

const PostListContent = styled.article`
  flex: 3;
`;

const PostListHeader = styled.header`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 0 16px;

  ${mediaQuery.small`
    flex-direction:column;
    margin: 0 0 34px;
  `};
`;

const PostTitle = styled(H2)`
  font-size: ${rem('32px')};
  font-weight: 600;
  line-height: 1.1;
  margin: 0;

  ${mediaQuery.small`
    font-size: ${rem('34px')};
    display: block;
  `};

  ${mediaQuery.medium`
    font-size: ${rem('48px')};
  `};
`;

const PostMeta = styled(P)`
  color: ${themed('color.grey')};
  display: flex;
  flex-direction: column-reverse;
  font-size: ${rem('16px')};
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  text-transform: uppercase;

  ${mediaQuery.small`
    display: block;
    flex-direction: row;
    font-size: ${rem('18px')};
    margin: 0 0 21px;
  `};
`;

const PostAuthor = styled.span`
  ${mediaQuery.small`
    :before {
      content: ' - ';
    }
  `};
`;

const Excerpt = styled(P)`
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
`;

function PostExcerpt({
  author,
  date,
  featureImg,
  imgAlt,
  excerpt,
  path,
  title,
}) {
  return (
    <PostListItem>
      <PostListImage>
        <img
          src={featureImg || '/img/transmission-constellation.png'}
          alt={imgAlt || ''}
        />
      </PostListImage>
      <PostListContent>
        <PostListHeader>
          <PostMeta>
            <Time iso={date} />{' '}
            <PostAuthor>{author && `POSTED BY ${author}`}</PostAuthor>
          </PostMeta>
          <PostTitle>
            <Link to={path}>{title}</Link>
          </PostTitle>
        </PostListHeader>
        <Excerpt>{excerpt}</Excerpt>
      </PostListContent>
    </PostListItem>
  );
}

PostExcerpt.defaultProps = {
  author: '',
  featureImg: '',
  imgAlt: '',
};

PostExcerpt.propTypes = {
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,

  author: PropTypes.string,
  featureImg: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default PostExcerpt;
