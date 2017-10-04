import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import NavBar from '../src/components/nav-bar';

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <NavBar />
    Welcome to next.js! Does it work with travis
    <Link href="/home">
      <a>link</a>
    </Link>
  </div>
);
