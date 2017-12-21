import React from 'react';
import styled from 'styled-components';
import { Button, TextAreaField, TextInputField } from '../atoms';

const Wrapper = styled.div``;

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
          <TextInputField label="Name*" name="name" />
          <TextInputField label="Email*" name="email" />
          <TextInputField label="Phone Number" name="phoneNumber" />
          <TextInputField label="Budget" name="budget" />
          <TextAreaField label="Description*" name="leadDescription" rows="5" />
          <Button block>Submit</Button>
        </form>
      </Wrapper>
    );
  }
}

export default ContactForm;
