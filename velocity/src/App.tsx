import React from 'react';
import { UserProfile, UserProfileComponent } from './components/user-profile';
import ProgressBar, { ProgressBarComponent } from './components/progress-bar/progress-bar';
import { RatingBar } from './components/rating-bar/rating-bar';

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
      <ProgressBar/>
      <br/>
      <ProgressBarComponent width={80} />
      <UserProfileComponent
        username='Peter Parker'
        hobbies={[]}
        avatar='https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
      />
      <br/>
      <RatingBar max={10} ratingValue={8} />
    </div>
  );
}

export default App;
