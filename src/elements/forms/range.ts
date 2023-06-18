const defaultColor = 'gray';
const accentColor = 'primary';
import createVariants from '../../lib/colorVariants';

const range = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      accentColor: theme(`colors.${color}.500`),
    };
  };
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
      background: theme(`colors.${defaultColor}.100`),
      borderRadius: '9999px',
      outline: 'none',
      opacity: 1,
      transition: 'all 0.2s ease-in-out',
      accentColor: theme(`colors.${accentColor}.500`),
      cursor: 'pointer',
      '&-large': {
        height: theme('spacing.2'),
      },
      ...Object.fromEntries(createVariants(colors)),
    },
    'input[type="range"]::-webkit-slider-thumb': {
      /* Webkit browsers (Chrome, Safari, Edge) */
      ...knob,
      '&.range-large': {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
      },
    },

    'input[type="range"]::-moz-range-thumb': {
      /* Firefox */
      ...knob,
      '&.range-large': {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
      },
    },

    'input[type="range"]::-ms-thumb': {
      /* Internet Explorer */
      ...knob,
      '&.range-large': {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
      },
    },
  };
};

export default range;
