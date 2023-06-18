import styles from './styles';
const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const radio = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      '& .radio-input': {
        border: `2px solid ${theme(`colors.${color}.400`)}`,
        '&:after': {
          backgroundColor: `${theme(`colors.${color}.900`)}`,
        },
        '&:hover input ~ .radio-input': {
          borderColor: `${theme(`colors.${color}.900`)}`,
        },
      },
    };
  };

  return {
    '.radio': {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: theme('spacing.2'),
      '& .text-label': {
        ...styles.helper(theme),
        marginBottom: 0,
      },
      '& input[type="radio"]': {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0,
      },
      '& .radio-input': {
        border: `2px solid ${theme(`colors.${defaultColor}.400`)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '16px',
        width: '22px',
        backgroundColor: 'transparent',
        borderRadius: '100%',
        padding: '2px',
        '&:after': {
          backgroundColor: `${theme(`colors.${defaultColor}.900`)}`,
          content: '""',
          // transform: 'translate(-50%, -50%)',
          width: 0,
          height: 0,
          borderRadius: '100%',
          opacity: 0,
          transition: 'all 0.2s ease-in-out',
        },
      },
      '&:hover input ~ .radio-input': {
        borderColor: `${theme(`colors.${defaultColor}.900`)}`,
      },
      '&-large': {
        '& .radio-input': {
          height: '22px',
          width: '30px',
        },

        '& .text-label': {
          ...styles.helper(theme),
          fontSize: theme('fontSize.label-xl'),
          marginBottom: 0,
        },
      },
      '&.disabled': {
        opacity: 0.5,
        cursor: 'default',
        PointerEvent: 'none',
        '&:hover input ~ .radio-input': {
          border: `2px solid ${theme(`colors.${defaultColor}.400`)}`,
        },
      },
      '& input:checked ~ .radio-input:after': {
        // display: 'block',
        width: '100%',
        height: '100%',
        opacity: 1,
      },
      ...Object.fromEntries(createVariants(colors)),
    },
  };
};

export default radio;
