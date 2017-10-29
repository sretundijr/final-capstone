
import React from 'react';
import PropTypes from 'prop-types';

// todo work out the view and archive functionality
export default function ReturnedQuestionnaire(props) {
  const list = props.list.map((item) => {
    return (
      <ul className="customer-row" key={item.id}>
        <li className="customer-item name">{item.customerName}</li>
        <li className="customer-item">{item.customerEmail}</li>
        <li className="customer-item">{item.appointmentDate}</li>
        <li className="customer-item">
          <button onClick={() => props.onClick(item.customerName)}>View Questionnaire</button>
        </li>
        <li className="customer-item"><button>Archive</button></li>
        <style jsx>{`
          .customer-item {
            margin: 10px;
            float: left;
            width: 18%;
          }
          .customer-row {
            text-align: center;
            max-width: 100%;
            width: 1000px;
            list-style: none;
            clear: left; 
          }
          button {
            height: 35px;
            border: none;
            background: #576E86;
            color: #fff;
            border-radius: 5px;
          }
          @media only screen and (max-width: 900px) {
            .customer-row {
              border: 5px solid #53687E;         
              margin-left: -20px;
              text-align: left;
              width: 100%;
            }
            .customer-item {
              width: 100%;
              margin-top: 10px;
              float: none;
            }
          }
        `}</style>
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
      <style jsx>{`
        .container {
          background: #495C70;
          border: 5px solid #53687E;
          color: #fff;
          display: flex;
          flex-direction: column;
        }
        .customer-container {
          align-self: center;
        }
        .header-row {
          text-align: center;
          max-width: 100%;
          width: 1000px;
          list-style: none;
          clear: left; 
        }
        .customer-item {
          margin: 10px;
          float: left;
          width: 18%;
        }
        .customer-row {
          text-align: center;
          max-width: 100%;
          width: 1000px;
          list-style: none;
          clear: left; 
        }
        @media only screen and (max-width: 900px) {
          .header-row{
            display: none;
          }
          .customer-row {
            border: 5px solid #53687E;         
            margin-left: -20px;
            text-align: left;
            width: 100%;
          }
          .customer-item {
            width: 100%;
            margin-top: 10px;
            float: none;
          }
        }
      `}</style>
    </div >
  );
}

ReturnedQuestionnaire.defaultProps = {
  list: [],
};

ReturnedQuestionnaire.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
};
