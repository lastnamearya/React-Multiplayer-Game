import React from 'react';
import { ThemeProvider } from 'styled-components';
import Confetti from 'react-confetti';
import { StoreProvider, StoreConsumer } from '../store';
import { lightTheme, darkTheme } from '../styles/Theme';
import GameGrids from './GameGrids';
import { GameWrapper, ThemeSwitch, FormWrapper, MobileStart, MadeBy } from '../styles/Game';
import GlobalStyles from '../styles/GlobalStyles';
import ReactLogo from '../styles/logo.svg';

class App extends React.Component {
  state = {
    // No of Grids ~ default form value
    gridsLength: '',
    // State Variable to control Dark Theme Toggle
    isDarkThemeActive: false,
    // For Mobile View (width)~ I'll show direct Start Button with 3 Grids as default
    viewPortwidth: 0,
    // Height ~ For React Confetti ( Render when someone wins the Game )
    viewPortHeight: 0,
  };

  // ************************ //

  // Retrieving current Active Theme through Local Storage using componentDidMount() Lifecycyle + Also getting Width of current Device for Mobiel Form Toggle.

  componentDidMount() {
    this.retrieveActiveTheme();

    // To get Very First viewport Width.

    this.updateWindowDimensions();

    // Adding Event Listener to get Current Width of viewport when user resizes the Image.
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  // **************************** //

  // I'll remove this Event Listner when component unmounted from DOM

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // ************************ //

  // Updating out State for current viewport width

  updateWindowDimensions = () =>
    this.setState({ viewPortwidth: window.innerWidth, viewPortHeight: window.innerHeight });

  // ************************ //

  // Local Storage read to get current Theme

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
    const { gridsLength, isDarkThemeActive, viewPortwidth, viewPortHeight } = this.state;

    // *************************** //

    // On Mobile Devices I"m only going to show a Start Button that'll on clicking will choose 3 Grids as default. I won't show Grid Selector form on Mobile Platform. If current ViewPortWidth is less than or equal to 500 then I'll make isMobileActive truthy.

    const isMobileViewActive = viewPortwidth <= 500;

    // *************************** //

    return (
      <StoreProvider>
        <StoreConsumer>
          {({ isFormActive, isConfettiActive, getGridsNumber }) => (
            <ThemeProvider theme={isDarkThemeActive ? darkTheme : lightTheme}>
              {/* Global Styles File */}
              <GlobalStyles />
              {/* React Confetti ~ Animation Component, I'll show when someone win the Game */}
              {isConfettiActive && <Confetti width={viewPortwidth} height={viewPortHeight} />}
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
                <img src={ReactLogo} alt="React" id="react-img" />
                <h1>
                  React Tic-Tac-Toe{' '}
                  <span role="img" aria-label="play">
                    🎮
                  </span>
                  <hr />
                </h1>
                {/* If form is active then I'll show Input Form else will show Game Grids to Play. On Mobile Platform I'll show Start Button */}
                {isFormActive ? (
                  isMobileViewActive ? (
                    <MobileStart onClick={event => getGridsNumber(event, 3)}>Play</MobileStart>
                  ) : (
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
                  )
                ) : (
                  <GameGrids isMobileViewActive={isMobileViewActive} />
                )}
                <MadeBy isFormActive={isFormActive && isFormActive}>
                  <p>
                    Made with &nbsp; <span className="heart" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; and{' '}
                    <span role="img" aria-label="play">
                      🍺
                    </span>{' '}
                    by{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://lastnamearya.github.io/"
                      style={{ textDecoration: 'none' }}
                    >
                      <span id="lastnamearya">lastnamearya</span>
                    </a>
                    &nbsp;
                  </p>
                </MadeBy>
              </GameWrapper>
            </ThemeProvider>
          )}
        </StoreConsumer>
      </StoreProvider>
    );
  }
}

export default App;
