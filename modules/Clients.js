import React from 'react';
import styled from 'styled-components';
import { LogoGrid } from '../components';
import { clientLogos } from '../helpers/logos';
import { logoWrapper } from '../helpers/templates';

const Wrapper = styled.div`${logoWrapper};`;

const Clients = () =>
  (<Wrapper>
    <LogoGrid logos={clientLogos} />
  </Wrapper>);

export default Clients;
