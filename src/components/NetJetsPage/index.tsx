import type { FC } from 'react';

import { CaseStudy } from '~/components';

export const NetJetsPage: FC = () => {
  return (
    <CaseStudy
      alt="NetJets"
      client="Fly Netjets"
      src={require('./images/netjets-hero.jpg')}
      introText="With its wide range of highly personalized, upscale flight services,
      NetJets offers luxury clients the moon. One indulgence was missing,
      though: a sleek mobile app that lets them book flights, access
      high-speed internet from midair, and even control cabin temperature at
      the touch of a button."
    />
  );
};
