import React from 'react';

import { flexContainer } from '../../styles/questionnaire/shared-styles';

export default function (props) {
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
      <style jsx>{flexContainer}</style>
    </div >
  );
}
