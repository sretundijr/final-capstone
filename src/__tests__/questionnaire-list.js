/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import QuestionnaireList from '../components/advisor/questionnaire-list';

describe('testing the questionnaire list component', () => {
  it('should render without crashing', () => {
    shallow(<QuestionnaireList />);
  });
});
