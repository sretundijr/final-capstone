
import React from 'react';

// helper
import completedQuestionnaire from '../src/mock-completed-quesitons';

export default class ViewCompletedQuestionnaire extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customerLink: '',
      customerName: '',
      returnedQuestionnaire: {},
    };
  }
  // todo this might change when server is implemented
  async componentDidMount() {
    console.log(this.props.url.pathname);
    const query = this.props.url.query;
    const link = `${this.props.url.pathname}?customerName=${query.customerName}`;
    this.setState({
      customerLink: link,
      customerName: query.customerName,
      returnedQuestionnaire: completedQuestionnaire(),
    });
  }
  questionAndAnswerElement() {
    console.log(this.state.customerLink);
    const element = Object.keys(this.state.returnedQuestionnaire).map((key) => {
      return (
        <div key={key}>
          <h4 className="questions">{key}</h4>
          <p className="answers">{this.state.returnedQuestionnaire[key]}</p>
          <style jsx>{`
          .questions {
          }
          .answers {
          }
        `}
          </style>
        </div>
      );
    });
    return element;
  }
  render() {
    return (
      <div className="container">
        <h4>Customer Name</h4>
        <p>{this.state.customerName}</p>
        {this.questionAndAnswerElement()}
        <style jsx>{`
          .container {
            padding: 20px;
            text-align: center;
            height: auto;
            width: 350px;
            border: 1px solid black;
          }
          `}
        </style>
      </div>
    );
  }
}
