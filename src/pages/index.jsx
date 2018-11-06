import { graphql } from 'gatsby';
import { sortBy } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
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
import { darkTheme } from '../theme';
import { toNodesWithImage } from '../util/graphql';
import { mediaQuery } from '../util/style';

const Wrapper = styled(Main)`
  background: url(img/backgrounds/moon.jpg) center bottom / contain no-repeat,
    black;
  padding-bottom: 45vw;

  ${mediaQuery.large`
    padding-bottom: 28em;
  `};
`;

function IndexPage({ clients, services, technologies, team }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
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
      </Wrapper>
    </ThemeProvider>
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
        }
      }
    }
  }
`;
