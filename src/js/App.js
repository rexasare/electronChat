import React from "react";

const App = () => {
  const title = "Hello World";
  const enhancedTitle = title + " - React App!";

  const sendNotifications = () => {
    electron.notificationApi.sendNotification("My custom message");
  };

  return (
    <div>
      <h1>{enhancedTitle}</h1>
      <button onClick={sendNotifications}>Send Notifications</button>
    </div>
  );
};

export default App;
