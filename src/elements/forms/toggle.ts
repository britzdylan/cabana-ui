const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const toggle = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      '& input[type="checkbox"]:checked ~ .toggle-label, input[type="checkbox"]:checked ~ .toggle-label-narrow':
        {
          background: `${theme(`colors.${color}.900`)}`,
        },
    };
  };
  return {
    '.toggle': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme('spacing.1'),
      padding: `${theme('spacing.1')}`,
      '& input[type="checkbox"]': {
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: 0,
      },
      '& .toggle-label': {
        background: `${theme(`colors.${defaultColor}.200`)}`,
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: theme('spacing.10'),
        borderRadius: '48px',
        transition: 'all 0.2s ease-in-out',
        padding: theme('spacing[0.5]'),
      },
      '& .toggle-label-narrow': {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: theme('spacing.10'),
        height: theme('spacing.2'),
        borderRadius: '48px',
        background: `${theme(`colors.${defaultColor}.200`)}`,
        transition: 'all 0.2s ease-in-out',
        padding: 0,
      },
      '& .toggle-label:after': {
        content: '""',
        display: 'block',
        width: theme('spacing.5'),
        height: theme('spacing.5'),
        borderRadius: '100%',
        background: '#fff',
        transition: 'all 0.2s ease-in-out',
      },
      '& .toggle-label-narrow:after': {
        content: '""',
        display: 'block',
        width: theme('spacing.5'),
        height: theme('spacing.5'),
        borderRadius: '100%',
        background: '#fff',
        transition: 'all 0.2s ease-in-out',
        boxShadow: theme('boxShadow.light-200'),
      },

      '& input[type="checkbox"]:checked ~ .toggle-label, input[type="checkbox"]:checked ~ .toggle-label-narrow':
        {
          background: `${theme(`colors.${defaultColor}.900`)}`,
        },
      '& input[type="checkbox"]:checked ~ .toggle-label:after': {
        transform: 'translateX(16px)',
      },
      '& input[type="checkbox"]:checked ~ .toggle-label-narrow:after': {
        transform: 'translateX(20px)',
      },
      '&.disabled': {
        opacity: 0.5,
        pointerEvent: 'none',
      },
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default toggle;
