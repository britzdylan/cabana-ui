import styles from './styles';
import createVariants from '../../lib/colorVariants';
const defaultColor = 'gray';
// const accentColor = 'secondary';
const errorColor = 'red';
// const successColor = 'green';

const checkbox = (theme: (arg0: string) => string | number) => {
  const icon = {
    width: theme('spacing.0'),
    height: theme('spacing.0'),
    color: 'inherit',
    opacity: 0,
  };

  const colors = (color: string) => {
    return {
      '& .checkmark': {
        border: `2px solid ${theme(`colors.${color}.300`)}`,
        color: theme(`colors.${color}.500`),
      },
      '&:hover input ~ .checkmark': {
        borderColor: `${theme(`colors.${color}.500`)}`,
      },
    };
  };

  return {
    '.checkbox': {
      width: 'max-content',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: theme('spacing.2'),
      position: 'relative',
      '& .text-label': {
        ...styles.helper(theme),
        marginBottom: 0,
      },
      '& input[type="checkbox"]': {
        position: 'absolute',
        opacity: 0,
        cursor: 'pointer',
        height: 0,
        width: 0,
      },
      '& .checkmark': {
        border: `2px solid ${theme(`colors.${defaultColor}.300`)}`,
        color: theme(`colors.${defaultColor}.500`),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme('spacing.5'),
        width: theme('spacing.5'),
        backgroundColor: 'transparent',
        padding: '0.5px',
        borderRadius: theme('borderRadius.sm'),
        transition: 'all .1s ease-out',
        cursor: 'pointer',

        ' .icon': {
          ...icon,
        },
        ' svg': {
          ...icon,
        },
      },
      '&:hover input ~ .checkmark': {
        borderColor: `${theme(`colors.${defaultColor}.500`)}`,
      },
      '& input:checked ~ .checkmark img, & input:checked ~ .checkmark svg, & input:checked ~ .checkmark .icon':
        {
          width: theme('spacing.5'),
          height: theme('spacing.5'),
          opacity: 1,
        },

      '&.disabled': {
        '& .checkmark': {
          border: `2px solid ${theme(`colors.${defaultColor}.300`)}`,
          backgroundColor: theme(`colors.${defaultColor}.200`),
          color: theme(`colors.${defaultColor}.400`),
          cursor: 'default',
        },
        '& input[type="checkbox"]': {
          cursor: 'default',
          PointerEvent: 'none',
        },
        '&:hover input ~ .checkmark': {
          borderColor: `${theme(`colors.${defaultColor}.300`)}`,
        },
      },
      ...Object.fromEntries(createVariants(colors)),
      '&.error': {
        '& .checkmark': {
          border: `2px solid ${theme(`colors.${errorColor}.300`)}`,
        },
        '&:hover input ~ .checkmark': {
          borderColor: `${theme(`colors.${errorColor}.500`)}`,
        },
      },
    },
  };
};

export default checkbox;
