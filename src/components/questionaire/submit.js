import React from 'react';
import Link from 'next/link';

import { flexContainer } from '../../styles/questionnaire/shared-styles';
import { submit } from '../../styles/questionnaire/submit-styles';

export default function Submit(props) {
  return (
    <div className="flex-container">
      <div className="content-container">
        <Link href="/thank-you">
          <button onClick={props.onClick} className="submit">Submit</button>
        </Link>
      </div>
      <style jsx>{submit}</style>
      <style jsx>{flexContainer}</style>
    </div>
  );
}
