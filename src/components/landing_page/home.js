
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
          <h2 className="happy-customer-header">Do you want more of this?</h2>
          <h3>Technician Assist solves many of the problems with the communication chain between the customer, advisor, and the technician. Please use the demo log in and take a tour of what Technician Assist can do for you.</h3>
        </div>
      </div>
      <div className="tech-assist-explained-container">
        <h2 className="tech-assist-header">So what does Technician Assist do for you?</h2>
        <p className="tech-assist-p">Technician Assist allows a service advisor to send an email containing a link to a survey.  This survey will contain questions that allow a customer to go into greater detail about the vehicle issues they are experiencing.  Once the survey is complete, the customer simply submits and the advisor gets updated.  The advisor can then send this survey to the technician assigned to the vehicle.  Sometimes the greatest chanllenge a service department faces is getting a clear picture of what is happening with a customers vehicle. Technician Assist aims to eliminate this problem. The tool presented today is the first in a series of tools aimed to assist a service department in delivering a great customer experience.</p>
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
          }
          .unhappy-customer {
            margin-left: 20px;
            width: 40%;
          }
          .unhappy-customer-content {
            width: 45%;
            margin-left: 10px;
            margin-right: 10px;
          }
          .login-header-container {
            display: flex;
            justify-content: center;
            z-index: 1;
            margin: 20px;
          }
          .happy-customer-header {
            text-align: right;
            margin-right: 10px;
          }
          .happy-customer-content {
            width: 50%;
            margin-top: 60px;
            margin-left: 50px;
          }
          .happy-customer-img {
            position: absolute;
            top: 350px;
            right: 30px;
            width: 40%;
            margin: 10px;
          }
          .tech-assist-explained-container {
            margin: 50px 10px 0 10px;
          }
          .tech-assist-header {
            text-align: center;
          }
          .tech-assist-p {
            font-weight: bold;
            margin-top: -10px;
          }
          @media only screen and (max-width: 1100px) {
            .unhappy-image-container {
              flex-wrap: wrap;            
            }
            .unhappy-customer {
              width: 30%;
              height: 300px;
            }
            .happy-customer-content {
              width: 40%;
            }
            .happy-customer-img {
              top: 400px;
              width: 50%;
            }
            .tech-assist-header {
              width: 40%;        
            }
            .tech-assist-p {
              margin-top: 40px;
              margin-left: 0;
              padding-left: 0;
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
            .happy-customer-content {
              width: 90%;
              margin-left: 20px;
            }
            .happy-customer-img {
              position: relative;
              top: 0;
              right: 0;
              width: 90%;
              margin-left: 20px;
            }
            .happy-customer-header {
              text-align: left;
            }
            .tech-assist-header {
              text-align: left;
              width: 100%;
              margin-left: 10px;    
            }
            .tech-assist-p {
              width: 95%;
              margin: -10px 20px 0 10px;
              padding: 0;
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
            .happy-customer-header {
              text-align: center;
              margin-right: 0;
            }
            .happy-customer-content {
              width: 90%;
              margin: 0 20px 0 20px;
              text-align: left;
            }
            .happy-customer-img {
              position: relative;
              top: 0;
              right: 0;
              width: 90%;
            }
            .tech-assist-header {
              text-align: center;
              width: 90%;
              margin-left: 10px;    
            }
          }
        `}
      </style>
    </div >
  );
}

