import React from 'react';
import styled, { css } from 'styled-components';

const circleMixin = css`
  background: #fff;
  border-radius: 50%;
  height: 1.5em;
  margin-left: 0.25em;
  width: 1.5em;
`;

const SolidCircle = styled.div`
  ${circleMixin};
`;

const StripedCircle = styled.div`
  ${circleMixin};
  background: repeating-linear-gradient(
    -45deg,
    #000,
    #000 1px,
    #fff 1px,
    #fff 2px
  );
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const BaseTwoLogo = () => (
  <LogoWrapper>
    <SolidCircle />
    <StripedCircle />
  </LogoWrapper>
);

export default BaseTwoLogo;
