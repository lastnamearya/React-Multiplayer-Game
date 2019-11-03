import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StoreProvider, StoreConsumer } from '../store';
import { lightTheme, darkTheme } from '../styles/Theme';
import GameGrids from './GameGrids';
import { GameWrapper, ThemeSwitch, FormWrapper } from '../styles/Game';
import GlobalStyles from '../styles/GlobalStyles';
import ReactLogo from '../styles/logo.svg';

class App extends React.Component {
  state = {
    // No of Grids ~ default form value
    gridsLength: '',
    // State Variable to control Dark Theme Toggle
    isDarkThemeActive: false,
  };

  // ************************ //

  // Retrieving current Active Theme through Local Storage using componentDidMount()

  componentDidMount() {
    this.retrieveActiveTheme();
  }

  // ************************ //

  retrieveActiveTheme = () => {
    const isDarkThemeActive = JSON.parse(window.localStorage.getItem('isDarkThemeActive'));

    this.setState({ isDarkThemeActive });
  };

  // ************************ //

  // Form onChange Function for our input element

  handleChange = event => {
    this.setState({ gridsLength: event.target.value });
  };

  // ************************ //

  // Toggle for Switching Theme ~ Dark & Light

  toggleActiveTheme = () => {
    // First I'm updaing my State for Theme Change

    this.setState(prevState => ({ isDarkThemeActive: !prevState.isDarkThemeActive }));

    // Second After State Updation, I'm also persisting currrent Active Theme in LocalStorage

    window.localStorage.setItem('isDarkThemeActive', JSON.stringify(!this.state.isDarkThemeActive));
  };

  // ************************ //

  render() {
    const { gridsLength, isDarkThemeActive } = this.state;

    return (
      <StoreProvider>
        <StoreConsumer>
          {({ isFormActive, getGridsNumber }) => (
            <ThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
              {/* Global Styles File */}
              <GlobalStyles />
              <GameWrapper>
                {/* Light and Dark Theme Switch */}
                <ThemeSwitch>
                  <label id="switch" className="switch">
                    <input
                      type="checkbox"
                      id="slider"
                      onChange={this.toggleActiveTheme}
                      checked={isDarkThemeActive ? false : true}
                    />
                    <span className="slider round"></span>
                  </label>
                </ThemeSwitch>
                <img src={ReactLogo} alt="React" style={{ width: '10%', marginRight: '30px' }} />
                <h1>
                  React Tic-Tac-Toe{' '}
                  <span role="img" aria-label="play">
                    🎮
                  </span>
                  <hr />
                </h1>
                {/* If form is active then I'll show Input Form else will show Game Grids to Play */}
                {isFormActive ? (
                  <FormWrapper>
                    <div id="form">
                      <p>
                        Please select a Number ranging from <span id="number_range">3-8</span> for
                        Tic-Tac-Toe Grids
                      </p>
                      <form
                        onSubmit={event => {
                          // First I'll save user input (numeric value) into my Global Store
                          getGridsNumber(event, gridsLength);

                          // Second, I'm going to clear my Component State
                          this.setState({ gridsLength: '' });
                        }}
                      >
                        <input
                          value={gridsLength}
                          type="number"
                          placeholder="Please Choose No of Grids"
                          onChange={this.handleChange}
                        />
                        <button type="submit">Start</button>
                      </form>
                    </div>
                  </FormWrapper>
                ) : (
                  <GameGrids />
                )}
              </GameWrapper>
            </ThemeProvider>
          )}
        </StoreConsumer>
      </StoreProvider>
    );
  }
}

export default App;
