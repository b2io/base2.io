import styled from '@emotion/styled';

import theme, { colors, spacing } from '~/theme';

export const Button = styled.button`
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

export const Error = styled.p`
  color: ${colors.coral};
  margin: 0;
`;

export const FormInput = styled.input`
  border: none;
  border-bottom: 1px solid ${colors.offWhite};
  border-radius: 4px 4px 0 0;
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

export const InputWrapper = styled.div`
  min-height: 10rem;
`;

export const Label = styled.label({
  ...theme.textVariants.h3,
  display: 'block',
  marginBottom: spacing.xxxs,
});

export const ThankYouMessage = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
