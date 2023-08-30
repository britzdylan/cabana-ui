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
    transition: 'all .1s ease-out',
  }),

  label: (theme: (arg0: string) => string | number) => ({
    width: '100%',
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.medium'),
  }),

  inputReset: (theme: (arg0: string) => string | number) => ({
    width: '100%',
    padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.normal'),
    outline: 'none',
    transition: 'all .1s ease-out',
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
    width: 'max-content',
    marginBottom: theme('spacing.1'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& span': {
      fontSize: theme('fontSize.label-sm'),
      fontWeight: theme('fontWeight.normal'),
    },
  }),

  states: (
    theme: (arg0: string) => string | number,
    defaultColor: string,
    accentColor: string,
    errorColor: string,
    successColor: string
  ) => ({
    '&:focus, &:active, &:focus-within': {
      outlineStyle: 'solid',
      outlineColor: theme(`colors.${accentColor}.200`),
      outlineWidth: '2px',
      outlineOffset: '0px',
      border: `1px solid ${theme(`colors.${accentColor}.300`)}`,
    },

    '&:disabled': {
      PointerEvents: 'none',
      outline: 'none',
      border: `none`,
      color: theme(`colors.${defaultColor}.400`),
      backgroundColor: theme(`colors.${defaultColor}.100`),
    },
    '&.error': {
      border: `1px solid ${theme(`colors.${errorColor}.500`)}`,
      outlineStyle: 'solid',
      outlineColor: theme(`colors.${errorColor}.300`),
      outlineWidth: '2px',
    },
    '&.success': {
      border: `1px solid ${theme(`colors.${successColor}.500`)}`,
      outlineStyle: 'solid',
      outlineColor: theme(`colors.${successColor}.300`),
      outlineWidth: '2px',
    },
  }),
};

export default styles;
