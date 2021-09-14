import type { FC } from 'react';

import { Heading } from '~/components';

type CaseStudyProps = {
  client: string;
};
export const CaseStudy: FC<CaseStudyProps> = ({ client }) => {
  return (
    <Heading as="h1" variant="h1">
      {client}
    </Heading>
  );
};
