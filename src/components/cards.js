import React from 'react';
import CardItem from './cardItem';
import './cards.css';



function cards() {
    return (
        <div className="cards">
            <h1> Check out these amazing places!!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src="../images/img-9.jpg"
                            text="Explore the nature"
                            label= 'Adventure'
                            path = '/servies'
                        />
                        <CardItem 
                            src="../images/img-2.jpg"
                            text="Explore the nature"
                            label= 'Adventure'
                            path = '/servies'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default cards;
