const breadcrumbs = (theme: (arg0: string) => string | number) => {
  return {
    'ol.breadcrumb': {
      listStyle: 'none',
      display: 'flex',
      gap: theme('spacing.3'),
      alignItems: 'center',
      justifyContent: 'flex-start',
      '& li': {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        fontSize: theme('fontSize.body-sm'),
        color: theme('colors.gray.600'),
        '&.active': {
          color: theme('colors.gray.800'),
          fontWeight: theme('fontWeight.semibold'),
          '.icon, svg': {
            display: 'none',
          },
          '& a': {
            pointerEvents: 'none',
          },
        },
        '.icon, svg': {
          width: theme('spacing.3'),
          height: theme('spacing.3'),
        },
      },
    },
  };
};

export default breadcrumbs;
