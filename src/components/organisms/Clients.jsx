import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em, rem } from 'polished';
import { Blurb, Link, Section, TwoToneHeading } from '../atoms';
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

const Description = styled(Blurb)`
  margin: 1em auto 2em auto;
  max-width: ${rem('750px')};
  text-align: center;
  width: 100%;
`;

function Clients({ clients }) {
  return (
    <Wrapper id="clients">
      <ClientsHeading>
        <span>We</span> Collaborate
      </ClientsHeading>
      <Description>
        We work with companies, big and small, to understand their needs, learn
        their business, hear their pain points, and collaborate to conceptualize
        and implement software solutions.
      </Description>
      <ClientList>
        {clients.map(client => (
          <ClientList.Item {...client} key={client.id} />
        ))}
      </ClientList>
      <Description>
        View <Link to="/case-studies">our work</Link>
      </Description>
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
