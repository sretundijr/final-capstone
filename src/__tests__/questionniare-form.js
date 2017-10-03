/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import QuestionnaireForm from '../components/advisor/questionnaire-form';

describe('testing the questionnaire form component', () => {
  it('should render without crashing', () => {
    shallow(<QuestionnaireForm />);
  });
});
