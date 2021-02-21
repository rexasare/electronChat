import * as api from "../api/chat";

import { FETCH_CHATS } from "./types";

export const fetchChats = () => async (dispatch) => {
  const chats = await api.fetchChats();

  dispatch({ type: FETCH_CHATS, payload: chats });
};
