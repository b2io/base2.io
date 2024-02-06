import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Button,
  Error,
  FormInput,
  Heading,
  InputWrapper,
  Label,
  Link,
  ThankYouMessage,
} from '~/components';
import { atMinTablet, atMinXL, spacing } from '~/theme';

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
    grid-template-columns: 1.125fr 2fr;
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
      <div
        css={css`
          ${atMinXL} {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: ${spacing.sm};
          }
        `}
      >
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
      </div>
      <InputWrapper
        css={css`
          margin-bottom: ${spacing.md};
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
              margin-bottom: ${spacing.xs};
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
              margin-bottom: ${spacing.xs};
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
