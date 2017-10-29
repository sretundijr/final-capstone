
import React from 'react';
import PropTypes from 'prop-types';

export default function WelcomeHeader(props) {
  return (
    <div>
      <div className="flex-container">
        <h3>Welcome {props.customerName}</h3>
      </div>
      <div className="flex-container">
        <h3>
          At {props.shopName} we value your time and appericate your business
        </h3>
      </div>
      <div className="flex-container">
        <h3 className="content-container">
          The following is a brief a questionaire to help us better understand
          the issues that you are experiencing.  Please complete this questionaire
          before your appointment on {props.appointmentDate}
        </h3>
      </div>
      <style jsx>{`
        .flex-container { 
          display: flex; 
          justify-content: center;
        }
        .content-container
        {
          text-align: center;
          max-width: 100%;
          width: 600px;
        }
      `}</style>
    </div >
  );
}

WelcomeHeader.defaultProps = {
  customerName: '',
  appointmentDate: '',
  shopName: '',
};

WelcomeHeader.propTypes = {
  customerName: PropTypes.string,
  appointmentDate: PropTypes.string,
  shopName: PropTypes.string,
};
