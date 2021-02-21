import { combineReducers } from "redux";
import chatsReducer from "./chatsReducer";

export default combineReducers({
  chats: chatsReducer,
});
