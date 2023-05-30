import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { iconSize } = directives;
const defaultColor = 'gray';

const breadcrumbs = (theme: (arg0: string) => string | number) => {
  const breadcrumbColors = (color: string) => {
    return {
      '& li': {
        color: theme(`colors.${color}.600`),
        '&.active': {
          color: theme(`colors.${color}.800`),
        },
      },
    };
  };
  return {
    'ol.breadcrumb': {
      listStyle: 'none',
      display: 'flex',
      gap: theme('spacing.3'),
      alignItems: 'center',
      justifyContent: 'flex-start',
      ...breadcrumbColors(defaultColor),
      '& li': {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        fontSize: theme('fontSize.body-sm'),
        '&.active': {
          fontWeight: theme('fontWeight.semibold'),
          '.icon': {
            display: 'none',
          },
          '& svg': {
            display: 'none',
          },
          '& a': {
            pointerEvents: 'none',
          },
        },
        ' .icon': {
          ...iconSize(theme, 3),
        },
        ' svg': {
          ...iconSize(theme, 3),
        },
        '&.disabled': {
          pointerEvents: 'none',
          opacity: 0.5,
        },
      },
      ...Object.fromEntries(createVariants(breadcrumbColors)),
    },
  };
};

export default breadcrumbs;
