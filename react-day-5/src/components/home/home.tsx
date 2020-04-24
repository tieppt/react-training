import React, { useState, useEffect } from 'react';
import { Profile } from '../../models/profile';
import { UserProfile } from '../user-profile/user-profile';
import { fetchData } from '../../datasource/fetch-data';

export function Home() {
  const [profile, setProfile] = useState<Profile | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const data = await fetchData('http://localhost:3000/profile');
        setProfile(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div>
      <div className='top'>Analysis</div>
      <div className='datatable'>Transtions</div>
      <div className='profile'>
        <h3>Profile</h3>
        {profile ? <UserProfile profile={profile} /> : null}
      </div>
    </div>
  );
}
