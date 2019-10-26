import React from 'react';
import {
  GameDiv,
  GridsWrapper,
  HorizontalGridWrapper,
  User,
  ResetGame,
  Box,
} from '../styles/GameWrapper';
import { StoreConsumer } from '../store';

// ***************************** //

// Single Box ( Grid )

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

// ***************************** //

// X-Axis Horizontal Grids

const HorizontalGrid = () => (
  <StoreConsumer>
    {({ slidesArray, currentClickValue, nextMoveValue }) => {
      return (
        <HorizontalGridWrapper>
          {slidesArray.map(index => (
            <Slide
              key={index}
              currentClickValue={currentClickValue}
              nextMoveValue={nextMoveValue}
            />
          ))}
        </HorizontalGridWrapper>
      );
    }}
  </StoreConsumer>
);

// ******************************** //

const GameGrids = () => (
  <StoreConsumer>
    {({ slidesArray, resetGame, getFirstClickValue, firstClickValue }) => (
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
        <GridsWrapper>
          {slidesArray.map(index => (
            <HorizontalGrid key={index} />
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
