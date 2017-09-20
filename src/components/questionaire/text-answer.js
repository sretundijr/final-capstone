import React from 'react';

import { flexContainer, contentContainer } from '../../styles/shared-styles';

export default function (props) {
  return (
    <div className="flex-container">
      <div className="content-container">
        <label htmlFor="single-answer">Please enter your answer</label>
        <input id="single-answer" type="text" />
      </div>
      <style jsx>{flexContainer}</style>
      <style jsx>{contentContainer}</style>
    </div>
  );
}
