import React from 'react';
import styled from 'styled-components';
import { mediaQuery } from '../../../util/style';
import { A, Address, Link } from '../../atoms';

const BaseTwoAddress = styled(Address)`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  margin: 0 auto;
  max-width: 10em;
  ${mediaQuery.small`
    flex-wrap: wrap;
    max-height: 10em;
    max-width: 20em;
  `};
  ${mediaQuery.medium`
    flex-wrap: nowrap;
    font-size: 1.75em;
    margin-left: 1em;
    margin-right: 0;
    max-height: 100%;
    max-width: 100%;
  `};
`;

const InfoGroup = styled.span`
  display: inline-block;
  margin-bottom: 1em;
`;

const ContactInformation = () => (
  <BaseTwoAddress>
    <InfoGroup>
      Email us:
      <br />
      <A href="mailto:info@base2.io" rel="noopener" target="_blank">
        info@base2.io
      </A>
    </InfoGroup>
    <InfoGroup>
      Call us:
      <br />
      <A href="tel:+16143981158" rel="noopener" target="_blank">
        (614) 398-1158
      </A>
    </InfoGroup>
    <InfoGroup>
      Visit or snail mail us:
      <br />
      21 E 5th Ave
      <br />
      Suite 102
      <br />
      Columbus, OH 43201
      <br />
      <A
        href="https://www.google.com/maps/place/Base+Two/@39.9867386,-83.0068768,17z/data=!3m1!4b1!4m5!3m4!1s0x88388ec568556e4d:0x7677c78cac445c63!8m2!3d39.9867386!4d-83.0046881"
        rel="noopener"
        target="_blank"
      >
        Google Map
      </A>
    </InfoGroup>
  </BaseTwoAddress>
);

ContactInformation.defaultProps = {};

ContactInformation.propTypes = {};

export default ContactInformation;
