import React from 'react';
import { matchWinningCase } from '../utils/Winner';

// Creating a Context Store for our Game

const { Provider, Consumer } = React.createContext();

// **************************************** //

class StoreProvider extends React.Component {
  state = {
    isFormActive: true,
    userGridsInput: undefined,
    // Slide Array by defaut It's empty
    slidesArray: [],
    // First onClick ~to Start the Game.
    isFirstValueSelected: false,
    // Player One Value ~ Either O or X
    firstPlayerValue: undefined,
    // Player Two Value ~ Either O or X
    secondPlayerValue: undefined,
    // Toggle to check which Player is currently Active
    isFirstPlayerActive: false,
    // Player One Move Records Array ~ Slide index values
    firstPlayerRecords: [],
    // Player Two Move Records Array  ~ Slide index values
    secondPlayerRecords: [],
    // For Stopping user to click other Slides
    isGameCompleted: false,
  };

  // ******************************************** //

  // Function to get No of Grids Input from user

  getGridsNumber = (event, gridsNumber) => {
    event.preventDefault();

    const numericGridValue = Number(gridsNumber);

    // If the input entered by user is number ( truthy ) then I'll fire set update call. Else I'll alert user to input a right Numeric Value and Second case when the Number is less than 3.

    if (numericGridValue && numericGridValue >= 3 && numericGridValue <= 8) {
      // How many Slide Boxes we're going to show, If the number is 3 (user input) then I'm going to show 9 slides ( 3 * 3). If it's 4 then I'm going to show ( 4 * 4)

      // Total Slides Array

      const slidesArray = [];

      // No of Boxes it'll have, I'll multiple this with itself to get total no of slides.

      const slidesLength = Math.pow(numericGridValue, 2);

      for (let i = 0; i < slidesLength; i++) {
        slidesArray.push(i);
      }

      this.setState({ userGridsInput: numericGridValue, slidesArray, isFormActive: false });
    } else {
      alert('Please enter a number in give range to continue playing the game');
    }
  };

  // ******************************************** //

  /* Get First Slide Click Value Function, It'll give us following data to continue

    - It'll make our First Player active to continue
    - First Player Value Input ( Either o or x)
    - Second Player Value Input ( Either o or x)
    - To start the Game ~ It'll make isFirstValueSelected to be true.
  */

  getFirstClickValue = value => {
    const firstPlayerValue = value;

    const secondPlayerValue = value === 'o' ? 'x' : 'o';

    this.setState({
      isFirstValueSelected: true,
      isFirstPlayerActive: true,
      firstPlayerValue,
      secondPlayerValue,
    });
  };

  // ******************************************** //

  // Get Player Moves ~ I'm saving every Player Moves

  getPlayerMoves = slideIndex => {
    const { isFirstPlayerActive, firstPlayerRecords, secondPlayerRecords } = this.state;

    // In case of When First Player is Active

    if (isFirstPlayerActive) {
      const firstPlayerNewRecords = Array.from(firstPlayerRecords);

      // Pushing move to newly created Array from Store's First Player Records

      firstPlayerNewRecords.push(slideIndex);

      // Finally Updating State with the new move records array

      this.setState({ firstPlayerRecords: firstPlayerNewRecords });

      // In last checking winning patters

      this.checkWinner(firstPlayerNewRecords, 'First Player');
    }

    // ************** Second Player ********************* //
    else {
      const secondPlayerNewRecords = Array.from(secondPlayerRecords);

      // Pushing move to newly created Array from Store's Second Player Records

      secondPlayerNewRecords.push(slideIndex);

      // Finally Updating State with the new move records array

      this.setState({ secondPlayerRecords: secondPlayerNewRecords });

      // In last checking winning patters

      this.checkWinner(secondPlayerNewRecords, 'Second Player');
    }

    this.toggleCurrentActivePlayer();
  };

  // ******************************************** //

  // Toggle Current Active Player ~ It'll change the current Active Player

  toggleCurrentActivePlayer = () =>
    this.setState(prevState => ({
      isFirstPlayerActive: !prevState.isFirstPlayerActive,
    }));

  // ******************************************** //

  // Check if Won ~ Matching the winning case

  checkWinner = (movesArray, player) => {
    // Here I'm passing dynamically player moves array and no of grids to the utlility function ~ matchWinningCase to find the winning match.

    const result = matchWinningCase(movesArray, this.state.userGridsInput);

    // If result is the case of "winner" then I"ll reflect Game Over chagne in my Store.

    if (result && result === 'winner') {
      this.setState({ isGameCompleted: true });

      // After this I'll Highlight the Player who won the Game usign alert box after a little delay of half second.

      setTimeout(() => {
        alert(`${player} Won!`);
      }, 500);
    }
    // No Else clause here.
  };

  // ******************************************** //

  // Reset Game Function ~ on Clicking Reset ( It'll completely reset our Store State )

  resetGame = () => {
    this.setState({
      isFormActive: true,
      userGridsInput: undefined,
      slidesArray: [],
      isFirstValueSelected: false,
      firstPlayerValue: undefined,
      secondPlayerValue: undefined,
      isFirstPlayerActive: false,
      firstPlayerRecords: [],
      secondPlayerRecords: [],
      isGameCompleted: false,
    });
  };

  // ******************************************** //

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getGridsNumber: this.getGridsNumber,
          getFirstClickValue: this.getFirstClickValue,
          toggleCurrentActivePlayer: this.toggleCurrentActivePlayer,
          getPlayerMoves: this.getPlayerMoves,
          resetGame: this.resetGame,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };
