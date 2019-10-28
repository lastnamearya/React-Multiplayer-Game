import React from 'react';
import { GameDiv, GridsWrapper, User, ResetGame, Box } from '../styles/GameWrapper';
import { StoreConsumer } from '../store';

// ***************************** //

// Single Box Slide in whole Grid

class Slide extends React.Component {
  state = {
    currentMove: undefined,
    showValue: false,
  };

  // *************************** //

  getCurrentValue = () => {
    const { currentClickValue } = this.props;

    this.setState({ currentMove: currentClickValue });
  };

  // *************************** //

  render() {
    const { showValue, currentMove } = this.state;

    return <Box>{showValue && <p>{currentMove}</p>}</Box>;
  }
}

// ******************************** //

const GameGrids = () => (
  <StoreConsumer>
    {({ slidesArray, resetGame, getFirstClickValue, firstClickValue, userGridsInput }) => (
      <GameDiv>
        <User>
          <h3>Player One</h3>
          {!firstClickValue ? (
            <React.Fragment>
              <p>Please Select first value to Start</p>
              <button onClick={() => getFirstClickValue('0')}>0</button>
              <button onClick={() => getFirstClickValue('X')}>X</button>
            </React.Fragment>
          ) : (
            <p>{`You Selected ${firstClickValue}. No Go Play!`}</p>
          )}
        </User>
        <GridsWrapper gridsLength={userGridsInput}>
          {slidesArray.map(index => (
            <Slide key={index} />
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
