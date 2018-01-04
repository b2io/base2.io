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
  width: 100%;

  ${mediaQuery.small`
    width: auto;
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
          <DescriptionField
            label="Description"
            name="leadDescription"
            multiline
            rows="5"
          />
          <ContactSubmitButton submit>Submit</ContactSubmitButton>
        </form>
      </Wrapper>
    );
  }
}

export default ContactForm;
