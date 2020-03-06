import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import { em, rem } from 'polished';
import styled, { ThemeProvider } from 'styled-components';
import {
  ContentSummary,
  PageHeader,
  GlobalNavigation,
  Main,
  UL,
} from '../../components';
import { lightTheme } from '../../theme';
import { toNodes, toNodesWithImage } from '../../util/graphql';
import { mediaQuery } from '../../util/style';

const PostList = styled(UL)`
  list-style-type: none;
  font-size: ${rem('18px')};
  font-weight: 400;
  line-height: 1.5;
  max-width: 1300px;
  margin: 0 auto;
  padding: ${em('36px', '18px')} ${em('36px', '18px')} 0;

  ${mediaQuery.small`
    font-size: ${rem('21px')};
    line-height: 1.5;
    padding: ${em('75px', '21px')} ${em('42px', '21px')} 0;
  `};
`;

function CaseStudyIndex({ caseStudies }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Main>
        <GlobalNavigation />
        <PageHeader
          title="Our Work"
          tagline="Collaboration is what we do best"
          img="/img/telescope-constellation.png"
          imgAlt="Telescope constellation pointing toward space"
        />
        <PostList>
          {caseStudies.map(caseStudy => (
            <ContentSummary
              img={caseStudy.client.image}
              imgAlt={caseStudy.client.name}
              key={caseStudy.id}
              path={caseStudy.path}
              summary={caseStudy.summary}
              title={caseStudy.project}
            />
          ))}
        </PostList>
      </Main>
    </ThemeProvider>
  );
}

CaseStudyIndex.defaultProps = {};

CaseStudyIndex.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

function mapPropsToProps({ data }) {
  const clientIdToClient = toNodesWithImage(data.clients).reduce(
    (hashMap, { id, image, name }) => ({
      ...hashMap,
      [id]: { image, name },
    }),
    {},
  );

  const caseStudies = toNodes(data.caseStudies).map(node => {
    const { frontmatter } = node;

    return {
      client: clientIdToClient[frontmatter.clientId],
      id: frontmatter.path,
      path: `/case-studies/${frontmatter.path}`,
      project: frontmatter.project,
      summary: frontmatter.summary,
    };
  });

  return { caseStudies };
}

CaseStudyIndex.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.node.isRequired,
    }),
  ).isRequired,
};

export default mapProps(mapPropsToProps)(CaseStudyIndex);

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
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

    caseStudies: allMdx(
      sort: { fields: [fileAbsolutePath], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/_content/caseStudies/" }
        frontmatter: { path: { ne: null } }
      }
    ) {
      edges {
        node {
          fileAbsolutePath
          frontmatter {
            clientId
            summary
            path
            project
          }
        }
      }
    }
  }
`;
