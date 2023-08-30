import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { getRadius, iconSize } = directives;
const defaultColor = 'gray';
const defaultRadius = '2';

const accordion = (theme: (arg0: string) => string | number) => {
  const colors = (color: string, shade: number) => {
    return { backgroundColor: theme(`colors.${color}.${shade}`) };
  };

  const accColors = (color: string) => {
    return {
      '& header': {
        ...colors(color, 100),
      },
      '& .accordion-body': {
        ...colors(color, 50),
      },
      '&-open': {
        '& header': {
          ...colors(color, 200),
        },
      },
    };
  };

  const header = {
    '& header': {
      cursor: 'pointer',
      fontSize: theme('fontSize.body'),
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme('spacing.2'),
      ...colors(defaultColor, 100),
      '& .icon': {
        ...iconSize(theme, 5),
        marginLeft: 'auto',
        transition: 'all 0.3s ease-in-out',
        transform: 'rotate(-90deg)',
      },
      '& svg': {
        ...iconSize(theme, 5),
        marginLeft: 'auto',
        transition: 'all 0.3s ease-in-out',
        transform: 'rotate(-90deg)',
      },
      '& > *': {
        margin: 0,
        padding: 0,
      },
    },
  };

  const body = {
    '& .accordion-body': {
      ...colors(defaultColor, 50),
      overflow: 'hidden',
      height: 0,
      transition: 'height 0.3s ease-in-out',
      fontSize: theme('fontSize.body-sm'),
    },
  };

  const open = {
    '&-open': {
      '& header': {
        ...colors(defaultColor, 200),
        '& .icon': {
          transform: 'rotate(0deg)',
        },
        '& svg': {
          transform: 'rotate(0deg)',
        },
      },
      '& .accordion-body': {
        height: 'auto',
        padding: theme('spacing.4'),
      },
    },
  };

  const accordion = {
    '.accordion': {
      width: '100%',
      ...getRadius(theme, defaultRadius),
      overflow: 'hidden',
      ...header,
      ...body,
      ...open,
      ...Object.fromEntries(createVariants(accColors)),
    },
  };
  return {
    ...accordion,
  };
};

export default accordion;
