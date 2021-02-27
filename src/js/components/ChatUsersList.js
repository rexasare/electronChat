import React from "react";

const ChatUserList = ({ users = [] }) => {
  const renderUsers = users.map((user) => {
    return (
      <li key={user.uid} onClick={() => {}} className="item">
        <div className="item-status">
          <img src={user.avatar} alt="Retail Admin" />
          <span className={`status ${user.state}`}></span>
        </div>
        <p className="name-time">
          <span className="name mr-2">{user.username}</span>
        </p>
      </li>
    );
  });
  return (
    <div className="list-container">
      <div className="chat-search-box">
        <div className="input-group">
          <input className="form-control" placeholder="Search" />
        </div>
      </div>
      <ul className="items">{renderUsers}</ul>
    </div>
  );
};

export default ChatUserList;
