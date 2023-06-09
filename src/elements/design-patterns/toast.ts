const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const toast = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      background: theme(`colors.${color}.500`),
    };
  };
  const showTopRight = () => {
    return {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      right: theme('spacing.4'),
      top: theme('spacing.20'),
      maxWidth: theme('spacing.96'),
    };
  };

  const showTopLeft = () => {
    return {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      left: theme('spacing.4'),
      top: theme('spacing.20'),
      maxWidth: theme('spacing.96'),
    };
  };

  const showBottomRight = () => {
    return {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      right: theme('spacing.4'),
      bottom: theme('spacing.20'),
      maxWidth: theme('spacing.96'),
    };
  };

  const showBottomLeft = () => {
    return {
      opacity: 0,
      visibility: 'hidden',
      position: 'fixed',
      left: theme('spacing.4'),
      bottom: theme('spacing.20'),
      maxWidth: theme('spacing.96'),
    };
  };

  return {
    '.toast': {
      display: 'flex',
      alignItems: 'center',
      gap: theme('spacing.1'),
      padding: `${theme('spacing.2')} ${theme('spacing.6')}`,
      borderRadius: theme('borderRadius.md'),
      fontSize: theme('fontSize.label'),
      color: '#fff',
      background: theme(`colors.${defaultColor}.500`),
      cursor: 'pointer',
      animation: 'toast 0.5s ease-in-out forwards',
      width: '100%',
      minHeight: theme('spacing.10'),
      zIndex: 10,
      '& span': {
        marginRight: 'auto',
      },
      '& .icon': {
        width: theme('spacing.6'),
        height: theme('spacing.6'),
      },
      '& svg': {
        width: theme('spacing.6'),
        height: theme('spacing.6'),
      },
      '& img': {
        width: theme('spacing.6'),
        height: theme('spacing.6'),
      },
      '&-tr': {
        ...showTopRight(),
      },
      '&-tl': {
        ...showTopLeft(),
      },
      '&-br': {
        ...showBottomRight(),
      },
      '&-bl': {
        ...showBottomLeft(),
      },
      "&[data-show='true']": {
        opacity: 1,
        visibility: 'visible',
      },
      "&[data-show='false']": {
        opacity: 0,
        visibility: 'hidden',
        pointerEvent: 'none',
      },
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default toast;
