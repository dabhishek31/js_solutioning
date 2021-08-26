/// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps,
/// for every step it was noted if it was an uphill U,  or a downhill D,  step.
/// Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude.
/// We define the following terms:

/// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level
/// and ending with a step down to sea level.
/// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level
/// and ending with a step up to sea level.
/// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

/// Example
/// 8, "DDUUUUDD"

/// The hiker first enters a valley  units deep. Then they climb out and up onto a mountain  units high.
/// Finally, the hiker returns to sea level and ends the hike.

function countingValleys(steps, path) {
  let belowSeaLevel = false;
  let valleysCrossed = 0;
  let level = 0;
  path.split("").forEach((element) => {
    if (element === "U") {
      level += 1;
    } else {
      level -= 1;
    }

    if (level < 0) {
      belowSeaLevel = true;
    }

    if (belowSeaLevel && !level) {
      valleysCrossed += 1;
      belowSeaLevel = false;
    }
  });

  return valleysCrossed;
}

console.log(countingValleys(8, "UDDDUDUU"));
