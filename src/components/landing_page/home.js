
import React from 'react';

export default function Home() {
  return (
    <div className="body-container">
      <div className="login-header-container">
        <h2 className="login-header">Please use demo123@demo.com and password: 123 for login</h2>
      </div>
      <div className="unhappy-image-container">
        <img className="unhappy-customer" src="/static/unhappy.jpeg" alt="unhappy customer" />
        <div className="unhappy-customer-content">
          <h2>Do your customers look like this?</h2>
          <h3>Unfortunately, cars break down which can lead to costly repairs.  Often times this a stressful situation for customers and the employees involved in repairing these issues.</h3>
          <h3>Many times the situation escalates when the communication chain breaks down. A customers concerns go un-answered, issues are overlooked.  This typically leads to deep discounts in service and repair to correct the situation.</h3>
        </div>
      </div>
      <div className="happy-customer-container">
        <img className="happy-customer-img" src="/static/happyCustomer.jpeg" alt="happy customer" />
        <div className="happy-customer-content">
          <div className="arrow-container">
            <h2>Do you want more of this?</h2>
            <img className="arrow" src="/static/arrow.png" alt="arrow" />
          </div>
          <h3>Technician Assist solves many of the problems with the communication chain between the customer, advisor, and the technician. Please use the demo log in and take a tour of what Technician Assist can do for you.</h3>
        </div>
      </div>
      <div className="footer" />
      <style jsx>{`
          .none {
            display: none;
          }
          .footer {
            width: 100%;
            height: 100px;
          }
          .unhappy-image-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          .unhappy-customer {
            margin: 0 auto;
          }
          .unhappy-customer-content {
            width: 50%;
          }
          .login-header-container {
            position: relative;
            display: flex;
            justify-content: center;
            z-index: 1;
          }
          .happy-customer-container {
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            justify-content: flex-end;
          }
          .happy-customer-content {
            width: 50%;
            margin-left: 20px;
          }
          .happy-customer-img {
            position: absolute;
            top: 320px;
            right: 30px;
          }
          .arrow-container {
            display: flex;
            flex-direction: row;
            margin: 20px auto;
            margin-left: 55px;
          }
          .arrow {
            margin-left: 20px;
            width: 300px;
            height: 100px;
          }
          
          @media only screen and (max-width: 1100px) {
            .unhappy-customer-content {
              
            }
            .unhappy-customer {
              width: 30%;
              height: 300px;
            }
            .happy-customer-content {
              width: 40%;
            }
            .happy-customer-img {
              top: 350px;
              width: 50%;
            }
            .arrow-container {
              margin-left: 30px;
            }
            .arrow {
              width: 100px;
              height: 50px;
              margin-left: 10px;
            }
          }
          }
           @media only screen and (max-width: 850px) {
            .unhappy-customer-content {
              margin: 20px;
              width: 100%;
            }
            .unhappy-customer {
              margin: 0 auto;
              width: 50%;
              height: 200px;
            }
            .arrow-container {
              margin-left: 0; 
            }
            .happy-customer-content {
              width: 100%;
            }
            .happy-customer-img {
              position: relative;
              top: 0;
              right: 0;
              width: 90%;
              margin: 0 auto;
            }
            .arrow {
              display: none;
            }
          }
          @media only screen and (max-width: 450px) {
            .unhappy-customer-content {
              margin: 20px;
              width: 100%;
            }
            .unhappy-customer {
              margin: 0 auto;
              width: 90%;
              height: 200px;
            }
            .happy-customer-content {
              width: 100%;
              margin: 0 20px 0 20px;
              text-align: center;
            }
            .happy-customer-img {
              position: relative;
              top: 0;
              right: 0;
              width: 90%;
              margin: 0 auto;
            }
            .arrow-container {
              margin: 0 20px 0 20px;
              text-align: center;              
            }
            .arrow {
              display: none;
            }
          }
        `}
      </style>
    </div >
  );
}
