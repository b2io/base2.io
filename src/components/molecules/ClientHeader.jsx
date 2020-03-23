import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em } from 'polished';

import { mediaQuery, themed } from '../../util/style';
import { Header, Img, H1 } from '../atoms';

const BGAspectRatio = '2.65';

const ClientHeaderContainer = styled(Header)`
  align-items: center;
  background-color: ${themed('color.black')};
  background-image: url('/img/backgrounds/space-fog-purple.png'),
    url('/img/backgrounds/star-field.png');
  background-position: center;
  display: flex;
  height: auto;
  justify-content: center;

  ${mediaQuery.small`
    background-color: ${themed('color.background')};
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-960.png');
    background-size: cover;
    height: 360px;
  `};

  ${mediaQuery.medium`
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-960.png');
    height: calc((100vw / ${BGAspectRatio}) * 0.85);
  `};

  ${mediaQuery.large`
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-1920.png');
    height: calc(100vw / ${BGAspectRatio});
  `};

  ${mediaQuery.xlarge`
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-2000.png');
  `};
`;

const ClientHeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  font-size: 1rem;
  font-weight: 400;
  justify-content: center;
  max-width: 1300px;
  padding: ${em('28px')} 0;

  ${mediaQuery.small`
    justify-content: space-around;
  `};

  ${mediaQuery.large`
    flex: 3 1 100%;
  `};
`;

const BaseTwoLogoContainer = styled.div`
  display: none;
  flex: 0 0 auto;
  width: 40%;

  ${mediaQuery.small`
    display: block;
  `};
`;

const ClientLogoContainer = styled.div`
  display: none;
  flex: 0 0 auto;
  width: 30%;

  ${mediaQuery.small`
    display: block;
  `};
`;

const Image = styled(Img)`
  display: block;
  height: auto;
  width: 100%;
`;

const ProjectTitle = styled(H1)`
  color: ${themed('color.background')};
  display: inline-block;
  font-weight: bold;
  padding: 3rem 1rem 1rem 1rem;
  text-align: center;

  ${mediaQuery.small`
    display: none;
  `};
`;

function ClientHeader(props) {
  const { image, project, name } = props;
  return (
    <ClientHeaderContainer>
      <ClientHeaderContent>
        <ClientLogoContainer>
          <Image {...image} alt={name} />
        </ClientLogoContainer>
        <BaseTwoLogoContainer>
          <Image alt="Base Two" src="/img/logos/b2-logo-with-text.svg" />
        </BaseTwoLogoContainer>
        <ProjectTitle>{project}</ProjectTitle>
      </ClientHeaderContent>
    </ClientHeaderContainer>
  );
}

ClientHeader.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
};

export default ClientHeader;
