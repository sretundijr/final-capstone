import React from 'react';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

export default function () {
  return (
    <div>
      <div className="flex-container">
        <h3>Welcome [client name here]</h3>
      </div>
      <div className="flex-container">
        <h3>
          At [shop name here] we value your time and appericate your business
        </h3>
      </div>
      <div className="flex-container">
        <h3 className="content-container">
          The following is a brief a questionaire to help us better understand
          the issues that you are experiencing.  Please complete this questionaire
          before your appointment on [appointment date here]
        </h3>
      </div>
      <style jsx>{flexContainer}</style>
      <style jsx>{contentContainer}</style>
    </div >
  );
}
