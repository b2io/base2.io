import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useForm, ValidationError } from '@formspree/react';
import type { FC } from 'react';

import { atMinTablet, colors, cssClamp, spacing } from '~/theme';

import { Heading } from '../Heading';
import { Text } from '../Text';

const FormWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  ${atMinTablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Label = styled(Heading)`
  margin-bottom: ${spacing.lg};
  font-size: ${cssClamp([2.5, 'mobile'], [3.125, 'tablet'])};
  font-variation-settings: 'wght' 700;
`;

const Input = styled.input`
  color: white;
  font-size: 1.875rem;
  width: 100%;
  height: 4rem;
  margin-bottom: 6.5rem;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  outline: none;
  transition: border-bottom 0.3s ease;
  &:focus {
    border-bottom: 1px solid ${colors.coral};
  }
  &::placeholder {
    font-size: 1rem;
  }
  &:-webkit-autofill:focus,
  :-webkit-autofill {
    -webkit-text-fill-color: ${colors.offWhite};
    -webkit-box-shadow: 0 0 0px 1000px ${colors.darkBlue} inset;
    box-shadow: 0 0 0px 1000px ${colors.darkBlue} inset;
  }
`;

const FormAside = styled.aside`
  margin-bottom: 6.5rem;
  ${atMinTablet} {
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.article`
  margin-bottom: ${cssClamp([3, 'mobile'], [5, 'tablet'])};
`;

const Submit = styled.button`
  background: transparent;
  border: 1px solid ${colors.coral};
  font-size: 1.375rem;
  padding: ${spacing.xs} ${spacing.lg};
  font-variation-settings: 'wght' 650;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: ${colors.coral};
    color: ${colors.offWhite};
  }
`;

const SubmitMessage = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form: FC = () => {
  const [state, handleSubmit] = useForm('mbjqznky');
  if (state.succeeded) {
    return (
      <SubmitMessage>
        <Heading variant="h3">
          Thanks for your message! We&apos;ll be in touch soon.
        </Heading>
      </SubmitMessage>
    );
  }
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Label>Hello, my name is:</Label>
      <Input
        id="name"
        type="name"
        name="name"
        placeholder="Name*"
        required
        autoComplete="off"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <Label>My email is:</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email*"
        required
        autoComplete="off"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <Label>I&apos;d like to talk about:</Label>
      <Input id="message" name="message" placeholder="Message*" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <Submit type="submit" disabled={state.submitting}>
        Submit
      </Submit>
    </form>
  );
};

export const Contact: FC = () => {
  return (
    <FormWrapper>
      <FormAside>
        <ContactInfo>
          <Heading
            variant="h3"
            color="coral"
            css={css`
              margin-bottom: ${cssClamp([0.5, 'mobile'], [2, 'tablet'])};
            `}
          >
            Phone
          </Heading>
          <Text variant="h3">614.398.1158</Text>
        </ContactInfo>
        <ContactInfo>
          <Heading
            variant="h3"
            color="coral"
            css={css`
              margin-bottom: ${cssClamp([0.5, 'mobile'], [2, 'tablet'])};
            `}
          >
            Email
          </Heading>
          <Text variant="h3">info@base2.io</Text>
        </ContactInfo>
        <ContactInfo>
          <Heading
            variant="h3"
            color="coral"
            css={css`
              margin-bottom: ${cssClamp([0.5, 'mobile'], [2, 'tablet'])};
            `}
          >
            Address
          </Heading>
          <Text variant="h3">
            <address
              css={css`
                font-style: normal;
              `}
            >
              21 E 5th Ave <br />
              Suite 102 <br />
              Columbus, OH 43021
            </address>
          </Text>
        </ContactInfo>
      </FormAside>
      <Form />
    </FormWrapper>
  );
};
