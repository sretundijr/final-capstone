# final-capstone

[![DeepScan Grade](https://deepscan.io/api/projects/1287/branches/3452/badge/grade.svg)](https://deepscan.io/dashboard/#view=project&pid=1287&bid=3452)


This is the client side for Technician assist.  View the project [here](https://www.technician-assist.com/)

View Server side code [Here](https://github.com/sretundijr/final_capstone_api)

Technician Assist aims to provide the best customer experience when visiting a participating automotive repair facility.  This app allows a service advisor to send a questionnaire to a customer who has recently scheduled an appointment for vehicle service.  The customer recieves an email containing a link to the questionnaire. The questionnaire allows the customer to select an issue category and answer important questions that will allow the technician working on the vehicle to get a better idea of what is going on.  One of the biggest challenges within small and large repair facilities is communication between the customer, advisor, and technician.  This communication chain is fragile and breaks down frequently (no pun intended).  Technicians may find themselves chasing an issue that is completely unrelated to the systems they are testing due to this communication break down.

Currently, Technician Assist is in MVP stage and features only core functionality.  The communication chain is established using email communication.  The advisor has the ability to send an email to a customer with a link to the questionnaire.  Once the customer completes this questionnaire, the advisor dashboard is updated indicating a returned questionnaire.  The advisor can review the questionniare and send a link to the technician via email.  The technician clicks the link and is directed straight to the questionnaire.  No signing in, no navigating through a dashboard; technician time is valuable and this app will not be a burden.

The questionnaire is mobile friendly, this gives the customer an opportunity to fill out the questionnaire without being inconvienced by having to go to a computer.  The goal is to provide the customer the best possbile experience while maximizing technician efficiency and driving greater profits.

Lets not forget the advisors time.  In order to send a questionnaire the advisor needs only to sign in once daily fill out three parameters in a form; customer email, name, appointment date and click send.  Once the questionnaire is returned, the advisor is two button clicks away from sending an email to the technician.  The advisor will have to manually enter the technicians email address each time they want to send a questionnaire to a technician.  Storing technician info was not part of the MVP scope, but will be added as a feature in a later version.


##If your reading this you are probably more interested in the code.

This app was built using Next.js.  Next.js is a React starter that features both server side rendering and static html export. For this project I chose static export.  The server side can code be viewed [here](https://github.com/sretundijr/final_capstone_api).  Next.js offered a seemless page structure which fit the apps structure perfectly.  This page structure allowed the top level components to handle the state and rendering.  All child components except for two, were written as stateless pure functions.  This structure allows for simplified testing (in most cases) and greater maintainability.

Next.js offers a few solutions for css.  The solution I chose was style jsx which places the css between style tags within the top level html tag.  This increased the number of lines in each component.  I played with placing css in a seperate file as strings and importing these strings into the style tag.  However, this solution made maintaining and writing css a nightmare as there was no syntax highlighting and eslint was extremely unhappy with this as well.  By moving the css into the component, syntax highlighing was restored and errors were exposed.  Each style jsx tag was placed at the end of the html structure which made the code readable and consistent.  The layout of this app was built using flex box, no css frameworks were used.

Why react?  React was a requirement of [Thinkful](https://www.thinkful.com/) and I am glad it was.  React is amazing, probably not perfect, but it made writing client side code and event handling so much easier.  My previous app was built using only es6 and a custom webpack/babel config.  Lets just say I wrote a lot of event handlers in that app.  Going from this experience straight into React really made me appreciate the benefits of a front end framework.  Handling state and rendering was a breeze as well.

Authorization was handled using Auth0.  This presented some challenges at first, but after initial setup and understanding the api, I felt this was the best choice.  Auth lock was used which embedded the auth login form into the app.  Call back redirects and routing were handled using next/Router.  

Component testing was done with enzyme and jest.  Each component received basic rendering tests.  Testing is not complete and there will be more tests to come to bring the coverage levels up.  As this app moves from MVP scope testing will ensure existing components are still working correctly.  Testing will continue while the app remains in the current MVP scope.




