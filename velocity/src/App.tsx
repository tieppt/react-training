import React from 'react';
import { UserProfile } from './components/user-profile';

function App() {
  function handleClick() {
    console.log('clicked');
  }
  return (
    <div>
      <h2 className='heading'>This is an awesome React Application!</h2>
      <UserProfile
        username='Peter Parker'
        hobbies={[]}
        avatar='https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
      />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
