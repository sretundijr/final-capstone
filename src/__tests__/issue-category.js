/* global describe expect it jest */

import React from 'react';
import { shallow, mount } from 'enzyme';

import IssueCategory from '../components/questionaire/issue-category';

describe('testing issue category component', () => {
  it('should render without crashing', () => {
    shallow(<IssueCategory />);
  });
});

