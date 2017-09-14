import React from 'react';
import Head from 'next/head';

import WelcomeHeader from '../src/components/questionaire_components/welcome-client';
import IssueCount from '../src/components/questionaire_components/issue-count';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <WelcomeHeader />
    <IssueCount />
  </div>
);
