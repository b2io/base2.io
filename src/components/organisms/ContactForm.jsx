import React from 'react';
import styled from 'styled-components';
import { A, Button, H4, TextAreaField, TextInputField } from '../atoms';
import { mediaQuery } from '../../util/style';

const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-row-gap: 2em;
  grid-template-columns: 1fr auto;

  ${mediaQuery.xsmall`
    grid-template-columns: 1fr;
  `};
`;

class ContactForm extends React.Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <Wrapper>
        <form action="https://formspree.io/info@base2.io" method="POST">
          <input name="_gotcha" style={{ display: 'none' }} type="text" />
          <input name="_subject" type="hidden" value="Let's work together!" />
          <input name="_next" type="hidden" value="/thanks" />
          <TextInputField label="Name" name="name" />
          <TextInputField label="Email" name="email" />
          <TextInputField label="Phone Number" name="phoneNumber" />
          <TextInputField label="Budget" name="budget" />
          <TextAreaField label="Description" name="leadDescription" rows="5" />
          <Button block>Submit</Button>
        </form>
        <aside>
          <H4>Office</H4>
          <address>
            <A
              href="https://www.google.com/maps/place/Base+Two/@39.9867386,-83.0068768,17z/data=!3m1!4b1!4m5!3m4!1s0x88388ec568556e4d:0x7677c78cac445c63!8m2!3d39.9867386!4d-83.0046881"
              rel="noopener"
              target="_blank"
            >
              <strong>Base Two</strong>
              <br />
              21 E 5th Ave, Ste 102<br />
              Columbus, OH 43201
            </A>
          </address>
          <H4>Phone</H4>
          <address>
            <A href="tel:+16143981158" rel="noopener" target="_blank">
              (614) 398-1158
            </A>
          </address>
          <H4>Email</H4>
          <address>
            <A href="mailto:info@base2.io" rel="noopener" target="_blank">
              info@base2.io
            </A>
          </address>
        </aside>
      </Wrapper>
    );
  }
}

export default ContactForm;
