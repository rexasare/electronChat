import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatsReducer from "./chatsReducer";

export default combineReducers({
  chats: chatsReducer,
  auth: authReducer,
});
