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

// todo error handling when null
export function getCustomers() {
  const savedInfo = Promise.resolve(localStorage.getItem('all-customers'));
  return (
    savedInfo
      .then((info) => {
        // console.log(info);
        if (info === null) {
          return [{ id: 'error', customerName: 'none', customerEmail: 'none', appointmentDate: 'none' }];
        }
        return JSON.parse(info);
      })
  );
}

const getCurrentUser = () => localStorage.getItem('current');

export function getAdvisorInfo() {
  console.log(getCurrentUser());
  const currentUser = JSON.parse(getCurrentUser());
  const savedInfo = Promise.resolve(localStorage.getItem(currentUser));
  return (
    savedInfo
      .then((info) => {
        console.log(info);
        return JSON.parse(info);
      })
  );
}

export function saveAdvisorInfo(advisorObj) {
  localStorage.setItem('advisor', JSON.stringify(advisorObj));
}
