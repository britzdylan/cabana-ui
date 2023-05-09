const chip = (theme: (arg0: string) => string | number) => {
  return {
    '.chip': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.1'),
      padding: theme('spacing.1'),
      borderRadius: theme('borderRadius.md'),
      fontSize: theme('fontSize.label-sm'),
      background: theme('colors.gray.200'),
      cursor: 'pointer',
      '& .icon': {
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
      '& svg': {
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
      '& img': {
        width: theme('spacing.5'),
        height: theme('spacing.5'),
        borderRadius: '9999px',
        objectFit: 'cover',
      },
      '& span': {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        margin: `0 ${theme('spacing.1')}`,
      },

      '&-rounded': {
        borderRadius: '9999px',
      },

      '&-bordered': {
        border: `1px solid ${theme('colors.gray.200')}`,
        background: 'transparent',
      },
    },
  };
};

export default chip;
