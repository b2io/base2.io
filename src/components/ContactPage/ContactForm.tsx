import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import { atMinTablet, colors, cssClamp, spacing } from '~/theme';

import { Heading } from '../Heading';
import { Text } from '../Text';

const FORM_ID = 'https://formspree.io/f/xvodvoer';

type FormValues = {
  fullName: string;
  email: string;
  message: string;
  submit: boolean;
};

const ContactWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  ${atMinTablet} {
    grid-template-columns: 1fr 1fr;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: ${spacing.xxl2};
  min-height: 12rem;
`;

const Label = styled(Heading)`
  margin-bottom: ${spacing.lg};
  font-size: ${cssClamp([2.5, 'mobile'], [3.125, 'tablet'])};
  font-variation-settings: 'wght' 700;
`;

const InputStyles = css`
  color: white;
  font-size: 1.875rem;
  width: 100%;
  height: 4rem;
  margin-bottom: ${spacing.xs};
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

const Input = styled.input`
  ${InputStyles}
`;

const Textarea = styled.textarea`
  ${InputStyles}
`;

const ContactAside = styled.aside`
  margin-bottom: 6.5rem;
  ${atMinTablet} {
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.article`
  margin-bottom: ${cssClamp([3, 'mobile'], [5, 'tablet'])};
`;

const Button = css`
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

const Submit = styled.button`
  ${Button}
`;

const Error = styled.p`
  color: ${colors.coral};
  margin: 0;
`;

const ThankYouMessage = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const SendAnotherMsg = styled.button`
  ${Button}
`;

export const Form: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    shouldUseNativeValidation: false,
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await fetch(FORM_ID, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        method: 'POST',
        mode: 'cors',
      });
      reset();
    } catch (error) {
      // catch errors
    }
  };

  return (
    <>
      {isSubmitSuccessful ? (
        <ThankYouMessage>
          <Heading
            variant="h3"
            css={css`
              margin-bottom: ${spacing.lg};
            `}
          >
            Thanks for your message! We&apos;ll be in touch soon.
          </Heading>
          <SendAnotherMsg type="button" onClick={() => reset()}>
            Send another message?
          </SendAnotherMsg>
        </ThankYouMessage>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <InputWrapper>
            <Label>Hello, my name is:</Label>
            <Input
              id="name"
              type="name"
              placeholder="Name*"
              required
              autoComplete="off"
              {...register('fullName', {
                required: 'Please enter your name.',
              })}
            />
            {errors.fullName && <Error>{errors.fullName.message}</Error>}
          </InputWrapper>
          <InputWrapper>
            <Label>My email is:</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email*"
              required
              autoComplete="off"
              {...register('email', {
                required: 'Please enter your email address.',
              })}
            />
            {errors.email && <Error>{errors.email.message}</Error>}
          </InputWrapper>
          <InputWrapper
            css={css`
              min-height: 12.625rem;
              margin-bottom: ${spacing.md};
            `}
          >
            <Label>I&apos;d like to talk about:</Label>
            <Textarea
              id="message"
              placeholder="Message*"
              required
              {...register('message', {
                required: 'Please write a message.',
              })}
            />
            {errors.message && <Error>{errors.message.message}</Error>}
          </InputWrapper>
          <Submit type="submit" disabled={isSubmitting}>
            Submit
          </Submit>
        </form>
      )}
    </>
  );
};

export const Contact: FC = () => {
  return (
    <ContactWrapper>
      <ContactAside>
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
      </ContactAside>
      <Form />
    </ContactWrapper>
  );
};
