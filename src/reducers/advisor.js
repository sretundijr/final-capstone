
import * as actions from '../actions/advisor';

export const initialState = {
  advisorName: '',
  shopName: '',
  advisorEmail: '',
  customerName: '',
  customerEmail: '',
  appointmentDate: '',
};

export default function advisorReducer(state = initialState, action) {
  if (action.type === actions.SET_ADVISOR_EMAIL) {
    return Object.assign({}, state, {
      advisorEmail: action.advisorEmail,
    });
  } else if (action.type === actions.SET_ADVISOR_NAME) {
    return Object.assign({}, state, {
      advisorName: action.advisorName,
    });
  } else if (action.type === actions.SET_CUSTOMER_NAME) {
    return Object.assign({}, state, {
      customerName: action.customerName,
    });
  } else if (action.type === actions.SET_SHOP_NAME) {
    return Object.assign({}, state, {
      shopName: action.shopName,
    });
  } else if (action.type === actions.setCustomerEmail) {
    return Object.assign({}, state, {
      customerEmail: action.customerEmail,
    });
  } else if (action.type === actions.SET_APPOINTMENT_DATE) {
    return Object.assign({}, state, {
      appointmentDate: action.appointmentDate,
    });
  }
  return state;
}
