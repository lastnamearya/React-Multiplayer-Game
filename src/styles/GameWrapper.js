import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;

  h1 {
    margin: 0;
  }

  p {
    margin-top: 5px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  p {
    font-size: 1.2rem;
  }

  input {
    margin-right: 8px;
    width: 180px;
    padding: 10px;
  }

  button {
    width: 90px;
    height: 37px;
    cursor: pointer;
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    background: #5ed4ad;
    border: none;
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
  width: auto;

  margin-top: 20px;

  button {
    width: 50px;
    height: 30px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
`;
