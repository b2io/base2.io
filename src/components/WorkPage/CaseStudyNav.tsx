import css from '@emotion/css';
import { Children, cloneElement, ElementType, FC, ReactElement } from 'react';

import { Heading, Link, Text } from '~/components';

export type CaseStudyProps = {
  client: string;
  href: string;
  imgSrc: string;
  caseStudyLink: string;
  caseStudyName: string;
};

export const CaseStudy: FC<CaseStudyProps> = ({
  client,
  href,
  caseStudyLink,
  caseStudyName,
}) => {
  return (
    <article
      css={css`
        background: gray;
      `}
    >
      <Text as="span">{client}</Text>
      <Heading>{caseStudyName}</Heading>
      <Link href={href} variant="CTA">
        {caseStudyLink}
      </Link>
    </article>
  );
};
