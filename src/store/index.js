import React from 'react';
const { Provider, Consumer } = React.createContext();

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

  // Get Player Moves

  getPlayerMoves = slideIndex => {
    const { isFirstPlayerActive, firstPlayerRecords, secondPlayerRecords } = this.state;

    if (isFirstPlayerActive) {
      const firstPlayerNewRecords = Array.from(firstPlayerRecords);

      firstPlayerNewRecords.push(slideIndex);
      this.setState({ firstPlayerRecords: firstPlayerNewRecords });

      this.checkWinner(firstPlayerNewRecords);
    } else {
      const secondPlayerNewRecords = Array.from(secondPlayerRecords);

      secondPlayerNewRecords.push(slideIndex);
      this.setState({ secondPlayerRecords: secondPlayerNewRecords });

      this.checkWinner(secondPlayerNewRecords);
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

  // Check if Won ~ Match the case

  checkWinner = movesArray => {
    const matchingCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < matchingCases.length; i++) {
      const [one, two, three] = matchingCases[i];

      if (movesArray.includes(one) && movesArray.includes(two) && movesArray.includes(three)) {
        alert('winner');
      }
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
