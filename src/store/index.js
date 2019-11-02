import React from 'react';
import { getTotalMatchCases } from '../utils/checkWinner';

// Creating a Context Store for our Game

const { Provider, Consumer } = React.createContext();

// **************************************** //

class StoreProvider extends React.Component {
  state = {
    // Toggle to Show Form on firs Landing ~ To get no of Grids
    isFormActive: true,
    // No of grids ~ User Input
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
    // Total Winning Case ~ Matches ~ Empty by default
    winningCases: [],
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

      // In Last, After getting Grid No, I'll dynamically generate total Winnigcase for that particulat Grid No, I'll do it once as it's hefty performance call that'll be only happend once in beginning.

      this.generateWinningCases(numericGridValue, slidesArray);
    } else {
      alert('Please enter a number in give range to continue playing the game');
    }
  };

  // ******************************************** //

  // To Generate Total Winning Match Cases

  generateWinningCases = (numericGridValue, slidesArray) => {
    const winningCases = getTotalMatchCases(numericGridValue, slidesArray);

    // Then I'll save winning cases in our Store State
    this.setState({ winningCases });
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

  checkWinner = (playerMovesArray, currentActivePlayer) => {
    const { winningCases, userGridsInput } = this.state;

    // Here I'm firing a for loop to match our winning case with player moves.

    for (let i = 0; i < winningCases.length; i++) {
      // Intermediatory Variable as a counter that'll update if the particular winning case matches the player move.

      let length = 0;

      // I'm also firing a loop over Player moves to check whether the Matching case includes player moves or not.

      for (let j = 0; j < playerMovesArray.length; j++) {
        if (winningCases[i].includes(playerMovesArray[j])) {

          // If the current matching case includes the player move then I'll update my counter variable length.

          length++;
        }
        // No Else clause here, As I'm not going to do anything if it not includes player move.
      }

      // When our intermediatory variable equals to user input. Then we got our winner. That's how I matched all the winning cases.

      if (length === userGridsInput) {
        // First I'll complete the Game
        this.setState({ isGameCompleted: true });

        // After this I'll Highlight the Player who won the Game usign alert box after a little delay of half second.

        setTimeout(() => {
          alert(`${currentActivePlayer} Won!`);
        }, 500);
      }
      // No Else clause here. As this code is only execute when we found a winner.
    }
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
      winningCases: [],
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
