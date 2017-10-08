
export const customerContainer = `
.container {
  background: #495C70;
  border: 5px solid #53687E;
  color: #fff;
  display: flex;
  flex-direction: column;
}
.customer-container {
  align-self: center;
}
.title-container {
 text-align: center;
}
.customer-row {
  text-align: center;
  max-width: 100%;
  width: 1000px;
  list-style: none;
  clear: left; 
}
.header-row {
  text-align: center;
  max-width: 100%;
  width: 1000px;
  list-style: none;
  clear: left; 
}
.customer-item {
  margin: 10px;
  float: left;
  width: 18%;
}

button {
  height: 35px;
  border: none;
  background: #576E86;
  color: #fff;
  border-radius: 5px;
}

@media only screen and (max-width: 900px) {
  .header-row{
    display: none;
  }
  .customer-row {
    border: 5px solid #53687E;         
    margin-left: -20px;
    text-align: left;
    width: 100%;
  }
  .customer-item {
    width: 100%;
    margin-top: 10px;
    float: none;
  }
}
`;
