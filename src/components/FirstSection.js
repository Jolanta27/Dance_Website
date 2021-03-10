import React from 'react';
import '../App.css';
import { Button } from './Button';
import './FirstSection.css';

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
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default FirstSection;