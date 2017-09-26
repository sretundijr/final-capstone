import React from 'react';
import Link from 'next/link';

import { flexContainer, contentContainer } from '../../styles/shared-styles';
import { submit } from '../../styles/submit-styles';

export default function Submit() {
  return (
    <div className="flex-container">
      <div className="content-container">
        <Link href="/thank-you">
          <button className="submit">Submit</button>
        </Link>
      </div>
      <style jsx>{submit}</style>
      <style jsx>{flexContainer}</style>
      <style jsx>{contentContainer}</style>
    </div>
  );
}
