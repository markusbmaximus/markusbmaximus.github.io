export const zeroPad = (
  num: number,
  places: number,
  symbol = " ",
  reverse = false
) => {
  let theString = String(num.toLocaleString("en-US"));
  if (!reverse) {
    return theString.length <= places
      ? theString.padStart(places, symbol)
      : theString.slice(0, places - 3) + "...";
  } else {
    return theString.length <= places
      ? theString.padEnd(places, symbol)
      : theString.slice(0, places - 3) + "...";
  }
};
