import styled, { css } from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 40px;

  h1 {
    margin: 0;

    ${'' /* Heading Color / Style Changes for Dark Theme */}

    ${({ theme }) =>
      theme.name === 'dark' &&
      css`
        ackground: white;
        background: linear-gradient(to right, #7ee8f9, #80ff72);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-box-decoration-break: clone;
        box-decoration-break: clone;
        text-shadow: none;
      `};
  }

  hr {
    background-color: #7cffcb;
    background-image: linear-gradient(315deg, #01baef 0%, #7ee8fa 0%, #80ff72 74%);

    height: 3px;
    outline: none;
    border: none;
    margin: 5px -15px 15px -13px !important;
  }

  p {
    margin-top: 5px;
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-right: 10%;
  margin-bottom: 10px;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 20px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 30px;
    width: 30px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: white url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input:checked + .slider {
    background: linear-gradient(to right, #fefb72, #f0bb31);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export const FormWrapper = styled.div`
  margin-top: 10px;

  ::before {
    content: '';
    position: absolute;
    width: 645px;
    height: 205px;
    margin-left: 2.3rem;
    border-radius: 16px;
    background-color: #7cffcb;
    background-image: linear-gradient(315deg, #01baef 0%, #7ee8fa 0%, #80ff72 74%);
    opacity: 0.5;
  }

  #form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.3rem;
    padding: 40px 60px;
    box-shadow: 0.5em 0.5em 1.5em 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    ${'' /* z-index: 100; */}
    position: relative;
    background: #fff;
  }

  p {
    font-size: 1.2rem;
    letter-spacing: 0.25px;
  }

  #number_range {
    color: #fff;
    font-weight: 600;
    padding: 0 5px;
    background-color: #20bf55;
    background-image: linear-gradient(300deg, #20bf55 0%, #01baef 74%);
  }

  ${'' /* form Element */}

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 180px;
    padding: 10px 15px;
    outline-color: #5ed3ad;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border: none;
    border: 0.5px solid #dcdcdc;
    border-right-color: transparent;
  }

  button {
    width: 90px;
    height: 34px;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
    background: #5ed4ad;
    border: none;
    outline: none;

    background-color: #20bf55;
    background-image: linear-gradient(300deg, #20bf55 0%, #01baef 74%);

    ${'' /* border-radius: 5px; */}
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

// ********************************* //

// Game Grids

export const GameDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 50px 10%;
  width: 100%;
`;

export const GridsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  max-width: auto;
`;

export const GridsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  cursor: pointer;  

  ${'' /* Dynamically generating width based on user Grids Input */}

  width: ${({ gridsLength }) => `${gridsLength * 100}px`};
  height: auto;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
  padding: 50px 35px 30px 40px;
  border-radius: 12px;
`;

export const Box = styled.div`
  width: 85px;
  height: 75px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  text-align: center;
  margin-right: 7px;
  margin-bottom: 8px;

  h2 {
    font-size: 2rem;
    line-height: 75px;
    margin: 0;
  }
`;

export const ResetGame = styled.button`
  font-size: 1rem;
  margin-top: 2rem;
  font-weight: 550;
  cursor: pointer;
  background: linear-gradient(-45deg, #ec1943, #f0486a);
  border: none;
  color: #fff;
  width: 140px;
  height: 40px;
  border-radius: 40px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 300px;

  margin-top: 20px;

  h3 {
    margin-top: 0;
  }

  ${'' /* Player Emoji */}

  #emoji {
    font-size: 23px;
    margin-left: 7px;
  }

  button {
    width: 50px;
    height: 40px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 18px;
    border: 10px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

    &:hover {
      font-weight: bold;
    }
  }

  ${'' /* User Selected Value ~ First Player */}

  #selected {
    text-transform: uppercase;
    background: #46ebc3;
    padding: 2px 3px;
    font-weight: 600;
  }

  ${'' /* Tooltip */}

  .tooltip {
    display: inline-block;
    position: relative;
    text-align: center;
  }

  .tooltip .top {
    width: 80px;
    top: -15px;
    left: 50%;
    transform: translate(-50%, -100%);
    padding: 5px 15px 5px 0px;
    color: #fff;
    background-color: #000;
    font-weight: normal;
    border-radius: 8px;
    position: absolute;
    z-index: 99999999;
    box-sizing: border-box;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: block;
    white-space: nowrap;
    display: ${props => (props.showTooltip ? 'block' : 'none')};

    p {
      font-size: 14px;
      margin-left: 15px;
    }
  }

  .tooltip .top i {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -12px;
    width: 24px;
    height: 12px;
    overflow: hidden;
  }

  .tooltip .top i::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    background-color: #000;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  }

  ${'' /* **** Live Dot Indicatior Animation ******* */}

  @keyframes up-right {
    0% {
      transform: scale(1);
      opacity: 0.25;
    }

    50% {
      transform: scale (1, 5);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 0.25;
    }
  }

  .circle {
    border-radius: 50%;
    width: 10px;
    height: 10px;
    opacity: 0.25;
    display: inline-block;
    margin-left: 7px;
    margin-bottom: 3px;
  }

  .green {
    background-color: #62bd19;
    -webkit-animation: up-right 1s infinite;
    -moz-animation: up-right 1s infinite;
    -o-animation: up-right 1s infinite;
    animation: up-right 1s infinite;
  }
`;
