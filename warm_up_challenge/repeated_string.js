/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER for number of 'a'.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */
function repeatedString(w, n) {
  let s = w.split("");
  var stringSize = s.length;
  var a = s.filter((a) => a == "a").length;

  var repeat = Math.floor(n / stringSize);

  var left = n - repeat * stringSize;

  return repeat * a + s.filter((a, i) => a == "a" && i < left).length;
}

console.log(
  repeatedString(
    "kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm",
    736778906400
  )
);
