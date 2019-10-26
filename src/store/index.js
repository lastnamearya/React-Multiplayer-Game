import React from 'react';
const { Provider, Consumer } = React.createContext();

class StoreProvider extends React.Component {
  state = {
    isFormActive: true,
    // Slide Array by defaut It's empty
    slidesArray: [],
    // First onClick ~ Slide Value ( Either it'll be 0 or X)
    firstClickValue: undefined,
    currentClickValue: undefined,
    nextMoveValue: undefined,
  };

  // ******************************************** //

  // Function to get No of Grids Input from user

  getGridsNumber = (event, gridsNumber) => {
    event.preventDefault();

    const numericGridValue = Number(gridsNumber);

    // If the input entered by user is number ( truthy ) then I'll fire set update call. Else I'll alert user to input a right Numeric Value and Second case when the Number is less than 3.

    if (numericGridValue && numericGridValue >= 3 && numericGridValue <= 8) {
      const slidesArray = [];

      for (let i = 0; i < numericGridValue; i++) {
        slidesArray.push(i);
      }

      this.setState({ slidesArray, isFormActive: false });
    } else {
      alert('Please enter a number greater in give range to continue playing the game');
    }
  };

  // ******************************************** //

  // Get First Slide Click Value

  getFirstClickValue = value => this.setState({ firstClickValue: value, currentClickValue: value });

  // ******************************************** //

  // Slides OnClick Function

  clickSlide = () => {
    const { currentClickValue } = this.state;

    if (currentClickValue === '0') {
      this.setState({ nextMoveValue: 'x' });
    } else if (currentClickValue === 'x') {
      this.setState({ nextMoveValue: '0' });
    }
  };

  // ******************************************** //

  // Reset Game Function ~ on Clicking Reset

  resetGame = () => {
    this.setState({ isFormActive: true, slidesArray: [] });
  };

  // ******************************************** //

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          getGridsNumber: this.getGridsNumber,
          getFirstClickValue: this.getFirstClickValue,
          resetGame: this.resetGame,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { StoreProvider, Consumer as StoreConsumer };
