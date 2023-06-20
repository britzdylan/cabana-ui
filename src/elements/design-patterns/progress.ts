const defaultColor = 'secondary';
import createVariants from '../../lib/colorVariants';

const progress = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      backgroundColor: theme(`colors.${color}.500`),
      '&::-webkit-progress-bar': {
        backgroundColor: theme(`colors.${color}.200`),
      },

      /* Change the appearance of the progress bar fill */
      '&::-webkit-progress-value': {
        backgroundColor: theme(`colors.${color}.500`),
      },

      /* Style the progress bar in Firefox */
      '&::-moz-progress-bar': {
        backgroundColor: theme(`colors.${color}.500`),
      },
    };
  };
  return {
    'progress.progress': {
      height: theme('spacing.2'),
      /* Set the width of the progress bar */
      width: '100%',
      /* Set the color of the progress bar */
      color: theme(`colors.${defaultColor}.500`),
      borderRadius: theme('borderRadius.full'),
      overflow: 'hidden',
      /* Change the appearance of the progress bar track */

      '&::-webkit-progress-bar': {
        backgroundColor: theme(`colors.${defaultColor}.200`),
      },

      /* Change the appearance of the progress bar fill */
      '&::-webkit-progress-value': {
        backgroundColor: theme(`colors.${defaultColor}.500`),
      },

      /* Style the progress bar in Firefox */
      '&::-moz-progress-bar': {
        backgroundColor: theme(`colors.${defaultColor}.500`),
      },
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default progress;
