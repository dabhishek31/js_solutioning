/**
 * There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.
 * Example
 * n = 5,
 * ar = [2, 2, 4, 5, 4]
 * There is one pair of color 2  and one of color 4. There is one odd socks left, of  color 5. The number of pairs is 2.
 * @param {*} n
 * @param {*} ar
 * @returns
 */
function sockMerchant(n, ar) {
  let countPairs = 0;
  let tempArray = [];
  ar.forEach((element) => {
    const index = tempArray.indexOf(element);
    if (index > -1) {
      tempArray.splice(index, 1);
      countPairs++;
    } else {
      tempArray.push(element);
    }
  });
  return countPairs;
}

console.log(sockMerchant(5, [2, 2, 4, 5, 4]));
