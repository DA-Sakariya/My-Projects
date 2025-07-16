import React from 'react';

export default function DataOut({ userData, onEdit, onDelete }) {
  return (
    <div className="data-output">
      {userData.map((user,index) => (
        <div key={user.id || index} className="user-card">
          <p>{user.id}</p>
          <p>{user.title}</p>
          <p>{user.body}</p>
          <div className="card-buttons">
            <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}