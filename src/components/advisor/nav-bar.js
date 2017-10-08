/* global */

import React from 'react';
import Link from 'next/link';

import { navBar } from '../../styles/advisor/nav-styles';


export default function NavBar() {
  return (
    <nav className="advisor-nav">
      <div className="flex-container">
        <Link href="#questionnaire-form">
          <button className="nav-button">Send Questionnaire</button>
        </Link>
        <Link href="#returned">
          <button className="nav-button">Returned Questionnaires</button>
        </Link>
      </div>
      <style jsx>{navBar}</style>
    </nav>
  );
}

