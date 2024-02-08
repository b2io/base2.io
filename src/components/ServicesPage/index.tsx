import { Layout, PageHero, SectionContainer } from '~/components';

import { EstimationForm } from './EstimationForm';
import { OurServices } from './OurServices';

export const ServicesPage: React.FC = () => {
  return (
    <Layout title="Services" description="Services">
      <PageHero
        alt="team members of Base Two"
        imageProps={{ height: 546, width: 1280 }}
        src={'/services/services-hero-xl.jpg'}
        text="Partnerships are the core of how we work."
      />
      <SectionContainer>
        <OurServices />
        <EstimationForm />
      </SectionContainer>
    </Layout>
  );
};
