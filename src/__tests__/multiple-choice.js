/* global describe it */

import React from 'react';
import { shallow } from 'enzyme';

import MultipleChoice from '../components/questionaire/multiple-choice';

describe('test the multiple choice component', () => {
  it('should render without crashing', () => {
    shallow(<MultipleChoice />);
  });

  // describe('#onChange', () => {
  //   it('simulate on change events', () => {
  //     const callback = jest.fn();
  //     const fullRender = mount(<MultipleChoice onChange={callback} />);
  //     console.log(fullRender.find('input').nodes);
  //     fullRender.find('input').simulate('change');
  //     expect(callback).toHaveBeenCalled();
  //   });
  // });
});
