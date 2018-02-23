import React from 'react';
import styled from 'styled-components';
import {
  ClientList,
  Section,
  H2,
} from '../atoms';

const Wrapper = styled(Section)`
  padding-bottom: 45vw;
  position: relative;
`;

const Heading = styled(H2)`
  text-align: center;
`;

class Clients extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {

    return (
      <Wrapper>
        <Heading>We Collaborate</Heading>
        <ClientList>
          {clients.map(client => (
            <ClientList.Item {...client} key={client.id} />
          ))}
        </ClientList>
      </Wrapper>
    );
  }
}

export default Clients;