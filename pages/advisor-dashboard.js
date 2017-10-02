import React from 'react';
import Head from 'next/head';

import QuestionnaireList from '../src/components/advisor/questionnaire-list';
import QuestionnaireForm from '../src/components/advisor/questionnaire-form';

import MockList from '../src/mock-list';

export default function AdvisorDashboard() {
  return (
    <div>
      <Head>
        <title>Advisor Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <QuestionnaireForm />
      <QuestionnaireList list={MockList()} />
    </div>
  );
}
