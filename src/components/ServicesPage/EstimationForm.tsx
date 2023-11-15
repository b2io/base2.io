import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Heading } from '~/components';
import theme, { colors, spacing } from '~/theme';

const FORM_ID = 'https://formspree.io/f/myyqajgp';

type FormValues = {
  email: string;
  name: string;
  serviceType: string;
  description: string;
  submit: boolean;
};

const InputWrapper = styled.div`
  margin-bottom: ${spacing.lg};
  min-height: 2rem;
`;

const Label = styled.label({
  ...theme.textVariants.h3,
  display: 'block',
});

const FormInput = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid ${colors.offWhite};
  color: ${colors.offWhite};
  font-size: 1rem;
  height: 2rem;
  line-height: 1;
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

const FormSelect = styled.select`
  background: none;
  border: 1px solid ${colors.offWhite};
  color: ${colors.offWhite};
  font-size: 1rem;
  height: 2rem;
  margin-bottom: ${spacing.xs};
  width: 100%;

  &:select-value {
    color: ${colors.coral};
  }

  &:focus {
    border: 1px solid ${colors.coral};
  }
`;

const FormOption = styled.option`
  color: white;
  backgroundcolor: ${colors.darkBlue};
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputWrapper>
        <Label htmlFor="name">Name:</Label>
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
        <Label htmlFor="email">Email:</Label>
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
      <InputWrapper>
        <Label htmlFor="message">Project Description:</Label>
        <FormInput
          as="textarea"
          id="description"
          placeholder="Project Description*"
          required
          {...register('description', {
            required: 'Please include a project description.',
          })}
        />
        {errors.description && <Error>{errors.description.message}</Error>}
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="message">Service Package:</Label>
        <FormSelect
          as="select"
          id="serviceType"
          placeholder="Service Type"
          required
          {...register('serviceType', {
            required:
              'Please include the type of service you are interested in',
          })}
        >
          <FormOption value="CustomSoftwareSolution">
            Custom Software Solution
          </FormOption>
          <FormOption value="SoftwareEnhancementPackage">
            Software Enhancement
          </FormOption>
          <FormOption value="StartupGuidanceAndDevelopment">
            Startup Guidance and Development
          </FormOption>
          <FormOption
            value="unsure"
            css={css`
              color: coral;
            `}
          >
            Not sure yet
          </FormOption>
          <FormOption value="other">Something Else</FormOption>
        </FormSelect>
        {errors.serviceType && <Error>{errors.serviceType.message}</Error>}
      </InputWrapper>
      <Button type="submit" disabled={isSubmitting}>
        Request Estimation
      </Button>
    </form>
  );
};
