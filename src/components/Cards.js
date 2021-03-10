import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet new people</h1>
      <p>Stay fit, keep moving and have a lot of fun!</p>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dancers5.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
            />
            <CardItem
              src='images/dancers6.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dancers4.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
            />
            <CardItem
              src='images/dancers7.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
            />
            <CardItem
              src='images/group.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;