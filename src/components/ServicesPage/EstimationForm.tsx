import { css } from '@emotion/react';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import {
  Button,
  Error,
  FormInput,
  Heading,
  InputWrapper,
  Label,
  ThankYouMessage,
} from '~/components';
import { atMinLg, atMinXL, spacing } from '~/theme';

const FORM_ID = 'https://formspree.io/f/myyqajgp';

type FormValues = {
  email: string;
  name: string;
  serviceType: string;
  description: string;
  submit: boolean;
};

export const EstimationForm: FC = () => {
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
    <section
      css={css`
        margin-top: ${spacing.xxl4};
        ${atMinXL} {
          margin-left: ${spacing.marginXl};
          margin-right: ${spacing.marginXl};
        }
      `}
    >
      <Heading
        as="h2"
        css={css`
          margin-bottom: ${spacing.xxl};
        `}
        variant="h2"
      >
        Request a Project Estimate
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div
          css={css`
            ${atMinLg} {
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
              {...register('name', {
                required: 'Please enter your name.',
              })}
            />
            {errors.name && <Error>{errors.name.message}</Error>}
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
          <Label htmlFor="description">Description</Label>
          <FormInput
            css={css`
              height: 10rem;
              resize: vertical;
            `}
            as="textarea"
            id="description"
            placeholder="Partnership Description*"
            required
            type="description"
            {...register('description', {
              required: 'Describe your business need.',
            })}
          />
          {errors.description && <Error>{errors.description.message}</Error>}
        </InputWrapper>
        <Button type="submit" disabled={isSubmitting}>
          Request Estimate
        </Button>
      </form>
    </section>
  );
};
