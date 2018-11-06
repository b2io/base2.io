import React from 'react';
import styled from 'styled-components';
import BaseTwoJobsLogoSVG from './b2-jobs-logo.svg';
import { themed } from '../../../util/style';

const StyledLogo = styled(BaseTwoJobsLogoSVG)`
  fill: ${themed('color.white')};
`;

function BaseTwoJobsLogo() {
  return <StyledLogo />;
}

export default BaseTwoJobsLogo;
