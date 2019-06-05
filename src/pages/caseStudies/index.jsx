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
import { toNodes } from '../../util/graphql';
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
              excerpt={caseStudy.excerpt}
              featureImg={caseStudy.logo}
              imgAlt={caseStudy.client}
              key={caseStudy.id}
              path={caseStudy.path}
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
  const caseStudies = toNodes(data.caseStudies).map(node => {
    const { frontmatter } = node;

    return {
      client: frontmatter.client,
      excerpt: frontmatter.excerpt,
      logo: frontmatter.logo,
      id: frontmatter.path,
      path: `/caseStudies/${frontmatter.path}`,
      project: frontmatter.project,
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
    caseStudies: allMarkdownRemark(
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
            client
            excerpt
            logo
            path
            project
          }
        }
      }
    }
  }
`;
