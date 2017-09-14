import React from 'react';
import Link from 'next/link';

export default () =>
  (<div>
    Welcome to next.js! Does it work with travis
    <Link href="/home">
      <a>link</a>
    </Link>
  </div>);
