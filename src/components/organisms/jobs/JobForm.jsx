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

const FILE_SIZE_LIMIT = 1000000; // 1MB

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
          name="redirect_to"
          type="hidden"
          value="http://base2.io/thanks/"
        />
        <input
          name="job_type"
          type="hidden"
          value={isApprenticeship ? 'Apprenticeship' : 'Regular Job'}
        />
        <input name="position" type="hidden" value={position} />
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
        <TextInputField label="GitHub, CodePen, etc" name="gitHub" />
        <TextInputField label="Website / Portfolio" name="portfolio" />
        {isApprenticeship ? (
          <>
            <TextAreaField
              label="What technologies are you most eager to learn about/work with?"
              multiline
              name="interestedTechnologies"
              rows="5"
            />
            <TextAreaField
              label="What non-technical skills do you hope to learn from us?"
              multiline
              name="interestedSkills"
              rows="5"
            />
            <TextAreaField
              label="What is your ideal learning environment?"
              multiline
              name="learningEnvironment"
              rows="5"
            />
            <TextAreaField
              label="What technologies have you been working with lately?"
              multiline
              name="recentTechnologies"
              rows="5"
            />
            <TextAreaField
              label="What else would you like us to know about you?"
              multiline
              name="aboutYou"
              rows="5"
            />
          </>
        ) : (
          <>
            <TextAreaField
              label="Experience / Project Highlights"
              multiline
              name="experienceHighlight"
              rows="5"
            />
            <TextInputField
              label="Please upload your resume (<1MB)"
              name="resume"
              onChange={e => {
                if (
                  e.target.files &&
                  e.target.files[0].size > FILE_SIZE_LIMIT
                ) {
                  e.target.setCustomValidity(
                    'File must be less than 1MB in size',
                  );
                } else {
                  e.target.setCustomValidity('');
                }
              }}
              type="file"
            />
          </>
        )}
        <>
          <RadioButtonGroupLabel>
            Nearest Base Two Location
          </RadioButtonGroupLabel>
          <RadioButton label="Columbus" name="location" value="columbus" />
          <RadioButton label="Pittsburgh" name="location" value="pittsburgh" />
          <RadioButton label="Chicago" name="location" value="chicago" />
        </>
        <TextAreaField
          label="Any Additional Information"
          multiline
          name="anythingElse"
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
