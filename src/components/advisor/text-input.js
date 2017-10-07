import React from 'react';

export default function TextInput(props) {
  return (
    <div>
      <div>
        <input value={props.value} onChange={props.onChange} type="text" />
      </div>
      <style jsx>{`
        input {
          font-family: Georgia, Times New Roman, Times, serif;
          font-size: 16px;
          color: #fff;
          background: transparent;
          border: none;
          border-bottom: 1px dashed #83A4C5;
          width: 275px;
          outline: none;
          padding: 0px 0px 0px 0px;
          font-style: italic;   
        }
        input:focus {
          border-bottom: 1px dashed #D9FFA9;
        }
      `}</style>
    </div>
  );
}
