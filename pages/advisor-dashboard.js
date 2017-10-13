
import React from 'react';
import Head from 'next/head';

import QuestionnaireList from '../src/components/advisor/questionnaire-list';
import QuestionnaireForm from '../src/components/advisor/questionnaire-form';
import NavBar from '../src/components/advisor/nav-bar';

import { advisorDash } from '../src/styles/advisor/advisor-dashboard';

// import MockList from '../src/mock-list';
import { getCustomers } from '../src/api/customer-info';

export default class AdvisorDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  async componentDidMount() {
    const customers = await getCustomers();
    this.setState({
      list: customers,
    });
  }
  getReturnedQuestionnaires() {
    getCustomers()
      .then((returnedQuestions) => {
        this.setState({
          list: returnedQuestions,
        });
      });
  }
  render() {
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
            <h2 className="title">Send a Questionnaire</h2>
            <QuestionnaireForm />
          </div>
          <div id="returned" />
          <div className="list-container">
            <h2 className="title">Returned Questionnaires</h2>
            <QuestionnaireList list={this.state.list} />
          </div>
          <div className="footer" />
        </div>
        <style jsx>{advisorDash}</style>
      </div >
    );
  }
}
