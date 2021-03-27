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
              text='You will develop positive self-esteem and remain passionate about dancing with us.'
            />
            <CardItem
              src='images/dancers6.jpg'
              text="If you've been wishing you could dance, you can take your very first steps here."
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/dancers4.jpg'
              text='Turn up the temperature a bit and grab a gorgeous partner by the hand.'
            />
            <CardItem
              src='images/dancers7.jpg'
              text='Each class acts as a gold standard introduction to the dance - we feature some of the finest dance teachers in the world.'
            />
            <CardItem
              src='images/group.jpg'
              text='Studio socials generally foster a friendly learning environment, so you’ll likely find it’s easier to meet new people here than elsewhere.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;