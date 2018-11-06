import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalNavigation, JobsHeader, Main } from '../../components';
import { darkTheme } from '../../theme';

function JobsPage() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeader />
      </Main>
    </ThemeProvider>
  );
}

export default JobsPage;
