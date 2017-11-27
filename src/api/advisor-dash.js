/* global localStorage fetch */

const API_BASE_URL = process.env.BACKEND_URL;

// import Customers from '../mock-list';

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

export function sendEmail(advisorId, customerInfo) {
  const customerObj = {
    advisorId,
    customer: customerInfo,
  };
  return fetch(`${API_BASE_URL}/advisor-dashboard/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(customerObj),
  });
}

// todo error handling when null
export function getCustomersWithCompletedQuestionnaire(id) {
  return fetch(`${API_BASE_URL}/advisor-dashboard/returned/${id}`, {
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

