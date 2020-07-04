// Function to Check Matching Case

export const getTotalMatchCases = (numericGridValue, slidesArray) => {
  // This array will hold ~ total match winning cases

  const winningMatchCases = [];

  /*
      What I figured out that there are 4 types of Match Winning Cases. So in order to compute all four cases I'll fire four loops to get all my winning cases.

        1. Horizontal Match cases ( Left to Right ~ Row )
        2. Vertical Match cases ( Top to Bottom ~ Coloumn )
        3. First Cross Axis ( \ ) ~ From Start to End till last case
        4. End Cross Axix ( /) ~ From End to start last case

    */

  // Case 1: Horizontal Row ~ Here I'm creating a horizontalMatchCase Array that I'll use as intermediatory array to loop over and calculate other values.

  const horizontalMatchingCases = [];

  // First using this Loop I'll split my slidesArray into horizontal Matching cases using splice method.

  for (let i = 0; i < slidesArray.length; i += numericGridValue) {
    const matchingCase = slidesArray.slice(i, i + numericGridValue);

    // Here I'm saving matching cases into an intemediatory horizontalMatchCase array as well

    horizontalMatchingCases.push(matchingCase);

    // In last I'll push matching case to my winningMatchCases Array to keep in sync.
    winningMatchCases.push(matchingCase);
  }

  // Case 2: Get Vertical Match Cases ( Top to Down ~ Column )

  for (let i = 0; i < horizontalMatchingCases.length; i++) {
    // This is an intermediatory match case array I created that'll holds the current i values

    const matchingCase = [];

    // Now I"m firing a new loop on particular horizontal case.

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

  // Here k is a variable that holds the last index value of horizontal Matching cases array.

  let k = horizontalMatchingCases.length - 1;

  // Last Cross-Axis Match case array.

  const lastCrossMatchCase = [];

  for (let i = 0; i < horizontalMatchingCases.length; i++) {
    // Here I"m firing a loop that'll start from the last element of particular horizontal matching case
    for (k; k >= 0; k--) {
      lastCrossMatchCase.push(horizontalMatchingCases[i][k]);

      // After I'll reduce my couter variable by 1.
      k--;

      // To limit the loop I'll break it right after the first push.
      break;
    }
  }

  // Now in last, I'm pushing my lastCrossMatchCase to my winning MatchCases Array.

  winningMatchCases.push(lastCrossMatchCase);

  // In End, I'll return the final winningMatchCases Array.

  return winningMatchCases;
};
