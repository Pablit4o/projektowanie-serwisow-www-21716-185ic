import React from 'react';
import Card from './card'
import picture from './img/kot_pilot.png'
import './App.css';

const profilePic = () =>{
  return picture
}

export default function App() {
  return (
    <Card img={profilePic()} />
  );
}
