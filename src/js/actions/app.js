import { APP_IS_OFFLINE, APP_IS_ONLINE } from "./types";
const onStatusChange = (dispatch) => () => {
  const isOnLine = navigator.onLine;
  const action = isOnLine
    ? { type: APP_IS_ONLINE, isOnLine }
    : { type: APP_IS_OFFLINE, isOnLine };

  dispatch(action);
};

export const listenToConnectionChanges = () => (dispatch) => {
  const connectionHandler = onStatusChange(dispatch);
  window.addEventListener("online", connectionHandler);
  window.addEventListener("offline", connectionHandler);

  return () => {
    window.removeEventListener("online", connectionHandler);
    window.removeEventListener("offline", connectionHandler);
  };
};
