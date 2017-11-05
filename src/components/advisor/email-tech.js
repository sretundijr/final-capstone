
import React from 'react';

import EmailInput from './email-input';

export default function EmailTech(props) {
  return (
    <div>
      <div className="close-container">
        <button onClick={props.closeBtn} className="close">
          X
        </button>
      </div >
      <div>
        <h4>
          Technician Email
        </h4>
        <EmailInput value={props.value} onChange={props.onChange} />
      </div>
      <div>
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
          .close-container {
            padding: 10px;
          }
          .close {
            position: absolute;
            top: 0;
            right: 0;
            font-size: 20px;    
            height: auto;
            border: none;
            background: #576E86;
            color: #fff;
            border-radius: 5px;
            outline: none;
          }       
      `}
      </style>
    </div >
  );
}
