import React from 'react';
import styled from 'styled-components';
import { LogoGrid, Title } from '../components';
import { technologyLogos } from '../helpers/logos';
import { logoWrapper } from '../helpers/templates';

const Wrapper = styled.div`${logoWrapper};`;

const Technologies = () =>
  (<Wrapper>
    <Title>Edit me!</Title>
    <LogoGrid logos={technologyLogos} />
  </Wrapper>);

export default Technologies;
