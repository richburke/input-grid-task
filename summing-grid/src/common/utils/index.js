const SI_SYMBOL = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

export const sumRow = (row) => row.reduce((acc, value) => acc + Number(value), 0);

export const cleanNumericInput = (number) => String(number).replace(/[^0-9.-]/g, '');

/**
 * Full disclosure, I got the trickiest part of this logic from here:
 * https://stackoverflow.com/a/40724354/10540685
 * 
 * The solution I had in mind--testing for value ranges--wasn't nearly as
 * elegant, and I figured there must be something better.
 * 
 * I improved the code structure a bit, added the ability to handle negatives,
 * and added the ability to pass in a specified precision.  I've left the
 * most informative comments of the original.
 * 
 * Something else I learned is that 'k' (as opposed to 'K') is the official
 * representation for a thousand.
 */
export const abbreviateNumber = (number, precision = 3) => {
  let prefix = '';
  let suffix = '';

  if (number < 0) {
    prefix = '-';
    number *= -1;
  }

  // what tier? (determines SI symbol)
  const tier = Math.log10(number) / 3 | 0;

  // if the tier isn't 0, we need to scale and specify the suffix
  if(tier !== 0) {
    // get suffix and determine scale
    suffix = SI_SYMBOL[tier];
    const scale = Math.pow(10, tier * 3);

    number = number / scale;
  }
  return prefix + Number.parseFloat(number).toPrecision(precision) + suffix;
}
