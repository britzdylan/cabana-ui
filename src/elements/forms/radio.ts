import styles from './styles';

const radio = (theme: (arg0: string) => string | number) => {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: theme('spacing.4'),
        width: theme('spacing.4'),
        backgroundColor: 'transparent',
        borderRadius: '50%',
        border: `2px solid ${theme('colors.neutral.400')}`,
        padding: '2px',
        '&:after': {
          content: '""',
          // transform: 'translate(-50%, -50%)',
          width: 0,
          height: 0,
          borderRadius: '50%',
          backgroundColor: '#000',
          opacity: 0,
          transition: 'all 0.2s ease-in-out',
        },
      },
      '&-large': {
        '& .radio-input': {
          height: theme('spacing.5'),
          width: theme('spacing.5'),
        },

        '& .text-label': {
          ...styles.helper(theme),
          fontSize: theme('fontSize.label-xl'),
          marginBottom: 0,
        },
      },
      '&:hover input ~ .radio-input': {
        borderColor: `${theme('colors.neutral.900')}`,
      },
      '& input:checked ~ .radio-input:after': {
        // display: 'block',
        width: '100%',
        height: '100%',
        opacity: 1,
      },
    },
  };
};

export default radio;
