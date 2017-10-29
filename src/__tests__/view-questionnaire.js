
/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import ViewQuestionnaire from '../../pages/view-questionnaire';

describe('testing View Questionnaire component', () => {
  it('should render without crashing', () => {
    shallow(<ViewQuestionnaire />);
  });
});
