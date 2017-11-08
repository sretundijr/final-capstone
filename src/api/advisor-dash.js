/* global localStorage fetch */

// import Customers from '../mock-list';

import API_BASE_URL from '../../env-config';

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

export function sendEmail(customerInfo) {
  return fetch(`${API_BASE_URL}/advisor-dashboard/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerInfo),
  });
}

// todo error handling when null
export function getCustomers() {
  return fetch(`${API_BASE_URL}/advisor-dashboard/returned`, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
}

export function getCompletedQuestionnaire(id) {
  return fetch(`${API_BASE_URL}/advisor-dashboard/completed-questionnaire/${id}`, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
}

export function sendQuestionnaireToTech(linkObj) {
  return fetch(`${API_BASE_URL}/advisor-dashboard/send-questionnaire-link`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(linkObj),
  });
}

export function getAdvisorInfo(id) {
  return fetch(`${API_BASE_URL}/advisor-dashboard/user/${id}`, {
    method: 'GET',
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    });
}

export function saveAdvisorInfo(advisorObj) {
  localStorage.setItem('advisor', JSON.stringify(advisorObj));
}
