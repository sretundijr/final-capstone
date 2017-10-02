import React from 'react';

export default function DateInput(props) {
  return (
    <div>
      <div>
        <input
          onChange={props.onChange}
          value={props.value}
          type="date"
        />
      </div>
    </div>
  );
}
