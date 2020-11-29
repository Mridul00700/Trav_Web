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
                            path = '/services'
                        />
                        <CardItem 
                            src="../images/img-2.jpg"
                            text="Relax on the beach"
                            label= 'Luxury'
                            path = '/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src="../images/img-1.jpg"
                            text="Climb the mountains"
                            label= 'Adventure'
                            path = '/services'
                        />
                        <CardItem 
                            src="../images/img-8.jpg"
                            text="Enjoy the yellow ocean of sand"
                            label= 'Adventure'
                            path = '/services'
                        />
                        <CardItem 
                            src="../images/img-4.jpg"
                            text="Football on the Island"
                            label= 'Luxury'
                            path = '/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default cards;
