import React from 'react';
import styled from 'styled-components';
import { em } from 'polished';
import { Button, TextAreaField, TextInputField } from '../../atoms';
import { emailPattern, phonePattern } from '../../../util/regexPatterns';
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
      <form
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        method="POST"
        name="contact"
      >
        <input name="form-name" type="hidden" value="contact" />
        <p hidden>
          <label htmlFor="bot-field">
            Don’t fill this out: <input name="bot-field" type="text" />
          </label>
        </p>
        <TextInputField label="Name" name="name" required />
        <TextInputField
          label="Email"
          name="email"
          pattern={emailPattern}
          required
          title="your@email.com"
          type="email"
        />
        <TextInputField
          label="Phone Number"
          name="phoneNumber"
          pattern={phonePattern}
          title="Please include country code (if applicable) and area code. Formatting will be ignored"
          type="tel"
        />
        <TextInputField label="Budget" name="budget" />
        <DescriptionField
          label="Description"
          multiline
          name="leadDescription"
          required
          rows="5"
        />
        <ContactSubmitButton type="submit">Submit</ContactSubmitButton>
      </form>
    </Wrapper>
  );
}

export default ContactForm;
