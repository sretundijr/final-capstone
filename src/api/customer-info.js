/* global localStorage */

export function saveCustomer(customer) {
  const savedInfo = localStorage.getItem('all-customers');
  const customers = JSON.parse(savedInfo);
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
  const savedInfo = Promise.resolve(localStorage.getItem('all-customers'));
  return (
    savedInfo
      .then(info => JSON.parse(info))
  );
}

export function getAdvisorInfo() {

}

export function saveAdvisorInfo(advisorObj) {
  localStorage.setItem('advisor', JSON.stringify(advisorObj));
}
