import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Button, TextAreaField, TextInputField } from '../../atoms';
import { mediaQuery } from '../../../util/style';

const Wrapper = styled.div`
  margin: 0 auto 5em;
  padding: 0 1em;
  width: 100%;

  ${mediaQuery.small`
    max-width: ${em('700px')};
    padding: 0 0;
  `};

  ${mediaQuery.medium`
    margin: 0;
    max-width: ${em('610px')};
  `};
`;

const DescriptionField = styled(TextAreaField)`
  min-height: 50px;
`;

const ContactSubmitButton = styled(Button)`
  display: block;
  margin: 0 auto;
  padding-left: ${em('120px', '24px')};
  padding-right: ${em('120px', '24px')};
  width: 100%;

  ${mediaQuery.xsmall`
    padding-left: 0;
    padding-right: 0;
  `};

  ${mediaQuery.small`
    width: auto;
  `};
`;

function ContactForm() {
  return (
    <Wrapper>
      <form action="https://formspree.io/info@base2.io" method="POST">
        <input
          aria-hidden="true"
          name="_gotcha"
          style={{ display: 'none' }}
          type="text"
        />
        <input
          aria-hidden="true"
          name="_subject"
          type="hidden"
          value="Let's work together!"
        />
        <input aria-hidden="true" name="_next" type="hidden" value="/thanks" />
        <TextInputField label="Name" name="name" required />
        <TextInputField
          label="Email"
          name="email"
          type="email"
          title="your@email.com"
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          required
        />
        <TextInputField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          title="Please include country code (if applicable) and area code. Formatting will be ignored"
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
        />
        <TextInputField label="Budget" name="budget" />
        <DescriptionField
          label="Description"
          name="leadDescription"
          multiline
          rows="5"
          required
        />
        <ContactSubmitButton>Submit</ContactSubmitButton>
      </form>
    </Wrapper>
  );
}

export default ContactForm;
