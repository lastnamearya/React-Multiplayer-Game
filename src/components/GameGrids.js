import React from 'react';
import SlideBox from './SlideBox';
import { GameDiv, GridsWrapper, User, ResetGame } from '../styles/GameWrapper';
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
          <h3>Player One</h3>
          {!isFirstValueSelected ? (
            <React.Fragment>
              <p>Please Select first value to Start</p>
              <button onClick={() => getFirstClickValue('o')}>o</button>
              <button onClick={() => getFirstClickValue('x')}>x</button>
            </React.Fragment>
          ) : (
            <p>{`You Selected ${firstPlayerValue}. No Go Play!`}</p>
          )}
        </User>
        <GridsWrapper gridsLength={userGridsInput}>
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
        </GridsWrapper>
        <User>
          <h3>Player Two</h3>
        </User>
      </GameDiv>
    )}
  </StoreConsumer>
);

export default GameGrids;
