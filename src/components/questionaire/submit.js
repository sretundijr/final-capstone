
import React from 'react';
import PropTypes from 'prop-types';

export default function Submit(props) {
  return (
    <div className="flex-container">
      <div className="content-container">
        <button onClick={props.onClick} className="submit">Submit</button>
      </div>
      <style jsx>{`
        .submit {
          font-size: 20px;    
          margin: 20px;
          width: 200px;
          height: 40px;
          border: none;
          background: #576E86;
          color: #fff;
          border-radius: 5px;
          outline: none;
        }
        .flex-container { 
          display: flex; 
          justify-content: center;
        }
        .content-container
        {
          text-align: center;
          max-width: 100%;
          width: 600px;
        }
      `}</style>
    </div>
  );
}

Submit.defaultProps = {
  onClick: () => { },
};

Submit.propTypes = {
  onClick: PropTypes.func,
};

