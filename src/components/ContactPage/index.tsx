import styled from '@emotion/styled';
import type { FC } from 'react';

import { Layout } from '~/components';
import { atMinDesktop, atMinTablet, atMinXL } from '~/theme';

import { PageHero } from '../PageHero';

const ContactPageHero = styled(PageHero)`
  h1 {
    ${atMinTablet} {
      max-width: 48rem;
    }
    /* ${atMinXL} {
      left: 40%;
    }
    ${atMinDesktop} {
      left: 50%;
    } */
  }
`;

export const ContactPage: FC = () => {
  return (
    <Layout>
      <ContactPageHero
        alt="person staring at a computer"
        imgSources={[
          ['largeDesktop', '/contact/contact-hero-xlarge.jpg'],
          ['tablet', '/contact/contact-hero-medium.jpg'],
          ['xl', '/contact/contact-hero-large.jpg'],
          ['xs', '/contact/contact-hero-small.jpg'],
        ]}
        text="Like what you see? Let's get started."
      />
    </Layout>
  );
};
