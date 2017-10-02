import React from 'react';

export default function EmailInput(props) {
  return (
    <div>
      <div>
        <input value={props.value} onChange={props.onChange} type="email" id="email-address" />
      </div>
    </div>
  );
}
