import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em, rem } from 'polished';
import { A, Img, LI, P, UL } from '../..';
import { mediaQuery } from '../../../util/style';

const CaseStudyAsideWrapper = styled.aside`
  ${mediaQuery.small`
  max-width: 350px;
  margin-right: ${em('130px', '18px')};
  `};

  ${mediaQuery.medium`
  max-width: 350px;
  margin-right: ${em('130px', '18px')};
  padding-top: ${em('12px', '18px')};
  `};
`;

const CaseStudyAsideText = styled(P)`
  margin-top: 0;
`;

const CaseStudyAsideHeading = styled.h3`
  font-size: ${rem('20px')};
  margin: ${em('30px', '20px')} 0 0;

  ${mediaQuery.small`
    font-size: ${rem('24px')};
    margin: ${em('36px', '24px')} 0 0;
  `};
`;

const CaseStudyTechnologyLogo = styled(Img)`
  height: auto;
  padding: ${em('5px')};
  vertical-align: middle;
  width: ${em('50px')};

  ${mediaQuery.large`
    width: ${em('40px')};
  `};
`;

function CaseStudyAside({ client, highlights, link, project, technologies }) {
  return (
    <CaseStudyAsideWrapper>
      <CaseStudyAsideHeading>Company</CaseStudyAsideHeading>
      <CaseStudyAsideText>{client}</CaseStudyAsideText>
      <CaseStudyAsideHeading>Product</CaseStudyAsideHeading>
      <CaseStudyAsideText>
        {link ? <A href={link}>{project}</A> : project}
      </CaseStudyAsideText>
      <CaseStudyAsideHeading>Highlights</CaseStudyAsideHeading>
      <UL>
        {highlights.map(highlight => (
          <LI key={highlight}>{highlight}</LI>
        ))}
      </UL>

      <CaseStudyAsideHeading>Technologies</CaseStudyAsideHeading>

      <div>
        {technologies.map(tech => (
          <CaseStudyTechnologyLogo
            {...tech.image}
            alt={tech.name}
            key={tech.name}
          />
        ))}
      </div>
    </CaseStudyAsideWrapper>
  );
}

CaseStudyAside.defaultProps = {
  link: '',
};

CaseStudyAside.propTypes = {
  client: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
  project: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.object).isRequired,
  link: PropTypes.string,
};

export default CaseStudyAside;
