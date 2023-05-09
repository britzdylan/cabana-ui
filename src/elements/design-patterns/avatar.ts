const avatar = (theme: (arg0: string) => string | number) => {
  const status = {
    position: 'absolute',
    top: -5,
    right: 5,
    width: theme('spacing.3'),
    height: theme('spacing.3'),
    borderRadius: '9999px',
    border: `1px solid ${theme('colors.gray.50')}`,
  };
  return {
    '.avatar': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme('spacing.12'),
      height: theme('spacing.12'),
      borderRadius: theme('borderRadius.md'),
      position: 'relative',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: theme('borderRadius.md'),
      },
      '&-rounded': {
        borderRadius: '9999px',
        '& img': {
          borderRadius: '9999px',
        },
      },
      '&-placeholder': {
        backgroundColor: theme('colors.primary.500'),
        color: theme('colors.gray.50'),
        fontWeight: theme('fontWeight.semibold'),
        fontSize: theme('fontSize.label'),
      },
      '&-bordered': {
        border: '2px solid #fff',
        boxShadow: theme('boxShadow.light-200'),
      },

      '& svg': {
        width: theme('spacing.5'),
        height: theme('spacing.5'),
      },
      '& .icon': {
        width: theme('spacing.5'),
        height: theme('spacing.5'),
      },
      '& .status': {
        ...status,
      },
      '& .status-green': {
        ...status,
        backgroundColor: theme('colors.green.500'),
      },

      '& .status-yellow': {
        ...status,
        backgroundColor: theme('colors.yellow.500'),
      },

      '& .status-red': {
        ...status,
        backgroundColor: theme('colors.red.500'),
      },
    },
  };
};

export default avatar;
