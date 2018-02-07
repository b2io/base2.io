import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Header, H2, H3, Img, P } from '../atoms';
import { themed } from '../../util/style';

const ServiceList = styled.ul`
  list-style: none;
  margin: 3em 0;
  padding: 0;
  text-align: center;
`;

const Wrapper = styled.li`
  display: inline-block;
  margin: 1em;
`;

const ServiceImg = styled(Img)`
  height: auto;
  width: 260px;
`;

const ServiceHeading = styled(H2)`
  font-style: italic;

  em {
    color: ${themed('color.accent')};
  }
`;

const ServiceSubheading = styled(H3)`
  margin: 0;
`;

const ServiceDescription = styled(P)`
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
        <div>
          <Header>
            <ServiceHeading>{heading}</ServiceHeading>
            <ServiceSubheading>{subheading}</ServiceSubheading>
          </Header>
          <ServiceDescription>{description}</ServiceDescription>
        </div>
        <ServiceImg {...image} alt={imgAlt} />
      </Wrapper>
    );
  }
}

ServiceList.Item = ServiceListItem;

export default ServiceList;
