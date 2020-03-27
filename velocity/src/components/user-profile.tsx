import React, { Component } from "react";

interface UserProfileProps {
  username: string;
  avatar?: string;
  hobbies?: Array<{ id: string; title: string }>;
}

export function UserProfile(props: UserProfileProps) {
  const { username, avatar, hobbies } = props;
  return (
    <div className="user-profile">
      <h3 className="username">{username}</h3>
      {avatar && <img className="user-img" src={avatar} alt="" />}
      <hr />
      {hobbies && hobbies.length > 0 && (
        <ul>
          {hobbies.map(hobby => (
            <li key={hobby.id}>{hobby.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export class UserProfileComponent extends Component<UserProfileProps> {
  constructor(props: UserProfileProps) {
    super(props);
  }

  render() {
    const { username, avatar, hobbies } = this.props;
    return (
      <div className="user-profile">
        <h3 className="username">{username}</h3>
        {avatar && <img className="user-img" src={avatar} alt="" />}
        <hr />
        {hobbies && hobbies.length > 0 && (
          <ul>
            {hobbies.map(hobby => (
              <li key={hobby.id}>{hobby.title}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
