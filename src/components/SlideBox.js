import React from 'react';
import { Box } from '../styles/GameWrapper';

class SlideBox extends React.Component {
  state = {
    showValue: false,
    currentValue: undefined,
  };

  // ********************************* //

  // To stop overriding of current Value I'll limit componnet Did Update here using shouldComponetnUpdate Lifecyle Hook based on state's showValue

  shouldComponentUpdate() {
    if (!this.state.showValue) {
      return true;
    } else {
      return false;
    }
  }

  // *********************************** //

  // Once Player First Selects initial Value then I'll fire this lifecyle to get Initial Current Value.

  componentDidUpdate(prevProps) {
    if (prevProps.isFirstPlayerActive !== this.props.isFirstPlayerActive) {
      this.getInitialState();
    }
  }

  // ********************************* //

  getInitialState = () => {
    const { isFirstPlayerActive, firstPlayerValue, secondPlayerValue } = this.props;

    // Current Render Value ~ Based on Which Player is active currently. Here I'm dynamically assigning current active player value based on which player is active by using "isFirstValueSelected" variable.

    const currentValue = isFirstPlayerActive ? firstPlayerValue : secondPlayerValue;

    this.setState({ currentValue: currentValue });
  };

  // *********************************** //

  onSlideClick = () => {
    const { showValue } = this.state;

    const { isGameCompleted } = this.props;

    // If showValue is false and isGameCompleted is false then I'm going to execute this function, Otherwise I won't execute.

    if (!showValue && !isGameCompleted) {
      const { isFirstValueSelected, slideIndex, getPlayerMoves } = this.props;

      // Here before continue anything first I'll check whether the first value is selected or not, If not then I'll alert user to select from 0 or X by popping up a alert box.

      if (isFirstValueSelected) {
        // By default We're not going to show any value in the Box.
        this.setState({ showValue: true });

        // Then, I'll record this move and pass this current Slide Index to my Store to record the move.

        getPlayerMoves(slideIndex);
      } else {
        alert('Hey choose first value to play the Game 0 or X');
      }
    }
    // No Else clause here.
  };

  // *********************************** //

  render() {
    const { showValue, currentValue } = this.state;

    return <Box onClick={this.onSlideClick}>{showValue && <h2>{currentValue}</h2>}</Box>;
  }
}

export default SlideBox;
