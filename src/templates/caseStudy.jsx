import { MDXProvider } from '@mdx-js/react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import {
  CaseStudyAside,
  CaseStudyFooter,
  ClientHeader,
  GlobalNavigation,
  Main,
  Section,
} from '../components';
import { lightTheme } from '../theme';
import { toNodesWithImage } from '../util/graphql';
import { mediaQuery } from '../util/style';
import { defaultComponentMap } from '../util/templates';

const CaseStudy = styled(Section)`
  display: flex;
  flex-direction: column-reverse;
  font-size: ${rem('18px')};
  font-weight: 400;
  justify-content: center;
  line-height: 1.5;
  margin: 0 auto;
  padding-bottom: 3rem;
  padding-top: ${em('36px', '18px')};

  img {
    max-width: 100%;
  }

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    padding-top: ${em('75px', '21px')};
  `};

  ${mediaQuery.medium`
    flex-direction: row;
  `};
`;

const CaseStudyContent = styled.article`
  max-width: 720px;

  img {
    display: block;
    margin: 0 auto;
    max-height: 400px;
    max-width: 100%;
  }
`;

function CaseStudyTemplate({ caseStudy }) {
  const { client, highlights, link, project, technologies } = caseStudy;
  return (
    <MDXProvider components={defaultComponentMap}>
      <ThemeProvider theme={lightTheme}>
        <Main>
          <GlobalNavigation />
          <ClientHeader {...client} project={project} />
          <CaseStudy>
            <CaseStudyAside
              client={client.name}
              highlights={highlights}
              link={link}
              project={project}
              technologies={technologies}
            />
            <CaseStudyContent {...caseStudy}>
              <MDXRenderer>{caseStudy.body}</MDXRenderer>
            </CaseStudyContent>
          </CaseStudy>
          <CaseStudyFooter />
        </Main>
      </ThemeProvider>
    </MDXProvider>
  );
}

CaseStudyTemplate.propTypes = {
  caseStudy: PropTypes.shape({
    client: PropTypes.shape({
      id: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    highlights: PropTypes.array.isRequired,
    link: PropTypes.string,
    project: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    technologies: PropTypes.array.isRequired,
    body: PropTypes.node.isRequired,
  }).isRequired,
};

function mapPropsToProps({ data }) {
  const client = toNodesWithImage(data.clients).find(
    c => c.id === data.caseStudy.frontmatter.clientId,
  );

  const technologyIdToLogo = toNodesWithImage(data.companyTechnologies).reduce(
    (hashMap, { id, image, name }) => ({
      ...hashMap,
      [id]: { image, name },
    }),
    {},
  );

  return {
    caseStudy: {
      ...data.caseStudy.frontmatter,
      client,
      technologies: data.caseStudy.frontmatter.technologies.map(
        tech => technologyIdToLogo[tech],
      ),
      body: data.caseStudy.body,
    },
  };
}

export default mapProps(mapPropsToProps)(CaseStudyTemplate);

export const pageQuery = graphql`
  query CaseStudyTemplateQuery($id: String!) {
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

    companyTechnologies: allTechnologiesJson {
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

    caseStudy: mdx(id: { eq: $id }) {
      frontmatter {
        clientId
        highlights
        link
        path
        project
        summary
        technologies
      }
      body
    }
  }
`;
