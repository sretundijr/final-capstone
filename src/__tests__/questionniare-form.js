/* global describe it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import QuestionnaireForm from '../components/advisor/questionnaire-form';

// jest.mock('../mock-list');
// import MockCustomers from '../mock-list';

// MockCustomers.mockReturnValueOnce([
//         {
//           id: Math.floor(Math.random() * 10000) + 1,
//           customerName: 'Steve Retundi',
//           customerEmail: 'steve@question.com',
//           appointmentDate: '11-11-2017',
//         },
//         {
//           id: Math.floor(Math.random() * 10000) + 1,
//           customerName: 'Christina',
//           customerEmail: 'christina@question.com',
//           appointmentDate: '12-14-2017',
//         },
//       ]);

describe('testing the questionnaire form component', () => {
  it('should render without crashing', () => {
    shallow(<QuestionnaireForm />);
  });
  const wrapper = shallow(<QuestionnaireForm />);

  describe('#set shop name', () => {
    it('should modify state of shop name', () => {
      wrapper.instance().setShopName('steves shop');
      expect(wrapper.state().shopName).toEqual('steves shop');
    });
  });

  describe('#setAdvisorName', () => {
    it('should set advisor name', () => {
      wrapper.instance().setAdvisorName('christina');
      expect(wrapper.state().advisorName).toEqual('christina');
    });
  });

  describe('#setAdvisorEmail', () => {
    it('should set advisor email', () => {
      wrapper.instance().setAdvisorEmail('steve@aol.com');
      expect(wrapper.state().advisorEmail).toEqual('steve@aol.com');
    });
  });

  describe('#setCustomerName', () => {
    it('should set customers name', () => {
      wrapper.instance().setCustomerName('steve');
      expect(wrapper.state().customerName).toEqual('steve');
    });
  });

  describe('#setCustomerEmail', () => {
    it('should set customer email', () => {
      wrapper.instance().setCustomerEmail('steve@aol.com');
      expect(wrapper.state().customerEmail).toEqual('steve@aol.com');
    });
  });
  describe('#setAppointmentDate', () => {
    it('should set appointment date', () => {
      wrapper.instance().setAppointmentDate('10-25-2017');
      expect(wrapper.state().appointmentDate).toEqual('10-25-2017');
    });
  });
  describe('#text input onChange', () => {
    it('should simulate onChange event', () => {
      const onChange = () => {};
      const shallowWrapper = shallow(<QuestionnaireForm onChange={onChange} />);
      expect(shallowWrapper.find('#shop-name').prop('onChange')).toBeInstanceOf(Function);
    });
  });
});
