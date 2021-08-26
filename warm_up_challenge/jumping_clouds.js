/// There is a new mobile game that starts with consecutively numbered clouds.
/// Some of the clouds are thunderheads and others are cumulus.
/// The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2.
/// The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from
/// the starting postion to the last cloud. It is always possible to win the game.

/// For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided.

function jumpingOnClouds(c) {
  let shortestJump = 0;
  for (let index = 0; index < c.length; index++) {
    const element = c[index];
    const nextElement = c[index + 1];
    const nextToNextElement = c[index + 2];

    if (element === 0 && nextElement === 0 && nextToNextElement === 0) {
      shortestJump += 1;
      index += 1;
    } else if (element === 0 && nextElement !== 0 && nextToNextElement === 0) {
      shortestJump += 1;
      index += 1;
    } else if (element === 0 && nextElement === 0 && nextToNextElement !== 0) {
      shortestJump += 1;
    }
  }

  return shortestJump;
}

jumpingOnClouds([0, 0, 0, 0, 1, 0]);
