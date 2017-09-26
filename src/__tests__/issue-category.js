/* global describe it expect jest */

import React from 'react';
import { shallow } from 'enzyme';

import IssueCategory from '../components/questionaire/issue-category';

describe('testing issue category component', () => {
  it('should render without crashing', () => {
    shallow(<IssueCategory />);
  });

  const callback = jest.fn();
  const wrapper = shallow(<IssueCategory onChange={callback} value="Category" />);
  it('should contain a category prop', () => {
    expect(wrapper.instance().props.value).toEqual('Category');
  });
});

