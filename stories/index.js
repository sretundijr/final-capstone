import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import DateInput from '../src/components/advisor/date-input';
import QuestionnaireList from '../src/components/advisor/questionnaire-list';

import MockList from '../src/mock-list';

storiesOf('Date Input', module).add('to Storybook', () => <DateInput showApp={linkTo('Button')} />);

storiesOf('Questionnaire list', module)
  .add('Empty state', () => <QuestionnaireList />)
  .add('props list', () => <QuestionnaireList list={MockList()} />)
  .add('mobile styling', () => <div style={{ width: 320 }}><QuestionnaireList list={MockList()} /></div >);

