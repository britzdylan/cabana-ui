const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const tag = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      backgroundColor: theme(`colors.${color}.100`),
      color: theme(`colors.${color}.600`),
      '&-bordered': {
        border: `1px solid ${theme(`colors.${color}.200`)}`,
      },
    };
  };
  return {
    '.tag': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: theme('spacing.1'),
      padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
      borderRadius: theme('borderRadius.md'),
      fontSize: theme('fontSize.body-sm'),
      backgroundColor: theme(`colors.${defaultColor}.100`),
      color: theme(`colors.${defaultColor}.600`),
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
        border: `1px solid ${theme(`colors.${defaultColor}.200`)}`,
        background: 'transparent',
      },
      '&-large': {
        fontSize: theme('fontSize.label'),
        padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
      },
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default tag;
