import { FETCH_CHATS } from "../actions/types";

const INTIAL_STATE = {
  items: [],
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHATS:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
