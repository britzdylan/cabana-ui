import styles from './styles';
const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';

const radio = (theme: (arg0: string) => string | number) => {
  const colors = (color: string) => {
    return {
      '& .radio-input': {
        border: `2px solid ${theme(`colors.${color}.500`)}`,
        '&:after': {
          backgroundColor: `${theme(`colors.${color}.500`)}`,
        },
        '&:hover input ~ .radio-input': {
          borderColor: `${theme(`colors.${color}.500`)}`,
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
        border: `2px solid ${theme(`colors.${defaultColor}.500`)}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: `${theme('spacing.5')}`,
        width: `${theme('spacing.5')}`,
        backgroundColor: 'transparent',
        borderRadius: '100%',
        padding: '2px',
        '&:after': {
          backgroundColor: `${theme(`colors.${defaultColor}.500`)}`,
          content: '""',
          // transform: 'translate(-50%, -50%)',
          width: 0,
          height: 0,
          borderRadius: '100%',
          opacity: 0,
          transition: 'all .1s ease-out',
        },
      },
      '&:hover input ~ .radio-input': {
        borderColor: `${theme(`colors.${defaultColor}.500`)}`,
      },
      '&.disabled': {
        opacity: 0.5,
        cursor: 'default',
        PointerEvent: 'none',
        '&:hover input ~ .radio-input': {
          border: `2px solid ${theme(`colors.${defaultColor}.500`)}`,
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
