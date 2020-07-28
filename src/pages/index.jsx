import { graphql } from 'gatsby';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import Helmet from 'react-helmet';
import {
  ContactUs,
  Clients,
  GlobalNavigation,
  Hero,
  Main,
  ServiceList,
  Team,
  Technologies,
} from '../components';
import { toNodesWithImage } from '../util/graphql';
import Footer from '../components/molecules/Footer';

function IndexPage({ clients, services, technologies, team }) {
  return (
    <Main>
      <Helmet>
        {/* Primary Meta Tags  */}
        <title>Base Two</title>
        <meta content="Base Two" name="title" />
        <meta
          content="We Implement engaging websites and applications"
          name="description"
        />

        {/* Open Graph / Facebook  */}
        <meta content="website" property="og:type" />
        <meta content="https://www.base2.io/" property="og:url" />
        <meta content="Base Two" property="og:title" />
        <meta
          content="We Implement engaging websites and applications"
          property="og:description"
        />
        <meta content="/static/img/planet-earth.jpg" property="og:image" />

        {/* Twitter */}
        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://www.base2.io/" property="twitter:url" />
        <meta content="Base Two" property="twitter:title" />
        <meta
          content="We Implement engaging websites and applications"
          property="twitter:description"
        />
        <meta content="/static/img/planet-earth.jpg" property="twitter:image" />
      </Helmet>
      <GlobalNavigation />
      <Hero />
      <ServiceList id="services">
        {services.map(service => (
          <ServiceList.Item {...service} key={service.id} />
        ))}
      </ServiceList>
      <Technologies technologies={technologies} />
      <Clients clients={clients} />
      <Team team={sortBy(team, ['lastName'])} />
      <ContactUs />
      <Footer />
    </Main>
  );
}

IndexPage.propTypes = {
  clients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      imgAlt: PropTypes.string.isRequired,
      heading: PropTypes.string.isRequired,
      subheading: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
      image: PropTypes.shape({}).isRequired,
      lastName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

function mapPropsToProps({ data }) {
  return {
    clients: toNodesWithImage(data.clients),
    services: toNodesWithImage(data.services),
    technologies: toNodesWithImage(data.technologies),
    team: toNodesWithImage(data.team),
  };
}

export default mapProps(mapPropsToProps)(IndexPage);

export const pageQuery = graphql`
  query IndexPageQuery {
    clients: allClientsJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
    services: allServicesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          imgAlt
          heading
          subheading
          description
        }
      }
    }
    technologies: allTechnologiesJson {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          name
        }
      }
    }
    team: allTeamJson(filter: { active: { eq: true } }) {
      edges {
        node {
          id
          image {
            childImageSharp {
              sizes {
                ...GatsbyImageSharpSizes_withWebp_noBase64
              }
            }
          }
          name
          lastName
          title
          url
        }
      }
    }
  }
`;
