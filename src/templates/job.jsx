import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { mapProps } from 'recompose';
import { ThemeProvider } from 'styled-components';
import {
  GlobalNavigation,
  JobDescription,
  JobsHeader,
  Main,
} from '../components';
import { darkTheme } from '../theme';

function JobTemplate({ job }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeader small />
        <JobDescription job={job} />
      </Main>
    </ThemeProvider>
  );
}

JobTemplate.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.node.isRequired,
    description: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

function mapPropsToProps({ data }) {
  return {
    job: data.job,
  };
}

export default mapProps(mapPropsToProps)(JobTemplate);

export const pageQuery = graphql`
  query JobTemplateQuery($id: String!) {
    job: jobsJson(id: { eq: $id }) {
      id
      description
      position
      sections {
        bullets
        description
        header
        id
        isSubHeading
      }
    }
  }
`;
