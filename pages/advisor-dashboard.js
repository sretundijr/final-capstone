import React from 'react';
import Head from 'next/head';

import QuestionnaireList from '../src/components/advisor/questionnaire-list';
import QuestionnaireForm from '../src/components/advisor/questionnaire-form';
import NavBar from '../src/components/advisor/nav-bar';

import { advisorDash } from '../src/styles/advisor-dashboard';

import MockList from '../src/mock-list';

export default function AdvisorDashboard() {
  return (
    <div>
      <Head>
        <title>Advisor Dashboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="page">
        <div className="advisor-nav">
          <NavBar />
        </div>
        <div id="questionnaire-form" />
        <div className="form-container" >
          <h4 className="title">Send a Questionnaire</h4>
          <QuestionnaireForm />
        </div>
        <div id="returned" />
        <div className="list-container">
          <h4 className="title">Returned Questionnaires</h4>
          <QuestionnaireList list={MockList()} />
        </div>
        <div className="footer" />
      </div>
      <style jsx>{advisorDash}</style>
    </div >
  );
}
