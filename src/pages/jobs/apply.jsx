import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import { GlobalNavigation, JobForm, JobsHeader } from '../../components';
import { JobsMain } from '../../components/organisms/jobs/common';

function Apply() {
  return (
    <ThemeProvider theme={darkTheme}>
      <JobsMain>
        <GlobalNavigation />
        <JobsHeader small />
        <JobForm />
      </JobsMain>
    </ThemeProvider>
  );
}

export default Apply;
