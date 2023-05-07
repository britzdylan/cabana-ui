const range = (theme: (arg0: string) => string | number) => {
  const knob = {
    width: theme('spacing.6'),
    height: theme('spacing.6'),
    borderRadius: '100%',
    background: '#fff',
    transition: 'all 0.2s ease-in-out',
    boxShadow: theme('boxShadow.light-200'),
  };
  return {
    'input[type="range"].range': {
      '-webkit-appearance': 'none',
      width: '100%',
      height: theme('spacing.1'),
      background: theme('colors.gray.200'),
      borderRadius: '9999px',
      outline: 'none',
      opacity: 1,
      transition: 'all 0.2s ease-in-out',
      accentColor: theme('colors.primary.500'),
      cursor: 'pointer',
    },
    'input[type="range"]::-webkit-slider-thumb': {
      /* Webkit browsers (Chrome, Safari, Edge) */
      ...knob,
    },

    'input[type="range"]::-moz-range-thumb': {
      /* Firefox */
      ...knob,
    },

    'input[type="range"]::-ms-thumb': {
      /* Internet Explorer */
      ...knob,
    },

    /* Webkit browsers (Chrome, Safari, Edge) */
    // 'input[type="range"]::-webkit-slider-runnable-track': {
    //   backgroundColor: theme('colors.primary.500') /* Set the desired color */,
    // },

    // /* Firefox */
    // 'input[type="range"]::-moz-range-track': {
    //   backgroundColor: theme('colors.primary.500') /* Set the desired color */,
    // },
  };
};

export default range;
