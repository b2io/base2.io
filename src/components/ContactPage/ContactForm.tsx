import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Heading, Link } from '~/components';
import { atMinTablet, colors, spacing } from '~/theme';

const FORM_ID = 'https://formspree.io/f/mbjqznky';

type FormValues = {
  email: string;
  fullName: string;
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
  min-height: 10rem;
`;

const Label = styled.label({
  display: 'block',
  marginBottom: spacing.xs,
});

const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.offWhite};
  color: ${colors.offWhite};
  height: 4rem;
  margin-bottom: ${spacing.xxs};
  outline: none;
  padding: ${spacing.xs};
  transition: border-bottom 0.3s ease;
  width: 100%;

  &:focus {
    border-bottom: 1px solid ${colors.coral};
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${colors.darkBlue} inset;
    -webkit-text-fill-color: ${colors.offWhite};
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const ContactAside = styled.aside`
  margin-bottom: ${spacing.md};

  ${atMinTablet} {
    margin-bottom: 0;
  }
`;

const ContactInfo = styled.article`
  margin-bottom: ${spacing.xxl};
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid ${colors.coral};
  color: ${colors.offWhite};
  cursor: pointer;
  font-size: 1.375rem;
  font-variation-settings: 'wght' 650;
  padding: ${spacing.xs} ${spacing.lg};
  transition: background 0.3s ease;
  &:hover {
    background: ${colors.coral};
  }
`;

const Error = styled.p`
  color: ${colors.coral};
  margin: 0;
`;

const ThankYouMessage = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
      console.error('Error submitting form', error);
    }
  };

  return isSubmitSuccessful ? (
    <ThankYouMessage>
      <Heading
        css={css`
          margin-bottom: ${spacing.lg};
        `}
        variant="h3"
      >
        Thanks for your message! We&apos;ll be in touch soon.
      </Heading>
      <Button type="button" onClick={() => reset()}>
        Send another message?
      </Button>
    </ThankYouMessage>
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputWrapper>
        <Label htmlFor="name">Name</Label>
        <FormInput
          autoComplete="off"
          id="name"
          placeholder="Name*"
          required
          type="name"
          {...register('fullName', {
            required: 'Please enter your name.',
          })}
        />
        {errors.fullName && <Error>{errors.fullName.message}</Error>}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="email">Email</Label>
        <FormInput
          autoComplete="off"
          id="email"
          placeholder="Email*"
          required
          type="email"
          {...register('email', {
            required: 'Please enter your email address.',
          })}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
      </InputWrapper>
      <InputWrapper
        css={css`
          margin-bottom: ${spacing.lg};
          min-height: 15rem;
        `}
      >
        <Label htmlFor="message">Message</Label>
        <FormInput
          css={css`
            height: 10rem;
            resize: vertical;
          `}
          as="textarea"
          id="message"
          placeholder="Message*"
          required
          {...register('message', {
            required: 'Please include a message.',
          })}
        />
        {errors.message && <Error>{errors.message.message}</Error>}
      </InputWrapper>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  );
};

export const Contact: FC = () => {
  return (
    <ContactWrapper>
      <ContactAside>
        <ContactInfo>
          <Heading
            color="coral"
            css={css`
              margin-bottom: ${spacing.xxs};
            `}
            variant="h3"
          >
            Phone
          </Heading>
          <Link
            href="tel:6143981158"
            target="_blank"
            rel="noopener"
            variant="CTA"
          >
            614.398.1158
          </Link>
        </ContactInfo>
        <ContactInfo>
          <Heading
            color="coral"
            css={css`
              margin-bottom: ${spacing.xxs};
            `}
            variant="h3"
          >
            Email
          </Heading>
          <Link
            href="mailto:info@base2.io"
            target="_blank"
            rel="noopener"
            variant="CTA"
          >
            info@base2.io
          </Link>
        </ContactInfo>
      </ContactAside>
      <Form />
    </ContactWrapper>
  );
};
