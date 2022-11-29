import React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button';
// import BlueButton from './BlueButton';
// import RedButton from './RedButton';
// import YellowButton from './YellowButton';

const App = () => (
  <>
    <h2>Buttons</h2>
    <Button color={'black'} background-color={'yellow'}></Button>
    {/* <BlueButton>En blå knapp</BlueButton>
    <RedButton>En röd knapp</RedButton>
    <YellowButton>En gul knapp</YellowButton> */}
  </>
)

export default App;
