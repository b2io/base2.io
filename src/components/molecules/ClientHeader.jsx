/* ========================================================================== *
 * ClientHeader
 * ========================================================================== */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em } from 'polished';

import { mediaQuery, themed } from '../../util/style';
import { Header, Img, H1 } from '../../components';

const BGAspectRatio = '2.65';

const ClientHeaderContainer = styled(Header)`
  display: flex;
  height: auto;
  background-position: center;
  background-color: ${themed('color.black')};
  background-image:
    url('/img/backgrounds/space-fog-purple.png'),
    url('/img/backgrounds/star-field.png');
  justify-content: center;
  align-items: center;

  ${mediaQuery.small`
    height: 360px;
    background-size: cover;
    background-color: ${themed('color.background')};
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-960.png');
  `};

  ${mediaQuery.medium`
    height: calc((100vw / ${BGAspectRatio}) * 0.85);
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-960.png');
  `};

  ${mediaQuery.large`
    height: calc(100vw / ${BGAspectRatio});
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-1920.png');
  `};

  ${mediaQuery.xlarge`
    background-image: url('/img/backgrounds/caseStudy/b2-case-study-background-2000.png');
  `};

`;

const  ClientHeaderContent = styled.div`
  display: flex;
  max-width: 1300px;
  padding: ${em('28px')} 0;
  flex: 1 1 100%;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  justify-content: center;

  ${mediaQuery.small`
    justify-content: space-around;
  `};

  ${mediaQuery.large`
    flex: 3 1 100%;
  `};
`

const BaseTwoLogoContainer = styled.div`
  display: none;
  width: 40%;
  flex: 0 0 auto;

  ${mediaQuery.small`
    display: block;
  `};
`

const ClientLogoContainer = styled.div`
  display: none;
  width: 30%;
  flex: 0 0 auto;

  ${mediaQuery.small`
    display: block;
  `};
`

const Image = styled(Img)`
  display: block;
  height: auto;
  width: 100%;
`;

const ProjectTitle = styled(H1)`
  display: inline-block;
  padding: 3rem 1rem 1rem 1rem;
  font-weight: bold;
  text-align: center;
  color: ${themed('color.background')};

  ${mediaQuery.small`
    display: none;
  `};
`;

function ClientHeader (props) {
  const { image, project, name } = props;
  return (
    <ClientHeaderContainer>
      <ClientHeaderContent>
        <ClientLogoContainer>
          <Image {...image} alt={name} />
        </ClientLogoContainer>
        <BaseTwoLogoContainer>
          <Image src="/img/logos/b2-logo-with-text.svg" alt="Base Two" />
        </BaseTwoLogoContainer>
        <ProjectTitle>
          {project}
        </ProjectTitle>
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
