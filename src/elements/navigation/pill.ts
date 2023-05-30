import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { getRadius, iconSize } = directives;
const defaultColor = 'gray';
const defaultRadius = 9999;

const pill = (theme: (arg0: string) => string | number) => {
  const pillColors = (color: string) => {
    return {
      color: theme(`colors.${color}.600`),
      background: theme(`colors.${color}.100`),
    };
  };

  const pillActiveColors = (color: string) => {
    return {
      color: theme(`colors.${color}.50`),
      background: theme(`colors.${color}.800`),
    };
  };

  return {
    '.pill': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.1'),
      padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
      ...getRadius(theme, defaultRadius),
      fontSize: theme('fontSize.body-xs'),
      fontWeight: theme('fontWeight.semibold'),
      ...pillColors(defaultColor),
      '&-active': {
        ...pillActiveColors(defaultColor),
        ...Object.fromEntries(createVariants(pillActiveColors)),
      },
      '& .icon': {
        ...iconSize(theme, 3),
      },

      '& svg': {
        ...iconSize(theme, 3),
      },
      ...Object.fromEntries(createVariants(pillColors)),
    },
  };
};

export default pill;
