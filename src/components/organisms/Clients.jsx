import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';
import { Section, TwoToneHeading } from '../atoms';
import { ClientList } from '../molecules';
import { themed } from '../../util/style';

const fadeOut = {
  value: `${em('150px')}`,
};

const Wrapper = styled(Section)`
  background: url('img/backgrounds/star-field.png');
  padding-bottom: ${fadeOut.value};
  padding-top: ${themed('navHeight.value')};
  position: relative;

  &::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
    bottom: 0;
    content: '';
    display: block;
    height: ${fadeOut.value};
    left: 0;
    position: absolute;
    width: 100%;
    z-index: ${themed('zindex.base')};
  }
`;

const ClientsHeading = styled(TwoToneHeading)`
  margin-bottom: 1em;
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
      <Wrapper id="clients">
        <ClientsHeading>
          <span>We</span> Collaborate
        </ClientsHeading>
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
