
import React from 'react';
import PropTypes from 'prop-types';

export default function TextInput(props) {
  // console.log(props);
  return (
    <div>
      <div>
        <input name={props.name} required value={props.value} onChange={props.onChange} type="text" />
      </div>
      <style jsx>{`
        input {
          font-family: Georgia, Times New Roman, Times, serif;
          font-size: 16px;
          color: #fff;
          background: transparent;
          border: none;
          border-bottom: 1px solid #83A4C5;
          width: 275px;
          outline: none;
          padding: 0px 0px 0px 0px;
          margin-top: 10px;
        }
        input:focus {
          border-bottom: 1px dashed #D9FFA9;
        }
      `}</style>
    </div>
  );
}

TextInput.defaultProps = {
  name: '',
  value: '',
  onChange: () => { },
};

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
