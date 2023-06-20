const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const tooltip = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      '&::before': {
        backgroundColor: theme(`colors.${color}.800`),
      },
      "&[data-position='top']::after": {
        borderTopColor: theme(`colors.${color}.800`),
      },
      "&[data-position='bottom']::after": {
        borderBottomColor: theme(`colors.${color}.800`),
      },
      "&[data-position='left']::after": {
        borderLeftColor: theme(`colors.${color}.800`),
      },
      "&[data-position='right']::after": {
        borderRightColor: theme(`colors.${color}.800`),
      },
    };
  };

  return {
    '.tooltip': {
      position: 'relative',
      display: 'inline-block',
      '&::before': {
        content: 'attr(data-tooltip)',
        position: 'absolute',
        zIndex: 1,
        visibility: 'hidden',
        opacity: 0,
        width: 'max-content',
        maxWidth: '200px',
        padding: `${theme('spacing.2')} ${theme('spacing.2')}`,
        backgroundColor: theme(`colors.${defaultColor}.800`),
        color: '#fff',
        textAlign: 'center',
        borderRadius: theme('borderRadius.sm'),
        transition: 'opacity 0.3s ease',
        fontSize: theme('fontSize.body-xs'),
        lineHeight: '1rem',
      },
      '&:hover::before, &:focus::before': {
        visibility: 'visible',
        opacity: 1,
      },
      '&:hover::after, &:focus::after': {
        visibility: 'visible',
        opacity: 1,
      },
      "&[data-position='top']::before": {
        bottom: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
      },

      "&[data-position='bottom']::before": {
        top: 'calc(100% + 10px)',
        left: '50%',
        transform: 'translateX(-50%)',
      },

      "&[data-position='left']::before": {
        top: '50%',
        right: 'calc(100% + 10px)',
        transform: 'translateY(-50%)',
      },

      "&[data-position='right']::before": {
        top: '50%',
        left: 'calc(100% + 10px)',
        transform: 'translateY(-50%)',
      },
      "&[data-open='true']::before": {
        visibility: 'visible',
        opacity: 1,
      },
      "&[data-open='true']::after": {
        visibility: 'visible',
        opacity: 1,
      },
      '&::after': {
        content: "''",
        position: 'absolute',
        zIndex: 1,
        visibility: 'hidden',
        opacity: 0,
        width: '0',
        height: '0',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: 'transparent',
        transition: 'opacity 0.3s ease',
      },
      "&[data-position='top']::after": {
        bottom: 'calc(100% + 0px)',
        left: '50%',
        transform: 'translateX(-50%)',
        borderTopColor: '#000',
      },
      "&[data-position='bottom']::after": {
        top: 'calc(100% + 0px)',
        left: '50%',
        transform: 'translateX(-50%)',
        borderBottomColor: '#000',
      },
      "&[data-position='left']::after": {
        top: '50%',
        right: 'calc(100% + 0px)',
        transform: 'translateY(-50%)',
        borderLeftColor: '#000',
      },
      "&[data-position='right']::after": {
        top: '50%',
        left: 'calc(100% + 0px)',
        transform: 'translateY(-50%)',
        borderRightColor: '#000',
      },
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

// const d = document.createElement('div');

export default tooltip;
