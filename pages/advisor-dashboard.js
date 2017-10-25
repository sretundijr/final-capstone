
import React from 'react';
import Head from 'next/head';

import QuestionnaireList from '../src/components/advisor/questionnaire-list';
import QuestionnaireForm from '../src/components/advisor/questionnaire-form';
import NavBar from '../src/components/advisor/nav-bar';

import { advisorDash } from '../src/styles/advisor/advisor-dashboard';

// import MockList from '../src/mock-list';
import { getCustomers, getAdvisorInfo } from '../src/api/advisor-dash';

export default class AdvisorDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      advisor: {},
    };
  }
  async componentDidMount() {
    const customers = await getCustomers();
    const advisorInfo = await getAdvisorInfo();
    console.log(customers);
    console.log(advisorInfo);
    this.setState({
      list: customers,
      advisor: advisorInfo,
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
    console.log(this.state.advisor);
    return (
      <div>
        <Head>
          <title>Advisor Dashboard</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="page">
          <div className="advisor-nav">
            <NavBar firstButton={'Send Questionnaire'} secondButton={'Returned Questionnaires'} />
          </div>
          <div id="questionnaire-form" />
          <div className="form-container" >
            <h2 className="title">Send a Questionnaire</h2>
            <QuestionnaireForm
              advisorName={this.state.advisor.advisorName}
              shopName={this.state.advisor.shopName}
              advisorEmail={this.state.advisor.advisorEmail}
            />
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
