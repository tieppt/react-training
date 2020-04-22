import React, { useState, useEffect } from 'react';

type OnlineOfflineState = 'online' | 'offline';

function useOnlineOffline() {
  const [status, setStatus] = useState<OnlineOfflineState>(() => {
    return window.navigator.onLine ? 'online' : 'offline';
  });
  useEffect(() => {
    console.log('inside effect');
    function updateOnlineStatus(e: Event) {
      setStatus(e.type === 'online' ? 'online' : 'offline');
    }
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    return () => {
      console.log('cleanup effect');
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);
  return status;
}

export function OnlineOffline() {
  const status = useOnlineOffline();

  const [icon, setIcon] = useState<string>('');

  return (
    <div>
      Your network status: {status}
      <br />
      <input
        type='text'
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <br />
      {icon && <img src={icon} alt='' />}
    </div>
  );
}
