import styles from './styles';
import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { iconSize } = directives;
const defaultColor = 'gray';
const accentColor = 'secondary';
const errorColor = 'red';
const successColor = 'green';

const input = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      border: `1px solid ${theme(`colors.${color}.200`)}`,
      color: theme(`colors.${color}.500`),
    };
  };

  const accentColors = (
    defaultColor: string,
    accentColor: string,
    errorColor: string,
    successColor: string
  ) => {
    return {
      ...styles.states(
        theme,
        defaultColor,
        accentColor,
        errorColor,
        successColor
      ),
    };
  };

  const colorVariants = (color: string) => {
    return {
      '& input': {
        accentColor: theme(`colors.${color}.400`),
        caretColor: theme(`colors.${color}.800`),
      },
      '& select.select': {
        accentColor: theme(`colors.${color}.400`),
        caretColor: theme(`colors.${color}.800`),
      },
      '& > span:not(.input-prefix, .input-suffix)': {
        ...accentColors(defaultColor, color, errorColor, successColor),
      },
    };
  };

  const inputSpan = {
    ...colors(defaultColor),
    ...accentColors(defaultColor, accentColor, errorColor, successColor),
    backgroundColor: '#fff',
    overflow: 'hidden',
    padding: 0,
    width: '100%',
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.bold'),
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.2'),
    justifyContent: 'space-between',
    borderRadius: theme('borderRadius.md'),
    transition: 'all .1s ease-out',
    '& .icon': {
      ...iconSize(theme, 5),
    },
    '& svg ': {
      ...iconSize(theme, 5),
    },
    '& .icon:first-child': {
      marginLeft: theme('spacing.2'),
    },
    '& .icon:last-child': {
      marginRight: theme('spacing.2'),
    },
    '& svg:first-child': {
      marginLeft: theme('spacing.2'),
    },
    '& svg:last-child': {
      marginRight: theme('spacing.2'),
    },
  };

  const prefixSuffix = {
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.normal'),
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.2'),
    justifyContent: 'center',
    height: '100%',
    padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
  };

  const prefixColor = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      backgroundColor: theme(`colors.${color}.50`),
      borderRight: `1px solid ${theme(`colors.${color}.200`)}`,
    };
  };

  const suffixColor = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      backgroundColor: theme(`colors.${color}.50`),
      borderLeft: `1px solid ${theme(`colors.${color}.200`)}`,
    };
  };

  return {
    '.input': {
      ...styles.wrapper(theme),
      '& label.label': {
        ...styles.label(theme),
        color: theme(`colors.${defaultColor}.700`),
      },
      '& > span:not(.input-prefix, .input-suffix)': {
        ...inputSpan,
      },
      '& label.helper': {
        ...styles.helper(theme),
        color: theme(`colors.${defaultColor}.500`),
      },
      '& input': {
        ...styles.inputReset(theme),
        color: theme(`colors.${defaultColor}.700`),
        accentColor: theme(`colors.${accentColor}.400`),
        caretColor: theme(`colors.${accentColor}.800`),
      },
      '& select.select': {
        ...styles.inputReset(theme),
        color: theme(`colors.${defaultColor}.700`),
        accentColor: theme(`colors.${accentColor}.400`),
        caretColor: theme(`colors.${accentColor}.800`),
      },
      '& span > select.input-select': {
        color: theme(`colors.${defaultColor}.700`),
        ...styles.inputReset(theme),
        width: 'fit-content',
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        outline: 'none',
        cursor: 'pointer',
        '&:focus': {
          outline: 'none',
          border: `none`,
        },
        '&:disabled': {
          PointerEvents: 'none',
          outline: 'none',
          border: `none`,
        },
        '&:active': {
          outline: 'none',
          border: `none`,
        },
        '&:hover': {
          outline: 'none',
          border: `none`,
        },
      },

      '& span.input-prefix': {
        ...prefixSuffix,
        ...prefixColor(defaultColor),
      },
      '& span.input-suffix': {
        ...prefixSuffix,
        ...suffixColor(defaultColor),
      },

      ...Object.fromEntries(createVariants(colorVariants)),
    },
  };
};

export default input;
