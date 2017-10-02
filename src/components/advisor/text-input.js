import React from 'react';

export default function TextInput(props) {
  return (
    <div>
      <div>
        <input value={props.value} onChange={props.onChange} type="text" />
      </div>
    </div>
  );
}
