import styles from './styles';
const defaultColor = 'gray';
const accentColor = 'blue';
const errorColor = 'red';
const successColor = 'green';
const textarea = (theme: (arg0: string) => string | number) => {
  return {
    '.textarea': {
      ...styles.wrapper(theme),

      '& label': {
        ...styles.label(theme),
      },

      '& label.helper': {
        ...styles.helper(theme),
      },

      '& textarea': {
        display: 'block',
        width: '100%',
        padding: theme('spacing.2'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        color: theme('colors.gray.800'),
        backgroundColor: '#fff',
        border: `1px solid ${theme('colors.gray.300')}`,
        borderRadius: theme('borderRadius.md'),
        transition: 'all 0.2s ease-in-out',
        minHeight: '100px',
        ...styles.states(theme, defaultColor, accentColor, errorColor, successColor),
      },

      '&-large': {
        '& label.label': {
          fontSize: theme('fontSize.label'),
        },
        '& textarea': {
          fontSize: theme('fontSize.label'),
        },
      },
    },
  };
};

export default textarea;
