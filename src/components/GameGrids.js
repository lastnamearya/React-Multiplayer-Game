import React from 'react';
import SlideBox from './SlideBox';
import { GameDiv, GridsWrapper, GridsDiv, User, ResetGame } from '../styles/Game';
import { StoreConsumer } from '../store';

const GameGrids = () => (
  <StoreConsumer>
    {({
      slidesArray,
      resetGame,
      getFirstClickValue,
      firstPlayerValue,
      secondPlayerValue,
      isFirstValueSelected,
      isFirstPlayerActive,
      isGameCompleted,
      userGridsInput,
      getPlayerMoves,
    }) => (
      <GameDiv>
        {/* User only visible while Game is in Progress */}
        {!isGameCompleted && (
          <User showTooltip={isFirstPlayerActive && true}>
            <div className="tooltip">
              <h3>Player One</h3>
              <div className="top">
                <span role="img" aria-label="img" id="emoji">
                  🙋‍♂️
                </span>
                <div className="circle green" />
                <i></i>
              </div>
            </div>
            {!isFirstValueSelected ? (
              <React.Fragment>
                <p>Please Select first value to Start</p>
                <button onClick={() => getFirstClickValue('o')}>o</button>
                <button onClick={() => getFirstClickValue('x')}>x</button>
              </React.Fragment>
            ) : (
              <p>
                You Selected <span id="selected">{firstPlayerValue}</span> Now Go Play!{' '}
                {isFirstPlayerActive && (
                  <span role="img" aria-label="img" style={{ fontSize: '25px' }}>
                    👉
                  </span>
                )}
              </p>
            )}
          </User>
        )}
        <GridsWrapper>
          <GridsDiv gridsLength={userGridsInput}>
            {slidesArray.map(index => (
              <SlideBox
                key={index}
                slideIndex={index}
                isFirstValueSelected={isFirstValueSelected}
                isFirstPlayerActive={isFirstPlayerActive}
                isGameCompleted={isGameCompleted}
                firstPlayerValue={firstPlayerValue}
                secondPlayerValue={secondPlayerValue}
                getPlayerMoves={getPlayerMoves}
              />
            ))}
            <ResetGame onClick={resetGame}>Reset Game</ResetGame>
          </GridsDiv>
        </GridsWrapper>
        {/* User only visible while Game is in Progress */}
        {!isGameCompleted && (
          <User showTooltip={isFirstValueSelected && !isFirstPlayerActive && true}>
            <div className="tooltip">
              <h3>Player Two</h3>
              <div className="top">
                <span role="img" aria-label="img" id="emoji">
                  🙋‍♂️
                </span>
                <div className="circle green" />
                <i></i>
              </div>
            </div>
            {!isFirstPlayerActive && isFirstValueSelected && (
              <p>
                <span role="img" aria-label="img" style={{ fontSize: '25px' }}>
                  👈
                </span>{' '}
                Your Turn!
              </p>
            )}
          </User>
        )}
      </GameDiv>
    )}
  </StoreConsumer>
);

export default GameGrids;
