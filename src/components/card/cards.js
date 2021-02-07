import React from 'react';
import '../../App.css';
import './Cards.css';
// component
import CardItem from './cardItem';
function cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations !</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-9.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-4.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default cards;
