import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './gameMenu.scss';

const GameMenu = ({ startGame, gameState, about, menu, stateDifficult }) => {
    switch (gameState) {
        case 'about':
            return (
                <div className="container">
                    <div className="git">github: honeytony</div>
                    <div className="buttons">
                        <button onClick={() => menu()}>Вернуться</button>
                    </div>
                </div>
            );
        case 'difficult':
            return (
                <div className="container">
                    <div className="buttons">
                        <button onClick={() => startGame(0)}>Легко</button>
                        <button onClick={() => startGame(1)}>Нормально</button>
                        <button onClick={() => startGame(2)}>Тяжело</button>
                    </div>
                </div>
            );

        default:
            return (
                <div className="container">
                    <div className="logo"></div>
                    <div className="buttons">
                        <button onClick={() => stateDifficult()}>Начать игру</button>
                        <button onClick={() => about()}>Автор</button>
                    </div>
                </div>
            );
    }
};

export default GameMenu;
