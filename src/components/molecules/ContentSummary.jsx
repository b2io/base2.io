import PropTypes from 'prop-types';
import React from 'react';
import { em, rem } from 'polished';
import styled from 'styled-components';
import { H2, Img, Link, LI, P } from '../atoms';
import { mediaQuery, themed } from '../../util/style';

const Item = styled(LI)`
  display: flex;
  margin-bottom: ${rem('58px')};

  ${mediaQuery.small`
    margin-bottom: ${rem('50px')};
  `};
`;

const ImageWrapper = styled.div`
  background-color: ${themed('color.black')};
  display: none;
  margin-right: ${rem('32px')};

  ${mediaQuery.medium`
    display: block;
    position: relative;
    width: 352px;
    height: 235px;
  `};
`;

const Image = styled(Img)`
  display: block;
  max-width: 100%;
  max-height: 100%;
  height: auto;
  width: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Content = styled.article`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column-reverse;
  line-height: 1;
  margin: 0 0 ${rem('21px')};

  ${mediaQuery.small`
    flex-direction: column;
  `};

  ${mediaQuery.medium`
    margin: 0 0 ${rem('30px')};
  `};
`;

const Title = styled(H2)`
  font-size: ${rem('32px')};
  font-weight: 600;
  line-height: 1.1;
  margin: 0 0 ${em('16px', '32px')};

  ${mediaQuery.small`
    font-size: ${rem('34px')};
    display: block;
    margin: 0;
  `};

  ${mediaQuery.medium`
    font-size: ${rem('48px')};
  `};
`;

const Metadata = styled(P)`
  color: ${themed('color.grey')};
  display: flex;
  flex-direction: column-reverse;
  font-size: ${rem('16px')};
  font-weight: 600;
  line-height: 1.25;
  margin: 0;
  text-transform: uppercase;

  ${mediaQuery.small`
    flex-direction: row;
    line-height: 1;
    margin: 0 0 ${em('12px', '16px')};
  `};

  ${mediaQuery.medium`
    display: block;
    font-size: ${rem('18px')};
    margin: 0 0 ${em('18px', '18px')};
  `};
`;

const Summary = styled(P)`
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
`;

function ContentSummary({
  children,
  img,
  imgAlt,
  imgPath,
  path,
  summary,
  title,
}) {
  return (
    <Item>
      <ImageWrapper>
        <Image src={imgPath} {...img} alt={imgAlt} />
      </ImageWrapper>
      <Content>
        <Header>
          {children && <Metadata>{children}</Metadata>}
          <Title>
            <Link to={path}>{title}</Link>
          </Title>
        </Header>
        <Summary>{summary}</Summary>
        <Link to={path}>Read more</Link>
      </Content>
    </Item>
  );
}

ContentSummary.defaultProps = {
  children: null,
  img: null,
  imgAlt: '',
  imgPath: '/img/transmission-constellation-reverse.png',
};

ContentSummary.propTypes = {
  children: PropTypes.node,
  imgAlt: PropTypes.string,
  img: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  imgPath: PropTypes.string,
  path: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ContentSummary;
