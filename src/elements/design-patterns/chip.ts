const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const chip = (theme: (arg0: string) => string | number) => {
  const color = (color: string) => {
    return {
      backgroundColor: theme(`colors.${color}.100`),
      color: theme(`colors.${color}.600`),
      '&-bordered': {
        border: `1px solid ${theme(`colors.${color}.200`)}`,
      },
    };
  };
  return {
    '.chip': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.1'),
      padding: theme('spacing.1'),
      borderRadius: theme('borderRadius.md'),
      fontSize: theme('fontSize.label-sm'),
      lineHeight: theme('lineHeight.4'),
      background: theme(`colors.${defaultColor}.100`),
      cursor: 'pointer',
      color: theme(`colors.${defaultColor}.600`),
      '& .icon': {
        color: 'inherit',
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
      '& svg': {
        color: 'inherit',
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
        border: `1px solid ${theme(`colors.${defaultColor}.200`)}`,
        background: 'transparent',
      },
      ...Object.fromEntries(createVariants(color)),
    },
  };
};

export default chip;
