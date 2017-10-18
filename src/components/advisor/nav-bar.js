/* global */

import React from 'react';
import Link from 'next/link';

import { navBar } from '../../styles/advisor/nav-styles';


export default function NavBar(props) {
  return (
    <nav className="advisor-nav">
      <div className="flex-container">
        <Link href="#questionnaire-form">
          <button className="nav-button">{props.firstButton}</button>
        </Link>
        <Link href="#returned">
          <button className="nav-button">{props.secondButton}</button>
        </Link>
      </div>
      <style jsx>{navBar}</style>
    </nav>
  );
}

