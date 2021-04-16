import css from '@emotion/css';
import styled from '@emotion/styled';
import NextImage from 'next/image';
import { FC } from 'react';
import { Heading, Link, Text } from '~/components';
import { cssClamp, atMinMd, atMinLg, atMinXL } from '~/theme';

const PaneContentContainer = styled.div`
  position: absolute;
  top: 62%;
  left: 8%;
  max-width: 17.25rem;
  z-index: 2;

  ${atMinMd} {
    top: 42%;
    left: 0;
    max-width: 31.25rem;
  }
  ${atMinLg} {
    left: 10%;
  }
  ${atMinXL} {
    max-width: 35rem;
  }
`;

const CalloutContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: -14.5%;

  ${atMinMd} {
    left: 15%;
    top: -30%;
  }
  ${atMinXL} {
    left: 30%;
    top: -20%;
  }
`;

const Callout = styled(Heading)`
  margin: 0 0 0 2.75rem;
  line-height: 1;
  ${atMinMd} {
    // TODO: remove once the update is in
    font-size: 3.125rem;
  }
`;

// Yes, it's empty but that will probably change. Delete if it doesn't.
const CalloutSpan = styled(Heading)``;

const ThreeWord = styled(Text)`
  margin-bottom: 0.75rem;
`;

const Misson = styled(Text)`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Description = styled(Text)`
  margin-bottom: 2.5rem;
`;

const PaneLink = styled(Link)`
  margin-top: 0.25rem;
`;

const PaneImageContainer = styled.div`
  height: ${cssClamp([20.188, 'xs'], [26.625, 'md'], [50, 'lg'])};
  /* left: calc(50% - 50vw - ${cssClamp([5.8545, 'xs'], [0, 'md'])}); */
  left: calc(50% - 50vw - 5.8545rem);
  position: relative;
  width: ${cssClamp([26.042, 'xs'], [34.313, 'md'], [64.5, 'lg'])};
  z-index: 1;
  ${atMinMd} {
    left: calc(50% - 5vw);
  }
`;

export const BuiltForResultsPane: FC = () => {
  return (
    <section
      css={css`
        position: relative;
        // DELETE THIS: just for development purposes
        margin-top: 20rem;
        margin-bottom: 40rem;
        // DELETE THIS: just for development purposes
      `}
    >
      <CalloutContainer>
        <Callout as="h2" variant="body" color="coral">
          Built for{' '}
        </Callout>
        <CalloutSpan as="span" variant="hero">
          results.
        </CalloutSpan>
      </CalloutContainer>
      <PaneContentContainer>
        <ThreeWord as="h4" variant="body">
          Function. Form. ROI.
        </ThreeWord>
        <Misson as="h3" variant="h2">
          Software that works? That&apos;s a given.
        </Misson>
        <Description variant="h3" as="p">
          Let&apos;s create something that solves your biggest challenge - and
          continues to drive value over time.
        </Description>
        <PaneLink href="/work" variant="CTA">
          See our work
        </PaneLink>
      </PaneContentContainer>
      <PaneImageContainer>
        <NextImage
          alt="man at computer"
          src="/home/results.jpg"
          layout="fill"
        />
      </PaneImageContainer>
    </section>
  );
};

export default BuiltForResultsPane;
