const avatar = (theme: (arg0: string) => string | number) => {
  return {
    '.avatar': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme('spacing.12'),
      height: theme('spacing.12'),
      overflow: 'hidden',
      borderRadius: theme('borderRadius.md'),
      '&-rounded': {
        borderRadius: '9999px',
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
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
      '& svg': {
        width: theme('spacing.5'),
        height: theme('spacing.5'),
      },
      '& .icon': {
        width: theme('spacing.5'),
        height: theme('spacing.5'),
      },
    },
  };
};

export default avatar;
