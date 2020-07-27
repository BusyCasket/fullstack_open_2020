import React from 'react';

const Notification = ({ message, type }) => {

    const color = type === 'success' ? 'green' : 'red';

    const notificationStyle = {
        backgroundColor: 'lightgrey',
        padding: '10px', 
        marginBottom: '30px',
        borderRadius: '10px',
        color: color,
        border: `1px solid ${color}`
    }
  return message === null ? null : <div style={notificationStyle}>{message}</div>;
};

export default Notification;
