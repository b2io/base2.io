import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { H2, H3, Img, P, LI } from '../atoms';
import { containerSizing, mediaQuery, themed } from '../../util/style';

const fadeOut = {
  value: `${em('150px')}`,
};

const ServiceList = styled.ul`
  align-items: center;
  background: url('img/backgrounds/star-field.png');
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 3em 0 ${fadeOut.value} 0;
  position: relative;
  text-align: center;

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    bottom: 0;
    content: '';
    display: block;
    height: ${fadeOut.value};
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 0;
  }
`;

const Wrapper = styled(LI)`
  ${containerSizing};
  background: url('img/backgrounds/space-fog-purple.png') right bottom / contain
    no-repeat;
  margin-bottom: ${em('135px')};
  max-width: ${em('1550px')};
  position: relative;
  z-index: 1;

  ${mediaQuery.small`
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${em('275px')};

    &:nth-of-type(even) {
      background-position: left bottom;
      flex-direction: row-reverse;
    }
  `};
`;

const ServiceText = styled.div`
  text-align: center;

  ${mediaQuery.small`
    flex: 1 0 0;
    text-align: left;
    max-width: ${em('625px')};
  `};
`;

const ServiceImg = styled(Img)`
  height: auto;
  margin-bottom: ${em('10px')};
  width: 80vw;

  ${mediaQuery.small`
    flex: 1;
    margin: 0 ${em('20px')};
    max-width: 30vw;
  `};
`;

const ServiceHeader = styled.header`
  margin-bottom: ${em('15px')};

  ${mediaQuery.small`
    margin-bottom: ${em('45px')};
  `};
`;

const ServiceHeading = styled(H2)`
  color: ${themed('color.textAccent')};
  font-size: ${em('42px')};
  font-style: italic;
  margin: 0;

  span {
    color: ${themed('color.text')};
  }

  ${mediaQuery.small`
    font-size: ${em('48px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('72px')};
  `};
`;

const ServiceSubheading = styled(H3)`
  font-size: ${em('20px')};
  font-weight: 100;
  margin: 0;

  ${mediaQuery.small`
    font-size: ${em('24px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('36px')};
  `};
`;

const ServiceDescription = styled(P)`
  font-size: ${em('18px')};
  margin: 0;

  ${mediaQuery.small`
    font-size: ${em('20px')};
  `};

  ${mediaQuery.medium`
    font-size: ${em('28px')};
  `};
`;

class ServiceListItem extends React.Component {
  static defaultProps = {};

  static propTypes = {
    image: PropTypes.shape({}).isRequired,
    imgAlt: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  render() {
    const { image, imgAlt, heading, subheading, description } = this.props;

    return (
      <Wrapper>
        <ServiceImg {...image} alt={imgAlt} />
        <ServiceText>
          <ServiceHeader>
            <ServiceHeading>
              <span>We</span> {heading}
            </ServiceHeading>
            <ServiceSubheading>{subheading}</ServiceSubheading>
          </ServiceHeader>
          <ServiceDescription>{description}</ServiceDescription>
        </ServiceText>
      </Wrapper>
    );
  }
}

ServiceList.Item = ServiceListItem;

export default ServiceList;
