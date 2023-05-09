const tag = (theme: (arg0: string) => string | number) => {
  return {
    '.tag': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme('spacing.1'),
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      borderRadius: theme('borderRadius.md'),
      fontSize: theme('fontSize.body-sm'),
      background: theme('colors.gray.200'),
      cursor: 'pointer',
      '& .icon': {
        width: theme('spacing.3'),
        height: theme('spacing.3'),
      },
      '& svg': {
        width: theme('spacing.3'),
        height: theme('spacing.3'),
      },
      '& img': {
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
      '& span': {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        margin: `0 ${theme('spacing.2')}`,
      },
      '&-bordered': {
        border: `1px solid ${theme('colors.gray.200')}`,
        background: 'transparent',
      },
      '&-large': {
        fontSize: theme('fontSize.label'),
        padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
      },
    },
  };
};

export default tag;
