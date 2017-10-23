
import React from 'react';
import PropTypes from 'prop-types';

export default function DateInput(props) {
  return (
    <div>
      <div>
        <input
          required
          onChange={props.onChange}
          value={props.value}
          type="date"
        />
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

DateInput.defaultProps = {
  value: '',
  onChange: () => { },
};

DateInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

