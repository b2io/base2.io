import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import { GlobalNavigation, JobsHeader, Main } from '../../components';

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
