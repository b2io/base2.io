import css from '@emotion/css';
import styled from '@emotion/styled';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { Children, cloneElement, FC, ReactElement } from 'react';

import { Heading, Link, Text } from '~/components';
import { atMinXL, cssClamp, spacing } from '~/theme';

export type CaseStudyProps = NextImageProps & {
  alt: string;
  caseStudy: string;
  client: string;
  href: string;
  src: Exclude<NextImageProps['src'], string | StaticImageData>;
};

export const CaseStudyNavContainer = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;

  margin-top: ${spacing.xxl2};
  object-fit: contain;

  ${atMinXL} {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    margin-bottom: ${spacing.xxl3};
  }
`;

export const CaseStudyContainer = styled.div`
  margin-bottom: 9rem;
  position: relative;
  width: ${cssClamp([13.5, 'mobile'], [29.125, 'desktop'])};

  &:nth-of-type(2) article {
    right: unset;
    ${atMinXL} {
      right: -3rem;
      text-align: right;
    }
  }
  ${atMinXL} {
    margin-bottom: 0;
  }
`;

export const CaseStudyInfo = styled.article`
  left: 50%;
  /* margin-left: 2rem; */
  margin-top: -3rem;
  position: absolute;
  transform: translateX(-50%);
  z-index: 2;
  ${atMinXL} {
    left: -6rem;
    margin-left: 0;
    margin-top: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const OverlayWrapper = styled.div`
  position: relative;
`;

export const Overlay = styled.div`
  background: rgba(35, 35, 100, 0.8);
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const CaseStudy: FC<CaseStudyProps> = ({
  client,
  href,
  caseStudy,
  alt,
  src,
}) => {
  return (
    <CaseStudyContainer>
      <OverlayWrapper>
        <Overlay />
        <NextImage
          alt={alt}
          css={css`
            position: absolute;
          `}
          src={src}
        />
      </OverlayWrapper>
      <CaseStudyInfo>
        <Text as="span">{client}</Text>
        <Heading
          as="h2"
          color="coral"
          css={css`
            font-size: 1.875rem;
            line-height: 1.25;
            ${atMinXL} {
              font-size: 3.125rem;
            }
          `}
          variant="h2"
        >
          {caseStudy}
        </Heading>
        <Link
          css={css`
            width: max-content;
          `}
          href={href}
          variant="CTA"
        >
          Explore case study
        </Link>
      </CaseStudyInfo>
    </CaseStudyContainer>
  );
};

export const CaseStudyNav: FC = ({ children, ...props }) => {
  return (
    <CaseStudyNavContainer {...props}>
      {Children.map(children, (child) =>
        cloneElement(child as ReactElement<any>, { as: 'div' }),
      )}
    </CaseStudyNavContainer>
  );
};