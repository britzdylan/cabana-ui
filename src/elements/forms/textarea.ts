import styles from './styles';
import createVariants from '../../lib/colorVariants';
const defaultColor = 'gray';
const accentColor = 'secondary';
const errorColor = 'red';
const successColor = 'green';
const textarea = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      '& textarea': {
        accentColor: theme(`colors.${color}.400`),
        caretColor: theme(`colors.${color}.800`),
        ...styles.states(theme, defaultColor, color, errorColor, successColor),
      },
    };
  };

  return {
    '.textarea': {
      ...styles.wrapper(theme),

      '& label': {
        ...styles.label(theme),
        color: theme(`colors.${defaultColor}.700`),
      },

      '& label.helper': {
        ...styles.helper(theme),
        color: theme(`colors.${defaultColor}.500`),
      },

      '& textarea': {
        display: 'block',
        width: '100%',
        padding: theme('spacing.2'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        backgroundColor: '#fff',
        borderRadius: theme('borderRadius.md'),
        transition: 'all .1s ease-out',
        minHeight: '100px',
        color: theme(`colors.${defaultColor}.800`),
        border: `1px solid ${theme(`colors.${defaultColor}.300`)}`,
        ...styles.states(
          theme,
          defaultColor,
          accentColor,
          errorColor,
          successColor
        ),
      },

      '&-large': {
        '& label.label': {
          fontSize: theme('fontSize.label'),
        },
        '& textarea': {
          fontSize: theme('fontSize.label'),
        },
      },

      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default textarea;
