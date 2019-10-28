import React from 'react';
import SlideBox from './SlideBox';
import { GameDiv, GridsWrapper, GridsDiv, User, ResetGame } from '../styles/GameWrapper';
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
      userGridsInput,
      getPlayerMoves,
    }) => (
      <GameDiv>
        <User>
          <h3>
            Player One{' '}
            <span>
              {isFirstPlayerActive && (
                <span role="img" aria-label="img" style={{ fontSize: '25px' }}>
                  🙋‍♂️
                </span>
              )}
            </span>
          </h3>
          {!isFirstValueSelected ? (
            <React.Fragment>
              <p>Please Select first value to Start</p>
              <button onClick={() => getFirstClickValue('o')}>o</button>
              <button onClick={() => getFirstClickValue('x')}>x</button>
            </React.Fragment>
          ) : (
            <p>
              You Selected <span style={{ textTransform: 'uppercase' }}>{firstPlayerValue}</span>{' '}
              Now Go Play!{' '}
              {isFirstPlayerActive && (
                <span role="img" aria-label="img" style={{ fontSize: '25px' }}>
                  👉
                </span>
              )}
            </p>
          )}
        </User>
        <GridsWrapper>
          <GridsDiv gridsLength={userGridsInput}>
            {slidesArray.map(index => (
              <SlideBox
                key={index}
                slideIndex={index}
                isFirstValueSelected={isFirstValueSelected}
                isFirstPlayerActive={isFirstPlayerActive}
                firstPlayerValue={firstPlayerValue}
                secondPlayerValue={secondPlayerValue}
                getPlayerMoves={getPlayerMoves}
              />
            ))}
            <ResetGame onClick={resetGame}>Reset Game</ResetGame>
          </GridsDiv>
        </GridsWrapper>
        <User>
          <h3>
            Player Two{' '}
            <span>
              {isFirstValueSelected && !isFirstPlayerActive && (
                <span role="img" aria-label="img" style={{ fontSize: '25px' }}>
                  🙋‍♂️
                </span>
              )}
            </span>
          </h3>
          {!isFirstPlayerActive && isFirstValueSelected && (
            <p>
              <span role="img" aria-label="img" style={{ fontSize: '25px' }}>
                👈
              </span>{' '}
              Your Turn!
            </p>
          )}
        </User>
      </GameDiv>
    )}
  </StoreConsumer>
);

export default GameGrids;
