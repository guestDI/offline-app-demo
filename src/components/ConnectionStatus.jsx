import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

const ConnectionStatus = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className={`connection-status ${isOnline ? 'online' : 'offline'}`}>
      <span className="status-indicator" title={isOnline ? 'Online' : 'Offline'}></span>
      <p>{isOnline ? 'You are back online' : 'You are offline'}</p>
    </div>
  );
};

const styles = `
  .connection-status {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 12px;
    min-width: 40px;
    min-height: 40px;
  }

  .status-indicator {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
  }

  .connection-status.online .status-indicator {
    background-color: #4CAF50;
    box-shadow: 0 0 12px rgba(76, 175, 80, 0.5);
  }

  .connection-status.offline .status-indicator {
    background-color: #f44336;
    box-shadow: 0 0 12px rgba(244, 67, 54, 0.5);
  }
`;

// Add styles to document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ConnectionStatus;