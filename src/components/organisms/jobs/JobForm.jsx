import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { em } from 'polished';
import {
  Button,
  RadioButton,
  TextAreaField,
  TextInputField,
} from '../../atoms';
import { emailPattern, phonePattern } from '../../../util/regexPatterns';
import { mediaQuery, themed } from '../../../util/style';

const Wrapper = styled.div`
  margin: 0 auto 5em;
  padding: 0 1em;
  width: 100%;

  ${mediaQuery.small`
    max-width: ${em('700px')};
  `};

  ${mediaQuery.medium`
    max-width: ${em('610px')};
  `};
`;

const RadioButtonGroupLabel = styled.label`
  ${themed('typography.subheading')};
  color: ${themed('color.accent')};
  display: block;
  margin-bottom: 0.25em;
`;

const SubmitButton = styled(Button)`
  display: block;
  margin: 0 auto;
  width: 100%;

  ${mediaQuery.xsmall`
    padding-left: 0;
    padding-right: 0;
  `};

  ${mediaQuery.small`
    width: auto;
  `};
`;

function JobForm({ isApprenticeship, position }) {
  return (
    <Wrapper>
      <form
        action="https://getsimpleform.com/messages?form_api_token=3e1c2d5870538837aed43b89c13caa41"
        encType="multipart/form-data"
        method="post"
      >
        <input
          type="hidden"
          name="redirect_to"
          value="http://base2.io/thanks/"
        />
        <input
          type="hidden"
          name="job_type"
          value={isApprenticeship ? 'Apprenticeship' : 'Regular Job'}
        />
        <input type="hidden" name="position" value={position} />
        <TextInputField label="Name" name="name" required />
        <TextInputField
          label="Email"
          name="email"
          type="email"
          title="your@email.com"
          pattern={emailPattern}
          required
        />
        <TextInputField
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          title="Please include country code (if applicable) and area code. Formatting will be ignored"
          pattern={phonePattern}
        />
        <TextInputField label="GitHub, CodePen, etc" name="gitHub" />
        <TextInputField label="Website / Portfolio" name="portfolio" />
        {isApprenticeship ? (
          <>
            <TextAreaField
              label="What technologies are you most eager to learn about/work with?"
              name="interestedTechnologies"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What non-technical skills do you hope to learn from us?"
              name="interestedSkills"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What is your ideal learning environment?"
              name="learningEnvironment"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What technologies have you been working with lately?"
              name="recentTechnologies"
              multiline
              rows="5"
            />
            <TextAreaField
              label="What else would you like us to know about you?"
              name="aboutYou"
              multiline
              rows="5"
            />
          </>
        ) : (
          <>
            <TextAreaField
              label="Experience / Project Highlights"
              name="experienceHighlight"
              multiline
              rows="5"
            />
            <TextInputField
              label="Please upload your resume"
              type="file"
              name="resume"
              multiple
            />
          </>
        )}
        <>
          <RadioButtonGroupLabel>
            Nearest Base Two Location
          </RadioButtonGroupLabel>
          <RadioButton label="Columbus" name="location" value="columbus" />
          <RadioButton label="Pittsburgh" name="location" value="pittsburgh" />
        </>
        <TextAreaField
          label="Any Additional Information"
          name="anythingElse"
          multiline
          rows="5"
        />
        <SubmitButton>Submit</SubmitButton>
      </form>
    </Wrapper>
  );
}

JobForm.defaultProps = {
  isApprenticeship: false,
  position: 'general',
};

JobForm.propTypes = {
  isApprenticeship: PropTypes.bool,
  position: PropTypes.string,
};

export default JobForm;
