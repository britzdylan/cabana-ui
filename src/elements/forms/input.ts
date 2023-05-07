import styles from './styles';

const input = (theme: (arg0: string) => string | number) => {
  const inputSpan = {
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
    border: `1px solid ${theme('colors.gray.300')}`,
    transition: 'all 0.2s ease-in-out',
    '&:focus-within': {
      outlineStyle: 'solid',
      outlineColor: theme('colors.blue.200'),
      outlineWidth: '2px',
      outlineOffset: '0px',
      border: `1px solid ${theme('colors.blue.300')}`,
    },
    '&:disabled': {
      PointerEvents: 'none',
      outline: 'none',
      border: `none`,
      color: theme('colors.gray.400'),
      backgroundColor: theme('colors.gray.100'),
    },
    '& .icon, svg ': {
      fontSize: theme('spacing.5'),
      height: theme('spacing.5'),
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
    '&.error': {
      border: `1px solid ${theme('colors.red.500')}`,
      outlineStyle: 'solid',
      outlineColor: theme('colors.red.300'),
      outlineWidth: '2px',
    },
    '&.success': {
      border: `1px solid ${theme('colors.green.500')}`,
      outlineStyle: 'solid',
      outlineColor: theme('colors.green.300'),
      outlineWidth: '2px',
    },
  };
  const prefixSuffix = {
    color: theme('colors.gray.500'),
    backgroundColor: theme('colors.gray.50'),
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.normal'),
    display: 'flex',
    alignItems: 'center',
    gap: theme('spacing.2'),
    justifyContent: 'center',
    height: '100%',
    padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
  };

  return {
    '.input': {
      ...styles.wrapper(theme),
      '& label.label': {
        ...styles.label(theme),
      },
      '& > span:not(.input-prefix, .input-suffix)': {
        ...inputSpan,
      },
      '& label.helper': {
        ...styles.helper(theme),
      },
      '& input': {
        ...styles.inputReset(theme),
      },

      '&-large': {
        '& label.label': {
          fontSize: theme('fontSize.label'),
        },
        '& > span:not(.input-prefix, .input-suffix)': {
          fontSize: theme('fontSize.label'),
        },
        '& input': {
          fontSize: theme('fontSize.label'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        },
        '& span.input-prefix': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRight: `1px solid ${theme('colors.gray.300')}`,
        },
        '& span.input-suffix': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderLeft: `1px solid ${theme('colors.gray.300')}`,
        },
      },
      '& > select.input-select, &:select': {
        width: '100%',
        height: theme('spacing.6'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
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
      '& select.select': {
        ...styles.inputReset(theme),
        cursor: 'pointer',
      },
      '& span.input-prefix': {
        ...prefixSuffix,
        borderRight: `1px solid ${theme('colors.gray.300')}`,
      },
      '& span.input-suffix': {
        ...prefixSuffix,
        borderLeft: `1px solid ${theme('colors.gray.300')}`,
      },
    },
  };
};

export default input;
