import React, { useState } from 'react';
import { Switch } from 'antd';

type Status = 'on' | 'off';

interface NotificationState {
  id: string;
  lable: string;
  status: Status;
}

export function NotificationSetting() {
  const initialState: NotificationState[] = [
    {
      id: 'email',
      lable: 'Email Notification',
      status: 'off',
    },
    {
      id: 'push',
      lable: 'Push Notification',
      status: 'on',
    },
    {
      id: 'monthly-reports',
      lable: 'Monthly Reports',
      status: 'off',
    },
    {
      id: 'quarter-reports',
      lable: 'Quarter Reports',
      status: 'off',
    },
  ];
  const [notifications, setNotifications] = useState(initialState);

  function handleChange(noti: NotificationState, checked: boolean) {
    const newNotifications = notifications.map((n) => {
      if (n.id === noti.id) {
        return {
          ...n,
          status: (checked ? 'on' : 'off') as Status,
        };
      }
      return n;
    });

    setNotifications(newNotifications);
  }

  return (
    <div>
      <p>Control your notificationa and auto-follow settings.</p>
      {notifications.map((noti) => {
        return (
          <div key={noti.id}>
            <h4>{noti.lable}</h4>
            <Switch
              checked={noti.status === 'on'}
              onChange={(e) => handleChange(noti, e)}
            />
          </div>
          //   <NotificationItem/>
        );
      })}
    </div>
  );
}

// extract ben trong map thanh 1 component con.
