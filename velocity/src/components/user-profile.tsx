import React from "react";

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
      {props.avatar && <img className="user-img" src={avatar} alt="" />}
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
