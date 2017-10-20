
import React from 'react';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navOutput: 'nav',
    };
  }
  navEvent() {
    if (this.state.navOutput === 'nav') {
      this.setState({
        navOutput: 'nav-view',
      });
    } else {
      this.setState({
        navOutput: 'nav',
      });
    }
  }
  render() {
    return (
      <div>
        <div className="top-bar">
          <div className="logo">
            <a href="#">Technician Assist</a>
          </div>
          <div className="menu">
            <button onClick={() => this.navEvent()} className="menu-btn">Menu</button>
          </div>
        </div>
        <div
          role="presentation"
          onClick={() => this.navEvent()}
          className={this.state.navOutput}
        >
          <ul>
            <li><a onClick={this.props.onClick} href="#">HOME</a></li>
            <li><a onClick={this.props.onClick} href="#">SIGN UP</a></li>
            <li><a onClick={this.props.onClick} href="#">SIGN IN</a></li>
            <li><a onClick={this.props.onClick} href="#">CONTACT</a></li>
          </ul>
        </div>
        <style jsx>
          {`
            .menu-btn {
              background-color: #495C70;
              color: white;
              border: none;
              outline: none;
              width: 10vw;
              height: 2vw;
              font-size: 1.8vw;              
            }
            .top-bar {
              height: 8vh;
              width: 100vw;
              background-color: #495C70;
              position: fixed;
              top: 0;
              left: 0;
            }
            .top-bar .logo {
                padding: 20px;
            }
            .top-bar .logo a {
                color: #fff;
                font-size: 1.8vw;
                text-transform: uppercase;
                text-decoration: none;
                letter-spacing: 5px;
            }
            .top-bar .menu {
                position: absolute;
                right: 20px;
                top: 20px;
            }
            .top-bar .menu a {
                color: #fff;
                font-size: 27px;
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
            }
            .nav-view a {
                color: #fff;
                display: block;
                padding: 10px;
                border-bottom: solid 1px rgba(255, 255, 255, 0.4);
                text-decoration: none;
            }
            @media only screen and (max-width: 700px) {
              .nav-view {
                top: 70px;
                width: 100vw;
                text-align: center;
              }
            }
            @media only screen and (max-width: 450px) {
              .nav-view {
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
