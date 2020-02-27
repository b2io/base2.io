import { graphql } from 'gatsby';
import { em, rem } from 'polished';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import styled, { ThemeProvider } from 'styled-components';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { mediaQuery } from '../util/style';
import markdown from '../util/templates';

import {
  CaseStudyAside,
  Main,
  GlobalNavigation,
  P,
  Section,
} from '../components';
import { toNodesWithImage } from '../util/graphql';
import { lightTheme } from '../theme';

const CaseStudy = styled(MDXRenderer)`
  display: flex;
  flex-direction: column-reverse;
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  justify-content: center;
  margin: 0 auto;
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

const PostText = styled(P)`
  margin: 0 0 ${em('21px', '21px')};
`;

const PostContentH2 = styled.h2`
  font-size: ${rem('30px')};
  margin: ${em('36px', '34px')} 0 ${em('18px', '30px')};

  ${mediaQuery.small`
    font-size: ${rem('34px')};
    margin: ${em('42px', '34px')} 0 ${em('21px', '34px')};
  `};
`;

const PostContentH3 = styled.h3`
  font-size: ${rem('20px')};
  margin: ${em('30px', '20px')} 0 0;

  ${mediaQuery.small`
    font-size: ${rem('24px')};
    margin: ${em('36px', '24px')} 0 0;
  `};
`;

const PostContentH4 = styled.h4`
  font-size: ${rem('34px')};
  margin: ${em('36px', '34px')} 0 0;

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    margin: ${em('30px', '21px')} 0 ${em('16px', '21px')};
  `};
`;

const PostImg = styled.img`
  margin: ${em('18px', '18px')} 0;

  ${mediaQuery.small`
    margin: ${em('21px', '21px')} 0;
  `};
`;

const renderMarkdown = raw =>
  markdown(raw, {
    h2: PostContentH2,
    h3: PostContentH3,
    h4: PostContentH4,
    img: PostImg,
    p: PostText,
  });

function CaseStudyTemplate({ caseStudy }) {
  const { client, highlights, link, project, technologies } = caseStudy;

  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <GlobalNavigation />
        <CaseStudy>
          <CaseStudyAside
            client={client.name}
            highlights={highlights}
            link={link}
            project={project}
            technologies={technologies}
          />
          <CaseStudyContent {...caseStudy} />
        </CaseStudy>
      </Main>
    </ThemeProvider>
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
    children: PropTypes.node.isRequired,
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
      children: renderMarkdown(data.caseStudy.internal.content),
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
      internal {
        content
      }
    }
  }
`;
