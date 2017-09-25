import React, { PropTypes } from 'react';

import { flexContainer } from '../../styles/shared-styles';

export default function IssueCategory(props) {
  const issueSelection = props.categories
    .map(item =>
      <option key={item.issueType.toString()} value={item.issueType}>{item.issueType}</option>);
  return (
    <div>
      <div className="flex-container">
        <h3>Please select a category</h3>
      </div>
      <div className="flex-container">
        <select name="" id="" onChange={props.onChange}>
          <option value="default">Select One</option>
          {issueSelection}
        </select>
      </div>
      <style jsx>{flexContainer}</style>
    </div>
  );
}

IssueCategory.defaultProps = {
  categories: [],
};

IssueCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    question: PropTypes.string,
    answer: PropTypes.arrayOf(PropTypes.string),
    MultipleChoice: PropTypes.bool,
  })),
  onChange: PropTypes.func.isRequired,
};
