import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Heading, Layout, PageHero } from '~/components';

import { EstimationForm } from './EstimationForm';
import { OurPhilosophy } from './OurPhilosophy';
import { SERVICES } from './services';
import { Link } from '../../components/Link';
import { colors, spacing } from '../../theme';

interface ServiceDataProps {
  services: {
    index: number;
    sectionTitle: string;
    packages: {
      index: number;
      description: string;
      packageTitle: string;
      details: string[];
    }[];
  }[];
}

const TableOfContents = styled.div`
  flex: 1;

  li {
    color: ${colors.coral};
    display: flex;
    flex-direction: row;
    line-height: 1.5;
  }

  ul {
    margin-top: 0;
  }
`;

const NavLink = styled(Link)`
  color: ${colors.coral};
  font-size: 2rem;
`;

export const ServicesPage: React.FC<ServiceDataProps> = () => {
  return (
    <Layout title="Services" description="Services">
      <PageHero
        css={css`
          filter: grayscale(100%);
        `}
        alt="team members of Base Two"
        imgSources={[
          ['largeDesktop', '/services/services-hero-lg.jpg'],
          ['tablet', '/services/services-hero-md.jpg'],
          ['xl', '/services/services-hero-xl.jpg'],
          ['xs', '/services/services-hero-sm.jpg'],
        ]}
        text="Partnerships are the core of how we work."
      />
      <TableOfContents>
        <nav>
          {SERVICES.map((section, sectionIndex) => (
            <li key={sectionIndex}>
              <NavLink href={`#section-${sectionIndex + 1}`}>
                {section.sectionTitle}
              </NavLink>
            </li>
          ))}
        </nav>
      </TableOfContents>
      <OurPhilosophy>test</OurPhilosophy>
      <Heading
        as="h2"
        css={css`
          margin-top: ${spacing.xxl4};
          min-height: ${spacing.xxl1};
        `}
        variant="h2"
        color="coral"
      >
        Request a Project Estimate
      </Heading>
      <EstimationForm />
    </Layout>
  );
};
