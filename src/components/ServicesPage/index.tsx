

import { css } from '@emotion/react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState } from 'react';


import { Heading, Layout,  Text, } from '~/components';


import {SERVICES} from "../ServicesPage/services"


interface ServiceDataProps {
  services: {
    index: number;
    sectionTitle: string;
    packages: {
      index: number;
      description: string;
      packageTitle: string;
      details: string [];
    }[];
  }[];
}


const ServicesPage: React.FC<ServiceDataProps> = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleSection = (index: SetStateAction<number | null>) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <Layout description={'B2 Services'} title={'B2 Services'}>
      <Heading as="h1" variant="h1">
        Base Two Services
      </Heading>
      {SERVICES.map((service, index) => (
        <div key={index}>
          <div css={{ alignItems: 'center', display: 'flex' }}>
            <div
              onClick={() => toggleSection(index)}
              css={css`cursor: pointer; display: flex; align-items: center;`}
            >
              <Heading as="h2" variant="h2">
                {service.sectionTitle}
              </Heading>
              {activeSection === index ? (
                <ExpandLessIcon style={{ cursor: 'pointer', marginLeft: '16px' }} />
              ) : (
                <ExpandMoreIcon style={{ cursor: 'pointer', marginLeft: '16px' }} />
              )}
            </div>
          </div>
          {index < SERVICES.length - 1 && <hr />}
          {activeSection === index && (
            <div>
              {service.packages.map((packageItem, packageIndex) => (
                <div key={packageIndex}>
                  <Heading as="h3" variant="h3" color="coral">
                    {packageItem.packageTitle}
                  </Heading>
                  <Text>{packageItem.description}</Text>
                  {packageItem.details.map((detail, detailIndex) => (
                    <ul key={detailIndex}>
                      <li>{detail}</li>
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </Layout>
  );
};




export default ServicesPage;
