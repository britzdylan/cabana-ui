const tabs = (theme: (arg0: string) => string | number) => {
  return {
    '.tabs': {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme('colors.gray.50'),
      '& button': {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.1'),
        flexDirection: 'column',
        height: theme('spacing.16'),
        width: theme('spacing.28'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.medium'),
        color: theme('colors.gray.600'),
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        padding: theme('spacing.2'),
        borderBottom: `2px solid transparent`,
        '& .icon': {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
        '& svg': {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
        '&:hover': {
          borderBottom: `2px solid ${theme('colors.primary.300')}`,
        },
        '&.active': {
          borderBottom: `2px solid ${theme('colors.primary.500')}`,
        },
      },
    },
  };
};

export default tabs;
