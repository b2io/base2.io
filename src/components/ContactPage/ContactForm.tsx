import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Heading, Link } from '~/components';
import theme, { atMinTablet, colors, cssClamp, spacing } from '~/theme';

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
  margin-bottom: ${spacing.xxl2};
  min-height: 12.375rem;
`;

const Label = styled.label({
  ...theme.textVariants.h2,
  display: 'block',
  marginBottom: spacing.lg,
});

const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.offWhite};
  color: ${colors.offWhite};
  font-size: 1.875rem;
  height: 4rem;
  line-height: 1.3;
  margin-bottom: ${spacing.xs};
  outline: none;
  transition: border-bottom 0.3s ease;
  width: 100%;

  &:focus {
    border-bottom: 1px solid ${colors.coral};
  }

  &::placeholder {
    font-size: 1rem;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px ${colors.darkBlue} inset;
    -webkit-text-fill-color: ${colors.offWhite};
    transition: background-color 5000s ease-in-out 0s;
  }
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
        <Label htmlFor="name">Hello, my name is:</Label>
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
        <Label htmlFor="email">My email is:</Label>
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
          min-height: 12.625rem;
        `}
      >
        <Label htmlFor="message">I&apos;d like to talk about:</Label>
        <FormInput
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
              margin-bottom: ${cssClamp([0.5, 'mobile'], [1, 'tablet'])};
            `}
            variant="h3"
          >
            Phone
          </Heading>
          <Link
            css={css`
              font-size: 1.875rem;
              font-variation-settings: 'wght' 300;
            `}
            href="tel:6143981158"
            target="_blank"
            rel="noopener"
          >
            614.398.1158
          </Link>
        </ContactInfo>
        <ContactInfo>
          <Heading
            color="coral"
            css={css`
              margin-bottom: ${cssClamp([0.5, 'mobile'], [1, 'tablet'])};
            `}
            variant="h3"
          >
            Email
          </Heading>
          <Link
            css={css`
              font-size: 1.875rem;
              font-variation-settings: 'wght' 300;
            `}
            href="mailto:info@base2.io"
            target="_blank"
            rel="noopener"
          >
            info@base2.io
          </Link>
        </ContactInfo>
        <ContactInfo>
          <Heading
            color="coral"
            css={css`
              margin-bottom: ${cssClamp([0.5, 'mobile'], [1, 'tablet'])};
            `}
            variant="h3"
          >
            Address
          </Heading>
          <Link
            css={css`
              font-size: 1.875rem;
              font-variation-settings: 'wght' 300;
            `}
            href="https://goo.gl/maps/cesdJy5pkmTqJ7jn7"
            target="_blank"
            rel="noopener"
          >
            <address
              css={css`
                font-style: normal;
                line-height: 1.5;
              `}
            >
              21 E 5th Ave, Suite 102
              <br />
              Columbus, OH 43021
            </address>
          </Link>
        </ContactInfo>
      </ContactAside>
      <Form />
    </ContactWrapper>
  );
};
