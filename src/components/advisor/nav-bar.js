/* global */

import React from 'react';
import Link from 'next/link';

import { navBar } from '../../styles/nav-styles';


export default function NavBar() {
  return (
    <nav className="advisor-nav">
      <div className="flex-container">
        <button>Hello</button>
      </div>
      <style jsx>{navBar}</style>
    </nav>
  );
}

