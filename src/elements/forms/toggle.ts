const toggle = (theme: (arg0: string) => string | number) => {
  return {
    '.toggle': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.1'),
      padding: `${theme('spacing.1')}`,
      '& input[type="checkbox"]': {
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      },
      '& .toggle-label': {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: theme('spacing.12'),
        borderRadius: '48px',
        background: theme('colors.gray.200'),
        transition: 'all 0.2s ease-in-out',
        padding: theme('spacing[0.5]'),
      },
      '& .toggle-label-narrow': {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: theme('spacing.12'),
        height: theme('spacing.3'),
        borderRadius: '48px',
        background: theme('colors.gray.200'),
        transition: 'all 0.2s ease-in-out',
        padding: 0,
      },
      '& .toggle-label:after': {
        content: '""',
        display: 'block',
        width: theme('spacing.5'),
        height: theme('spacing.5'),
        borderRadius: '100%',
        background: '#fff',
        transition: 'all 0.2s ease-in-out',
      },
      '& .toggle-label-narrow:after': {
        content: '""',
        display: 'block',
        width: theme('spacing.6'),
        height: theme('spacing.6'),
        borderRadius: '100%',
        background: '#fff',
        transition: 'all 0.2s ease-in-out',
        boxShadow: theme('boxShadow.light-200'),
      },

      '& input[type="checkbox"]:checked ~ .toggle-label, input[type="checkbox"]:checked ~ .toggle-label-narrow':
        {
          background: theme('colors.neutral.900'),
        },
      '& input[type="checkbox"]:checked ~ .toggle-label:after': {
        transform: 'translateX(24px)',
      },
      '& input[type="checkbox"]:checked ~ .toggle-label-narrow:after': {
        transform: 'translateX(24px)',
      },
    },
  };
};

export default toggle;
