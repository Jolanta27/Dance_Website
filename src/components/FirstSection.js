import React from 'react';
import '../App.css';
import  { Button }  from './Button';
import './styles/FirstSection.css';

function FirstSection() {
  return (
    <div className='hero-container'>
      <h1>Impossible until it's done</h1>
      <p>Dancing is for everyone</p>
      <p>Challenge yourself</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SIGN UP
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;