
export const advisorContainer = `
  .advisor-container {
    display: grid;
    grid-template-columns: repeat(2, [col-start] 250px [col-end]);
    grid-gap: 40px;
    justify-content: center;
    grid-auto-columns: auto;
  }

  .main-container {
    width: 100%;
  }

  .center-container {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  .component-container {
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
  }

  .submit-button {
    width: 100px;
    height: 25px;
    background-color: white;
  }
`;

