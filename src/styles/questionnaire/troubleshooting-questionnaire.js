
export const questionPage = `
  .background {
    background-color: rgb(181, 186, 189);
    color: #F5F5F5;
    font-size: 20px;
    width: 100vw;   
    height: 100vh; 
  }
  .welcome-container {
    height: 100vh;
    width: 100vw;
    background: #495C70;    
    padding: 20px;
    text-align: center;    
  }
  .component-container {
      height: 100vh;
      background: #495C70;
      margin-top: 100px;
      margin-bottom: 300px;
      padding: 50px;
  }
  .start-btn{
    font-size: 20px;
    margin-top: 75px;
    height: 40px;
    width: 200px;
    border: none;
    background: #576E86;
    color: #fff;
    border-radius: 5px;
  }
  .next-btn {
    font-size: 20px;    
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
  }
`;
