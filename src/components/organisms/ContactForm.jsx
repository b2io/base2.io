import React from 'react';
import styled from 'styled-components';
import { Button, TextAreaField, TextInputField } from '../atoms';
import { mediaQuery } from '../../util/style';

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 5em;
  max-width: 700px;
  padding: 0 1em;

  ${mediaQuery.small`
    padding: 0 0;
  `};
`;

const DescriptionField = styled(TextAreaField)`
  min-height: 50px;
`;

const ContactSubmitButton = styled(Button)`
  display: block;
  margin: 0 auto;

  ${mediaQuery.xsmall`
    padding: 0 1em;
  `};

  ${mediaQuery.large`
    margin: 0;
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
