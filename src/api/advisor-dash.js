/* global localStorage fetch */

import Customers from '../mock-list';

import API_BASE_URL from '../../config';


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

// todo finish this
export function sendEmail(customerInfo) {
  return fetch(`${API_BASE_URL}/advisor-dashboard`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerInfo),
  });
}

// todo error handling when null
export function getCustomers() {
  const savedInfo = Promise.resolve(localStorage.getItem('all-customers'));
  // return (
  //   savedInfo
  //     .then((info) => {
  //       // console.log(info);
  //       if (info === null) {
  //         return [{ id: 'error', customerName: 'none', customerEmail: 'none', appointmentDate: 'none' }];
  //       }
  //       return JSON.parse(info);
  //     })
  // );
  return Customers();
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
