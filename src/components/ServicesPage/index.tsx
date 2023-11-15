

import { Layout } from '~/components';

import {SERVICES} from "../ServicesPage/services"

interface ServiceDataProps {
  services: {
    sectionTitle: string;
    packages: {
      packageTitle: string;
      details: string [];
    }[];
  }[];
}

const ServicesPage: React.FC<ServiceDataProps> = () => {

  return (
    <Layout description={'B2 Services'} title={'B2 Services'}>
    <h1>
Base Two Services
    </h1>
    {SERVICES.map((service,index) => {
      return (
        <div key={index}>
          <h2>{service.sectionTitle}</h2>
          {service.packages.map((packageItem, index) => {
            return (
              <div key={index}>
                <h1>{packageItem.packageTitle}</h1>
                {packageItem.details.map((detail, detailIndex) => {
                  return (
                    <div key={detailIndex} >
                      <p>{detail}</p>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      )
    })}
    </Layout>
  );
};


export default ServicesPage;
