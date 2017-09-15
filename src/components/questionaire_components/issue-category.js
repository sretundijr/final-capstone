import React from 'react';

import { flexContainer } from '../../styles/shared-styles';
import mockQuestionaire from '../../mock-questionaire';

export default function () {
  const issueSelection = Object.keys(mockQuestionaire())
    .map(key => <option key={key.toString()} value={key}>{key}</option>);

  return (
    <div>
      <div style={flexContainer}>
        <h3>Please select a category</h3>
      </div>
      <div style={flexContainer}>
        <select name="" id="">
          {issueSelection}
        </select>
      </div>
    </div>
  );
}
