import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';
import { Section, TwoToneHeading } from '../atoms';
import { ClientList } from '../molecules';
import { themed, webpBackground } from '../../util/style';

const fadeOut = {
  value: `${em('150px')}`,
};

const Wrapper = styled(Section)`
  padding-bottom: ${fadeOut.value};
  padding-top: ${themed('navHeight.value')};
  position: relative;

  ${webpBackground(
    'img/backgrounds/star-field.png',
    'img/backgrounds/star-field.webp',
  )};

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

function Clients({ clients }) {
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

Clients.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Clients;
