import React, { PropTypes } from 'react';

import { customerContainer } from '../../styles/advisor/questionnaire-list-style';

export default function ReturnedQuestionnaire(props) {
  const list = props.list.map((item) => {
    return (
      <ul className="customer-row" key={item.id}>
        <li className="customer-item">{item.customerName}</li>
        <li className="customer-item">{item.customerEmail}</li>
        <li className="customer-item">{item.appointmentDate}</li>
        <li className="customer-item"><button>View Questionnaire</button></li>
        <li className="customer-item"><button>Archive</button></li>
        <style jsx>{customerContainer}</style>
      </ul>
    );
  });
  return (
    <div className="container">
      <div className="customer-container">
        <ul className="header-row">
          <li className="customer-item">Name</li>
          <li className="customer-item">Email</li>
          <li className="customer-item">Appointment Date</li>
          <li className="customer-item">View</li>
          <li className="customer-item">Archive</li>
        </ul>
        <hr className="header-row" />
      </div>
      <div className="customer-container">
        {list}
      </div>
      <style jsx>{customerContainer}</style>
    </div >
  );
}

ReturnedQuestionnaire.defaultProps = {
  list: [],
};

// todo
ReturnedQuestionnaire.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
};
