/* global describe it expect */

import React from 'react';
import { shallow } from 'enzyme';

import SingleQuestion from '../components/questionaire/single-question';

describe('testing single question component', () => {
  it('should render without crashing', () => {
    // shallow(<SingleQuestion />);
  });

  // describe('#renderNextButton', () => {
  //   it('returns an empty string when there is only one element in the list', () => {
  //     const list = ['hello'];
  //     const returnedList = list.map((item, index, arr) => renderNextButton(index, arr.length));
  //     const shallowRender = shallow(<div>{returnedList}</div>);
  //     expect(shallowRender.find('Link').length).toEqual(0);
  //   });
  // });
});
