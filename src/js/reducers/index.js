import { combineReducers } from "redux";
import authReducer from "./authReducer";
import chatsReducer from "./chatsReducer";
import appReducer from "./appReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
  chats: chatsReducer,
  auth: authReducer,
  app: appReducer,
  settings: settingsReducer,
});
