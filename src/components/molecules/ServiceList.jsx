import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { H2, H3, Img, P, LI } from '../atoms';
import { containerSizing, mediaQuery, themed } from '../../util/style';

const Wrapper = styled(LI)`
  margin: 1em;
  margin-bottom: ${em('275px')};

  ${mediaQuery.medium`
    display: flex;

    > * {
      flex: 1;
    }

    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
  `};
`;

const ServiceList = styled.ul`
  ${containerSizing};
  list-style: none;
  margin: 3em 0;
  text-align: center;
`;

const ServiceText = styled.div`
  text-align: left;
`;

const ServiceImg = styled(Img)`
  height: auto;
  margin-bottom: ${em('10px')};
  width: 80vw;

  ${mediaQuery.small`
    max-width: 30vw;
  `};
`;

const ServiceHeader = styled.header`
  margin-bottom: ${em('45px')};
`;

const ServiceHeading = styled(H2)`
  color: ${themed('color.textAccent')};
  font-size: ${em('42px')};
  font-style: italic;
  margin: 0;

  span {
    color: ${themed('color.text')};
  }

  ${mediaQuery.medium`
    font-size: ${em('48px')};
  `};

  ${mediaQuery.large`
    font-size: ${em('72px')};
  `};
`;

const ServiceSubheading = styled(H3)`
  font-size: ${em('20px')};
  font-weight: 100;
  margin: 0;

  ${mediaQuery.medium`
    font-size: ${em('24px')};
  `};

  ${mediaQuery.large`
    font-size: ${em('36px')};
  `};
`;

const ServiceDescription = styled(P)`
  font-size: ${em('32px')};
  margin: 0;
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
