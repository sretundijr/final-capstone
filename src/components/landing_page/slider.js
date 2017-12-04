
import React from 'react';
import PropTypes from 'prop-types';

export default function Slider(props) {
  return (
    <div>
      <div className="top-bar">
        <div className="logo">
          <button>Technician Assist</button>
        </div>
        <div className="menu">
          <button onClick={props.onClick} className="menu-btn">Menu</button>
        </div>
      </div>
      <div id="nav-container" className={props.navOutput}>
        <ul>
          <li><button onClick={props.onClick} href="#" value="home">HOME</button></li>
          <li><button onClick={props.lockEvent} href="#" value="sign-in">SIGN IN</button></li>
          <li><button onClick={props.onClick} href="#" value="contact">CONTACT</button></li>
        </ul>
      </div>
      <style jsx>{`
            .top-bar {
              height: 8vh;
              width: 100vw;
              background-color: #495C70;
              position: fixed;
              top: 0;
              left: 0;
              z-index: 5;
            }
            .top-bar .logo {
                position: absolute;
                top: 15px;
                left: 15px;
            }
            .top-bar .logo button {
                border: none;
                outline: none;
                background-color: #495C70;
                color: #fff;
                font-size: 2.0vw;
                text-transform: uppercase;
                text-decoration: none;
                letter-spacing: 5px;
            }
            .top-bar .menu {
                position: absolute;
                right: 15px;
                top: 15px;
            }
            .menu-btn {
              border: none;
              outline: none;
              background-color: #495C70;              
              color: #fff;
              font-size: 2.0vw;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 5px;            
            }
            /*nav*/
            
            .nav {
             display: none;
              background-color: rgb(181, 186, 189);              
            }
            .nav-view {
              position: fixed;            
              right: 0;
              top: 8vh;
              width: 15vw;
              height: 100vh;
              z-index: 10;
              background-color: #495C70;
            }
            .nav-view ul {
                margin: 0;
                padding: 0;
            }
            .nav-view li {
                margin: 0;
                padding: 0;
                list-style-type: none;
                border-bottom: 1px solid #fff;
            }
            .nav-view button {
              border: none;
              outline: none;
              background-color: #495C70;              
              color: #fff;
              font-size: 1.5vw;
              text-transform: uppercase;
              text-decoration: none;
              letter-spacing: 5px;
            }
            @media only screen and (max-width: 900px) {
              .nav-view {
                position: fixed;            
                right: 0;
                top: 8vh;
                width: 15vw;
                height: 100vh;
                z-index: 10;
                background-color: #495C70;
              }
              .top-bar {
                height: 8vh;
              }
            }
            @media only screen and (max-width: 750px) {
              .nav-view {
                top: 12vh;
                width: 20vw;
              }
              .nav-view button {
                margin-top: 10px;
                font-size: 2vw;                
              }
              .top-bar {
                height: 12vh;                
              }
              .top-bar .logo button {
                font-size: 2.5vw;              
              }
              .menu-btn {
                font-size: 2.5vw;
              }
            }
            @media only screen and (max-width: 450px) {
              .nav-view {
                text-align: center;
                position: absolute;
                width: 100vw;
                top: 10vh;
              }
              .nav-view button {
                margin-top: 20px;
                font-size: 4vw;                
              }
              .top-bar {
                height: 12vh;
              }
              .top-bar .logo {
                position: relative;
                top: 1vh;
                left: 0;
                text-align: center;
              }
              .top-bar .logo button {
                color: #fff;
                font-size: 4.0vw;              
                text-transform: uppercase;
                text-decoration: none;
              }
              .top-bar .menu {
                position: relative;
                top: 3vh;
                right: 0;
                text-align: center;
              }
              .menu-btn {
                font-size: 4.0vw;           
              }

            }
          `}
      </style>
    </div>
  );
}

Slider.defaultProps = {
  navOutput: '',
  onClick: () => { },
};

Slider.propTypes = {
  navOutput: PropTypes.string,
  onClick: PropTypes.func,
};
