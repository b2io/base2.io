import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { em, rem } from 'polished';
import { H3, Img, P, LI, TwoToneHeading } from '../atoms';
import { containerSizing, mediaQuery, themed } from '../../util/style';

const ServiceList = styled.ul`
  align-items: center;
  background: url('img/backgrounds/star-field.png');
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  padding-top: ${themed('navHeight.value')};
  position: relative;
  text-align: center;
`;

const Wrapper = styled(LI)`
  ${containerSizing};
  background: url('img/backgrounds/space-fog-purple.png') bottom center / auto
    100% no-repeat;
  padding-bottom: ${em('135px')};
  max-width: ${rem('1300px')};
  position: relative;
  width: 100%;
  z-index: ${themed('zindex.content')};

  ${mediaQuery.small`
    align-items: center;
    background-position: center center;
    background-size: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${em('140px')};
    padding-bottom: ${em('135px')};

    &:nth-of-type(even) {
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

const ServiceSubheading = styled(H3)`
  margin: 0;
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
            <TwoToneHeading>
              <span>We</span> {heading}
            </TwoToneHeading>
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
