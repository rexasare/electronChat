import React from "react";

const AvailableChatsList = ({ chats }) => {
  const availableChats = chats.map((chat) => {
    return (
      <div key={chat.id} className="col-lg-3 col-md-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{chat.name}</h5>
            <p className="card-text">Some Chat 1 Description</p>
            <button onClick={() => {}} className="btn btn-outline-primary">
              Join Chat
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row mt-3">
        {false && (
          <div className="container-fluid">
            <div className="alert alert-warning">No chats to join :(</div>
          </div>
        )}
        {availableChats}
      </div>
    </div>
  );
};

export default AvailableChatsList;
