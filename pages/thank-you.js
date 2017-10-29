import React from 'react';
import Head from 'next/head';

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>Thanks</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-container">
        <div>
          <h3 className="content-container">
            Thanks for taking the time to fill out this survey!
          </h3>
          <h3 className="content-container">
            This gives us the best chances of addressing the issues you are experiencing.
          </h3>
        </div>
      </div>
      <style jsx>{`
        .flex-container { 
          display: flex; 
          justify-content: center;
        }
        .content-container
        {
          text-align: center;
          max-width: 100%;
          width: 600px;
          height: 65vh;
          background: #495C70;
          margin-top: 10px;
          margin-bottom: 150px;
        }
      `}</style>
    </div>
  );
}
