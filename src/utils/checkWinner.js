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

