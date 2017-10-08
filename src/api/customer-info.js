/* global localStorage */

export function saveCustomer(customer) {
  const savedInfo = localStorage.getItem('all-customers');
  const customers = JSON.parse(savedInfo);
  console.log(customers);
  const customerObj = {
    id: Math.floor(Math.random() * 10000) + 1,
    customerName: customer.customerName,
    customerEmail: customer.customerEmail,
    appointmentDate: customer.appointmentDate,
  };
  if (customers !== null) {
    customers.push(customerObj);
    localStorage.setItem('all-customers', JSON.stringify(customers));
  } else {
    localStorage.setItem('all-customers', JSON.stringify([customerObj]));
  }
}

export function getCustomers() {
  // const savedInfo = Promise.resolve(localStorage.getItem('all-customers'));
  // savedInfo
  //   .then(info => JSON.parse(info))
  //   .then(customers => console.log(customers));
}
