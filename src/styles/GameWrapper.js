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

  p {
    font-size: 1.2rem;
  }

  input {
    margin-right: 8px;
    width: 150px;
    height: 20px;
    padding-left: 5px;
  }

  button {
    width: 60px;
    height: 24px;
    cursor: pointer;
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

  width: ${({ gridsLength }) => `${gridsLength * 90}px`};
  height: auto;
`;

export const Box = styled.div`
  width: 85px;
  height: 75px;
  border: 2px solid #f0f0f0;
  text-align: center;
`;

export const ResetGame = styled.button`
  width: 100px;
  height: 30px;
  font-size: 1rem;
  margin-top: 1rem;
  cursor: pointer;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 25%;
  margin-top: 20px;

  button {
    width: 50px;
    height: 30px;
    margin-bottom: 5px;
    cursor: pointer;
    font-size: 1rem;
  }
`;
