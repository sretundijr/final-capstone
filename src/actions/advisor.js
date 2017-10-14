
export const SET_SHOP_NAME = 'SET_SHOP_NAME';
export const setShopName = name => ({
  type: SET_SHOP_NAME,
  name,
});

export const SET_ADVISOR_NAME = 'SET_ADVISOR_NAME';
export const setAdvisorName = name => ({
  type: SET_ADVISOR_NAME,
  name,
});

export const SET_ADVISOR_EMAIL = 'SET_ADVISOR_EMAIL';
export const setAdvisorEmail = email => ({
  type: SET_ADVISOR_EMAIL,
  email,
});

export const SET_CUSTOMER_NAME = 'SET_CUSTOMER_NAME';
export const setCustomerName = name => ({
  type: SET_CUSTOMER_NAME,
  name,
});

export const SET_CUSTOMER_EMAIL = 'SET_CUSTOMER_EMAIL';
export const setCustomerEmail = email => ({
  type: SET_CUSTOMER_EMAIL,
  email,
});

export const SET_APPOINTMENT_DATE = 'SET_APPOINTMENT_DATE';
export const setAppointmentDate = date => ({
  type: SET_APPOINTMENT_DATE,
  date,
});
