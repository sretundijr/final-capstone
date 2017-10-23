
import React from 'react';
import PropTypes from 'prop-types';

export default function EmailInput(props) {
  console.log(props);
  return (
    <div>
      <div>
        <input
          required
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          type="email"
          id="email-address"
          autoComplete={props.autoComplete}
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

EmailInput.defaultProps = {
  name: '',
  value: '',
  autoComplete: false,
  onChange: () => { },
};

EmailInput.propTypes = {
  name: PropTypes.string,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
