import React, { useState, useCallback } from 'react';
import { Switch } from 'antd';

type Status = 'on' | 'off';

interface NotificationState {
  id: string;
  lable: string;
  status: Status;
}

interface NotificationItemProps {
  notification: NotificationState;
  onChanged?: (notification: NotificationState) => void;
}

function NotificationItem(props: NotificationItemProps) {
  const { notification, onChanged } = props;
  function handleChange(checked: boolean) {
    onChanged!({
      ...notification,
      status: checked ? 'on' : 'off',
    });
  }
  return (
    <div>
      <h4>{notification.lable}</h4>
      <Switch checked={notification.status === 'on'} onChange={handleChange} />
    </div>
  );
}

NotificationItem.defaultProps = {
  onChanged: () => {},
};

const NotificationItemMemo = React.memo(NotificationItem);

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

  const handleChange = useCallback(function handleChange(
    noti: NotificationState
  ) {
    setNotifications((prevNotifications) => {
      return prevNotifications.map((n) => {
        if (n.id === noti.id) {
          return {
            ...noti,
          };
        }
        return n;
      });
    });
  },
  []);

  return (
    <div>
      <p>Control your notificationa and auto-follow settings.</p>
      {notifications.map((noti) => (
        <NotificationItemMemo
          key={noti.id}
          notification={noti}
          onChanged={handleChange}
        />
      ))}
    </div>
  );
}
