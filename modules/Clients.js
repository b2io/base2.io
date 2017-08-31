import React from 'react';
import styled from 'styled-components';
import { LogoGrid, Title } from '../components';
import { clientLogos } from '../helpers/logos';

const Wrapper = styled.div`
  align-self: flex-start;
  margin: 0 auto auto;
  width: ;
`;

const Clients = () =>
  (<Wrapper>
    <Title>Logos</Title>
    <LogoGrid logos={clientLogos} />
  </Wrapper>);

export default Clients;
