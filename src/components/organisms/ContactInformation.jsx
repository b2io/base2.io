import React from 'react';
import { A, Address } from '../atoms';

class ContactInformation extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Address>
        Email us:<br />
        <A href="mailto:info@base2.io" rel="noopener" target="_blank">
          info@base2.io
        </A>
        <br />
        <br />
        Call us:<br />
        <A href="tel:+16143981158" rel="noopener" target="_blank">
          (614) 398-1158
        </A>
        <br />
        <br />
        Visit or snail mail us:<br />
        21 E 5th Ave<br />
        Suite 102<br />
        Columbus, OH 43201<br />
        <A
          href="https://www.google.com/maps/place/Base+Two/@39.9867386,-83.0068768,17z/data=!3m1!4b1!4m5!3m4!1s0x88388ec568556e4d:0x7677c78cac445c63!8m2!3d39.9867386!4d-83.0046881"
          rel="noopener"
          target="_blank"
        >
          Google Map
        </A>
      </Address>
    );
  }
}

export default ContactInformation;
