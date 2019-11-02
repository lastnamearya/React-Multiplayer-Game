// Function to Check Matching Case

export const getTotalMatchCases = (numericGridValue, slidesArray) => {
  // This array will hold ~ total match winning cases

  const winningMatchCases = [];

  /*
      What I figured out that there are 4 types of Match Winning Cases. So in order to computer all four cases I'll fire four loops to get all my winning cases.

        1. Horizontal Match cases ( Left to Right ~ Row )
        2. Vertical Match cases ( Top to Bottom ~ Coloumn )
        3. First Cross Axis ( \ ) ~ From Start to End till last case
        4. End Cross Axix ( /) ~ From End to start last case

    */

  // ***************** //

  // Case 1: Horizontal Row ~ Here I'm creating a horizontalMatchCase Array that I'll use as intermediatory array to loop over and calculate other values.

  const horizontalMatchingCases = [];

  for (let i = 0; i < slidesArray.length; i += numericGridValue) {
    const matchingCase = slidesArray.slice(i, i + numericGridValue);

    // Here I'm saving matching case into intemediatory horizontalMatchCase array as well

    horizontalMatchingCases.push(matchingCase);

    // In Last I'll push matching case to my winningMatchCases Array.
    winningMatchCases.push(matchingCase);
  }

  // ***************** //

  // Case 2: Get Vertical Match Cases ( Top to Down ~ Column )

  for (let i = 0; i < horizontalMatchingCases.length; i++) {
    const matchingCase = [];

    for (let j = 0; j < horizontalMatchingCases.length; j++) {
      matchingCase.push(horizontalMatchingCases[j][i]);

      if (matchingCase.length === horizontalMatchingCases.length) {
        winningMatchCases.push(matchingCase);
      }
      // No Else clause here. I'm only going to push to winningMatch case in the case of when matching case length is equals to numericGridValue
    }
  }

  // ***************** //

  // Case 3: First Cross-Axis ( \ )

  const startCrossAxis = [];

  for (let i = 0; i < horizontalMatchingCases.length; i++) {
    const matchingCase = horizontalMatchingCases[i].slice(i, i + 1);

    startCrossAxis.push(matchingCase[0]);
  }

  winningMatchCases.push(startCrossAxis);

  // ***************** //

  // Case 4: Last Cross-Axix ( / ) Last to First. Here I'll start from last to end.

  let k = horizontalMatchingCases.length - 1;

  const lastCrossMatchCase = [];

  for (let i = 0; i < horizontalMatchingCases.length; i++) {
    for (k; k >= 0; k--) {
      lastCrossMatchCase.push(horizontalMatchingCases[i][k]);
      k--;
      break;
    }
  }

  winningMatchCases.push(lastCrossMatchCase);

  return winningMatchCases;
};

// ********************************************************* //

// Old Code ~ Were I hardcoded matching cases to find the exact match and declare winner.

export const matchWinningCase = (movesArray, gridNumber) => {
  // Matching cases ~ It'll depends upon the Grid Number ( Ranging from 3 - 6)

  // ********* In case of 3 *************** //

  if (gridNumber === 3) {
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
        return 'winner';
      }
      // No else clause here.
    }
  }
  // ********* In case of 4 *************** //
  else if (gridNumber === 4) {
    const matchingCases = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [12, 9, 6, 3],
    ];

    for (let i = 0; i < matchingCases.length; i++) {
      const [one, two, three, four] = matchingCases[i];

      if (
        movesArray.includes(one) &&
        movesArray.includes(two) &&
        movesArray.includes(three) &&
        movesArray.includes(four)
      ) {
        return 'winner';
      }
      // No else clause here.
    }
  }
  // ********* In case of 5 *************** //
  else if (gridNumber === 5) {
    const matchingCases = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    for (let i = 0; i < matchingCases.length; i++) {
      const [one, two, three, four, five] = matchingCases[i];

      if (
        movesArray.includes(one) &&
        movesArray.includes(two) &&
        movesArray.includes(three) &&
        movesArray.includes(four) &&
        movesArray.includes(five)
      ) {
        return 'winner';
      }
      // No else clause here.
    }
  }
  // ********* In case of 6 *************** //
  else if (gridNumber === 6) {
    const matchingCases = [
      [0, 1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10, 11],
      [12, 13, 14, 15, 16, 17],
      [18, 19, 20, 21, 22, 23],
      [24, 25, 26, 27, 28, 29],
      [30, 31, 32, 33, 34, 35],
      [0, 6, 12, 18, 24, 30],
      [1, 7, 13, 19, 25, 31],
      [2, 8, 14, 20, 26, 32],
      [3, 9, 15, 21, 27, 33],
      [4, 10, 16, 22, 28, 34],
      [5, 11, 17, 23, 29, 35],
      [0, 7, 14, 21, 28, 35],
      [5, 10, 15, 20, 25, 30],
    ];

    for (let i = 0; i < matchingCases.length; i++) {
      const [one, two, three, four, five, six] = matchingCases[i];

      if (
        movesArray.includes(one) &&
        movesArray.includes(two) &&
        movesArray.includes(three) &&
        movesArray.includes(four) &&
        movesArray.includes(five) &&
        movesArray.includes(six)
      ) {
        return 'winner';
      }
      // No else clause here.
    }
  }
};
