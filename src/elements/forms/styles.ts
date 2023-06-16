const styles = {
  wrapper: (theme: (arg0: string) => string | number) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    padding: 2,
    gap: theme('spacing.1'),
    transition: 'all 0.2s ease-in-out',
  }),

  label: (theme: (arg0: string) => string | number) => ({
    width: '100%',
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.bold'),
  }),

  inputReset: (theme: (arg0: string) => string | number) => ({
    width: '100%',
    padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.normal'),
    outline: 'none',
    '&:focus': {
      outline: 'none',
      border: `none`,
    },
    '&:focus-visible': {
      outline: 'none',
      border: `none`,
    },
    '&:disabled': {
      PointerEvents: 'none',
      outline: 'none',
      border: `none`,
    },
    '&:active': {
      outline: 'none',
      border: `none`,
    },
    '&:hover': {
      outline: 'none',
      border: `none`,
    },
  }),

  helper: (theme: (arg0: string) => string | number) => ({
    width: '100%',
    marginBottom: theme('spacing.1'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& span': {
      fontSize: theme('fontSize.label-sm'),
      fontWeight: theme('fontWeight.normal'),
    },
  }),

  states: (theme: (arg0: string) => string | number) => ({
    '&:focus, &:active': {
      outlineStyle: 'solid',
      outlineColor: theme('colors.blue.200'),
      outlineWidth: '2px',
      outlineOffset: '0px',
      border: `1px solid ${theme('colors.blue.300')}`,
    },

    '&:disabled': {
      PointerEvents: 'none',
      outline: 'none',
      color: theme('colors.gray.400'),
      backgroundColor: theme('colors.gray.100'),
    },
    '&.error': {
      border: `1px solid ${theme('colors.red.500')}`,
      outlineStyle: 'solid',
      outlineColor: theme('colors.red.300'),
      outlineWidth: '2px',
    },
    '&.success': {
      border: `1px solid ${theme('colors.green.500')}`,
      outlineStyle: 'solid',
      outlineColor: theme('colors.green.300'),
      outlineWidth: '2px',
    },
  }),
};

export default styles;
