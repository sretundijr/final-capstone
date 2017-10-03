import React, { PropTypes } from 'react';

import { customerTable, title } from '../../styles/questionnaire-list-style';

export default function ReturnedQuestionnaire(props) {
  const list = props.list.map((item) => {
    return (
      <tr key={item.customerName}>
        <td className="">{item.customerName}</td>
        <td className="">{item.customerEmail}</td>
        <td className="">{item.appointmentDate}</td>
        <td><button>View Questionnaire</button></td>
      </tr>
    );
  });
  return (
    <div>
      <h4 className="title">Returned Questionnaires</h4>
      <table className="customer-table">
        <thead>
          <tr>
            <th className="">Customer Name</th>
            <th className="">Customer Email</th>
            <th className="">Appointment Date</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
      <style jsx>{title}</style>
      <style jsx>{customerTable}</style>
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
