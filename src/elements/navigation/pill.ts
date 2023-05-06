const pill = (theme: (arg0: string) => string | number) => {
  return {
    '.pill': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.1'),
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      borderRadius: '9999px',
      fontSize: theme('fontSize.body-xs'),
      fontWeight: theme('fontWeight.semibold'),
      color: theme('colors.gray.500'),
      background: theme('colors.gray.100'),
      '&-active': {
        background: '#000',
        color: '#fff',
      },
    },
  };
};

export default pill;
