import React from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../theme';
import { GlobalNavigation, JobsHeader, Main } from '../../components';

function Apply() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Main>
        <GlobalNavigation />
        <JobsHeader small />
      </Main>
    </ThemeProvider>
  );
}

export default Apply;
