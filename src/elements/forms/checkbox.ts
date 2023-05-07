import styles from './styles';

const checkbox = (theme: (arg0: string) => string | number) => {
  return {
    '.checkbox': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: theme('spacing.2'),
      position: 'relative',
      '& .text-label': {
        ...styles.helper(theme),
        marginBottom: 0,
      },
      '& input[type="checkbox"]': {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0,
      },
      '& .checkmark': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme('spacing.5'),
        width: theme('spacing.5'),
        backgroundColor: 'transparent',
        border: `2px solid ${theme('colors.neutral.300')}`,
        padding: '1px',
        borderRadius: theme('borderRadius.sm'),
        transition: 'all 0.2s ease-in-out',
        ' .icon, svg, img': {
          width: theme('spacing.0'),
          height: theme('spacing.0'),
          color: theme('colors.neutral.900'),
          opacity: 0,
        },
      },
      '&:hover input ~ .checkmark': {
        borderColor: `${theme('colors.neutral.900')}`,
      },
      '& input:checked ~ .checkmark img, & input:checked ~ .checkmark svg, & input:checked ~ .checkmark .icon':
        {
          width: '100%',
          height: '100%',
          opacity: 1,
        },

      '&-large': {
        '& .text-label': {
          ...styles.helper(theme),
          marginBottom: 0,
          fontSize: theme('fontSize.label-xl'),
        },
        '& .checkmark': {
          height: theme('spacing.6'),
          width: theme('spacing.6'),
        },
      },
    },
  };
};

export default checkbox;
