
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function NavBar(props) {
  return (
    <nav className="advisor-nav">
      <div className="flex-container">
        <Link href={`${props.query}#questionnaire-form`}>
          <button className="nav-button">{props.firstButton}</button>
        </Link>
        <Link href={`${props.query}#returned`}>
          <button className="nav-button">{props.secondButton}</button>
        </Link>
        <button onClick={props.onClick} className="nav-button">Logout</button>
      </div>
      <style jsx>{`
        .advisor-nav {
          height: 100%;
          background: #576E86;
        }
        .flex-container {
          display: flex;
          justify-content: center;
        }
        .nav-button {
          font-size: 16px;
          color: #fff;
          border: none;
          background: #576E86;    
          width: 100%;
          margin: 10px;
          outline: none;
        }
      `}</style>
    </nav>
  );
}

NavBar.defaultProps = {
  firstButton: '',
  secondButton: '',
};

NavBar.propTypes = {
  firstButton: PropTypes.string,
  secondButton: PropTypes.string,
};
