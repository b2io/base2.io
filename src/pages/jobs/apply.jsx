import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import { GlobalNavigation, JobForm, JobsHeader, Main } from '../../components';

function Apply() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeader small />
        <JobForm />
      </Main>
    </ThemeProvider>
  );
}

export default Apply;
