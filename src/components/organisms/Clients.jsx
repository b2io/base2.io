import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Section, H2 } from '../atoms';
import { ClientList } from '../molecules';

const Wrapper = styled(Section)`
  padding-bottom: 45vw;
  position: relative;
`;

const Heading = styled(H2)`
  text-align: center;
`;

class Clients extends React.Component {
  static defaultProps = {};

  static propTypes = {
    clients: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.node.isRequired,
        image: PropTypes.shape({}).isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  render() {
    const { clients } = this.props;

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
