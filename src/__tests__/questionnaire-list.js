/* global describe it expect */

import React from 'react';
import { shallow, mount } from 'enzyme';

import QuestionnaireList from '../components/advisor/questionnaire-list';

describe('testing the questionnaire list component', () => {
  it('should render without crashing', () => {
    shallow(<QuestionnaireList />);
  });

  describe('#map props', () => {
    it('render li s for customers', () => {
      const customerList = [
        {
          id: 1,
          customerName: 'hi',
          customerEmail: 'hi@hello.com',
          appointmentDate: '11/11/2017',
        },
      ];
      const shallowRender = shallow(<QuestionnaireList list={customerList} />);
      expect(shallowRender.find('.name').text()).toEqual('hi');
    });
  });
});
