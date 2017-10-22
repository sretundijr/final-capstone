
import React from 'react';

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <h4>Technician Assist</h4>
      </div>
      <div className="content-container">
        <p>
          This app allows for a better customer expeirence when visiting a service department
          or dealership for vehicle repairs.
        </p>
        <p>
          <span>The situation: </span>customer expeirences an issue with their vehicle and makes
          an appointment for service.  The service advisor schedules the appointment and gathers
          as much info as possible about the issue.  The customer delievers vehicle for service
          and the technician receives the work order with customer issue description and begins
          diagnosing the issue.
        </p>
        <p>
          The problem:  Alot of times the service advisors notes on the issue can be vague
        and incomplete.  This usually stems from time constraints on the phone when the appointment
        is made or when the vehicle is delievered.  Many times the customer has a long story
        explaining the issue and the advisor simply can not type fast enough to capture the
        description.  There are many cases when the advisor does not know the correct questions
        to ask, to investigate the issue further.  Important details will often get lost between
        the customer the advisor and the technician.
        </p>
        <p>
          The solution:  This app allows a service advisor to quickly send a survey to a customer
          after the appointment is made. The customer can then fill out the survey before their
          appointment at their leisure.  The survey contains questions that will extract important
          details of a vehicles faults making the technicians diagnostic procedure quicker and easier.
        </p>
        <p>
          The benefits:  Accurate diagnostics! Great impressions left with the customer!
          Less comebacks!  Less time on the phone, or at time of drop off spent quizing the
          customer about the issues they are expierencing.
        </p>
      </div>
      <style jsx>{`
          .home-container {
            font-size: 1.4vw;
            padding: 1vw 2vw 2vw 2vw;          
          }
          h4 {
            text-align: center;
            font-size: 1.7vw;
          }
          .content-container {
            width: 80vw;
            margin: 0 auto;
            text-align: center;
          }
          p {
            padding: 10px;
          }
          @media only screen and (max-width: 900px) {
            .home-container {
              font-size: 2vw;
            }
            .content-container {
              
            }
            h4 {
              font-size: 3vw;
            }
           }
           @media only screen and (max-width: 750px) {
            .home-container {
              font-size: 3.5vw;
            }
            .content-container {
              
            }
            h4 {
              font-size: 4.0vw;
            }
           } 
          @media only screen and (max-width: 450px) {
            .home-container {
              font-size: 6vw;
            }
            .content-container {
              
            }
            h4 {
              font-size: 6.5vw;
            }
          }
        `}
      </style>
    </div>
  );
}
