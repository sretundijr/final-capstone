
export const questionPage = `
  .background {
    background-color: rgb(181, 186, 189);
    color: #F5F5F5;
    font-size: 1.5vw;
    width: 100vw;   
    height: 100vh; 
  }
  .welcome-container {
    height: 60vh;
    width: 100vw;
    background: #495C70;    
    text-align: center;    
  }
  .component-container {
      height: 65vh;
      background: #495C70;
      margin-top: 10px;
      margin-bottom: 150px;
  }
  .start-btn{
    margin-top: 10px;
    height: 40px;
    width: 200px;
    border: none;
    background: #576E86;
    color: #fff;
    border-radius: 5px;
  }
  .next-btn {
    margin: 20px;
    width: 200px;
    height: 40px;
    border: none;
    background: #576E86;
    color: #fff;
    border-radius: 5px;
  }

  @media only screen and (max-width: 900px) {
    .component-container {
      width: 100vw;
      background: #495C70;
      margin-top: 10px;
      margin-bottom: 50px;
      padding: 50px;
    }
    .background {
      font-size: 2.0vw;
    }
  }
  @media only screen and (max-width: 1400px) {
    .component-container {
      width: 100vw;
      background: #495C70;
      margin-top: 10px;
      margin-bottom: 50px;
      padding: 50px;
    }
    .background {
      font-size: 1.75vw;
    }
  }
  @media only screen and (max-width: 450px) {
    .component-container {
      width: 100vw;
      background: #495C70;
      margin-top: 10px;
      margin-bottom: 50px;
      padding: 50px;
    }
    .background {
      font-size: 4.0vw;
    }
  }
`;
