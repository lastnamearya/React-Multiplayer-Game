import styled from 'styled-components';

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-right: 10px;
  }
`;

// ********************************* //

// Game Grids

export const GameDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const GridsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${'' /* Dynamically generating width based on user Grids Input */}

  width: ${({ gridsLength }) => `${gridsLength * 90}px`};
  height: auto;
`;

export const Box = styled.div`
  width: 85px;
  height: 75px;
  border: 2px solid #f0f0f0;
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

  button {
    width: 50px;
    height: 20px;
    margin-bottom: 5px;
    cursor: pointer;
  }
`;
