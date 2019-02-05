import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { mediaQuery, themed } from '../../util/style';
import { Header, Time } from '../../components';

const BlogHeaderWrapper = styled(Header)`
  align-items: center;
  background-color: ${themed('color.black')};
  background-image: url('/img/backgrounds/space-fog-purple.png'),
    url('/img/backgrounds/star-field.png');
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  height: auto;
  margin-top: ${em('48px')};
  padding-bottom: ${em('28px')};
  padding-top: ${em('28px')};

  &.center {
    text-align: center;
  }

  ${mediaQuery.medium`
    min-height: 530px;

    &.center {
      text-align: left;
    }
  `};
`;

const BlogHeaderInfo = styled.div`
  flex: 1;

  ${mediaQuery.large`
    flex: 3;
  `};
`;

const BlogHeaderImage = styled.div`
  display: none;
  flex: 1;

  img {
    max-width: 80%;
  }

  ${mediaQuery.smedium`
    display: block;
    text-align:right;
  `};

  ${mediaQuery.large`
    flex: 2;
  `};
`;

const BlogTitle = styled.h1`
  color: ${themed('color.white')};
  font-size: ${rem('36px')};
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: ${em('30px', '36px')};
  margin-top: 0;

  ${mediaQuery.xsmall`
    &.largeTitle {
      font-size: ${rem('48px')};
      margin-bottom:${em('14px', '48px')};
    }
  `};

  ${mediaQuery.small`
    font-size: ${rem('52px')};
    margin-bottom: ${em('32px', '52px')};

    &.largeTitle {
      margin-bottom:${em('18px', '52px')};
    }
  `};

  ${mediaQuery.medium`
    font-size: ${rem('72px')};
    margin-bottom: ${em('32px', '72px')};
  `};
`;

const BlogTagline = styled.span`
  font-size: ${rem('24px')};
  font-style: italic;
  font-weight: 100;

  ${mediaQuery.medium`
    font-size: ${rem('36px')};
  `};
`;

const PostMeta = styled.div`
  color: ${themed('color.white')};
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

const PostByline = styled.span`
  font-size: ${rem('18px')};

  ${mediaQuery.smedium`
    font-size: ${rem('24px')};
  `};
`;

const PostTime = styled.span`
  text-transform: uppercase;

  ${mediaQuery.medium`
    font-size: ${rem('18px')};
  `};
`;

function BlogHeader({ author, blogList, date, img, imgAlt, title, tagline }) {
  return (
    <BlogHeaderWrapper className={blogList ? 'center' : ''}>
      <BlogHeaderInfo>
        <BlogTitle className={blogList ? 'largeTitle' : ''}>{title}</BlogTitle>
        <PostMeta>
          {tagline && <BlogTagline>{tagline}</BlogTagline>}
          {author && <PostByline>Posted by {author}</PostByline>}
          {date && (
            <PostTime>
              <Time iso={date} />
            </PostTime>
          )}
        </PostMeta>
      </BlogHeaderInfo>
      <BlogHeaderImage>
        <img src={img} alt={imgAlt} />
      </BlogHeaderImage>
    </BlogHeaderWrapper>
  );
}

BlogHeader.defaultProps = {
  author: '',
  blogList: false,
  date: '',
  imgAlt: '',
  tagline: '',
};

BlogHeader.propTypes = {
  author: PropTypes.string,
  blogList: PropTypes.bool,
  date: PropTypes.string,
  imgAlt: PropTypes.string,
  tagline: PropTypes.string,

  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default BlogHeader;
