const progress = (theme: (arg0: string) => string | number) => {
  const valueColor = (color: string) => {
    return { backgroundColor: theme(`colors.${color}.500`) };
  };
  return {
    'progress.progress': {
      height: theme('spacing.2'),
      /* Set the width of the progress bar */
      width: '100%',
      /* Set the color of the progress bar */
      color: theme('colors.primary.500'),
      borderRadius: theme('borderRadius.full'),
      overflow: 'hidden',
      /* Change the appearance of the progress bar track */

      '&::-webkit-progress-bar': {
        backgroundColor: theme('colors.gray.200'),
      },

      /* Change the appearance of the progress bar fill */
      '&::-webkit-progress-value': {
        backgroundColor: theme('colors.primary.500'),
      },

      /* Style the progress bar in Firefox */
      '&::-moz-progress-bar': {
        backgroundColor: theme('colors.primary.500'),
      },

      '&-secondary': {
        '&::-webkit-progress-value': {
          ...valueColor('secondary'),
        },
        '&::-moz-progress-bar': {
          ...valueColor('secondary'),
        },
      },

      '&-tertiary': {
        '&::-webkit-progress-value': {
          ...valueColor('tertiary'),
        },
        '&::-moz-progress-bar': {
          ...valueColor('tertiary'),
        },
      },

      '&-success': {
        '&::-webkit-progress-value': {
          ...valueColor('green'),
        },
        '&::-moz-progress-bar': {
          ...valueColor('green'),
        },
      },

      '&-error': {
        '&::-webkit-progress-value': {
          ...valueColor('red'),
        },
        '&::-moz-progress-bar': {
          ...valueColor('red'),
        },
      },

      '&-warning': {
        '&::-webkit-progress-value': {
          ...valueColor('yellow'),
        },
        '&::-moz-progress-bar': {
          ...valueColor('yellow'),
        },
      },
    },
  };
};

export default progress;
