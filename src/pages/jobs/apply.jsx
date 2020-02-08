import React from 'react';
import { GlobalNavigation, JobForm, JobsHeader } from '../../components';
import { JobsMain } from '../../components/organisms/jobs/common';

function Apply() {
  return (
    <JobsMain>
      <GlobalNavigation />
      <JobsHeader small />
      <JobForm />
    </JobsMain>
  );
}

export default Apply;
