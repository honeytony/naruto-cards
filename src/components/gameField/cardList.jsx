import React from 'react';
import Card from './card';
import './gameField.scss';
const CardList = ({ cards, setCurrentCard, choiseOne, choiseTwo, disabled }) => {
    return (
        <div className="cardList">
            {cards.map((card, index) => (
                <Card
                    setCurrentCard={setCurrentCard}
                    index={index}
                    active={card === choiseOne || card === choiseTwo || card.matched}
                    src={card.src}
                    key={card.id}
                    card={card}
                    disabled={disabled}
                />
            ))}
        </div>
    );
};

export default CardList;
