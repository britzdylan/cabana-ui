const tooltip = (theme: (arg0: string) => string | number) => {
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
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        backgroundColor: '#000',
        color: '#fff',
        textAlign: 'center',
        borderRadius: theme('borderRadius.sm'),
        transition: 'opacity 0.3s ease',
        fontSize: theme('fontSize.body-xs'),
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
        bottom: '113%',
        left: '50%',
        transform: 'translateX(-50%)',
      },

      "&[data-position='bottom']::before": {
        top: '113%',
        left: '50%',
        transform: 'translateX(-50%)',
      },

      "&[data-position='left']::before": {
        top: '50%',
        right: '110%',
        transform: 'translateY(-50%)',
      },

      "&[data-position='right']::before": {
        top: '50%',
        left: '110%',
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
      },
      "&[data-position='top']::after": {
        bottom: '90%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderTopColor: '#000',
      },
      "&[data-position='bottom']::after": {
        top: '90%',
        left: '50%',
        transform: 'translateX(-50%)',
        borderBottomColor: '#000',
      },
      "&[data-position='left']::after": {
        top: '50%',
        right: '95%',
        transform: 'translateY(-50%)',
        borderLeftColor: '#000',
      },
      "&[data-position='right']::after": {
        top: '50%',
        left: '97%',
        transform: 'translateY(-50%)',
        borderRightColor: '#000',
      },
    },
  };
};

// const d = document.createElement('div');

export default tooltip;
