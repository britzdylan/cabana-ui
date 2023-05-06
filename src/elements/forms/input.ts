const input = (theme: (arg0: string) => string | number) => {
  return {
    '.input': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      overflow: 'hidden',
      padding: 4,
      '& label.label': {
        width: '100%',
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.bold'),
        marginBottom: theme('spacing.1'),
      },
      '& > span:not(.input-prefix, .input-suffix)': {
        backgroundColor: '#fff',
        overflow: 'hidden',
        padding: 0,
        width: '100%',
        height: '100%',
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.bold'),
        marginBottom: theme('spacing.1'),
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        justifyContent: 'space-between',
        borderRadius: theme('borderRadius.md'),
        border: `1px solid ${theme('colors.gray.300')}`,
        '&:focus-within': {
          outlineStyle: 'solid',
          outlineColor: theme('colors.blue.200'),
          outlineWidth: '2px',
          outlineOffset: '0px',
          border: `1px solid ${theme('colors.blue.300')}`,
        },
        '& .icon, svg ': {
          fontSize: theme('spacing.5'),
          height: theme('spacing.5'),
        },
        '& .icon:first-child': {
          marginLeft: theme('spacing.2'),
        },
        '& .icon:last-child': {
          marginRight: theme('spacing.2'),
        },
        '& svg:first-child': {
          marginLeft: theme('spacing.2'),
        },
        '& svg:last-child': {
          marginRight: theme('spacing.2'),
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
      },
      '& label.helper': {
        width: '100%',
        marginBottom: theme('spacing.1'),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& span': {
          fontSize: theme('fontSize.label-sm'),
          fontWeight: theme('fontWeight.normal'),
        },
      },
      '& input': {
        width: '100%',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        '&:focus': {
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
      },
      '& > select.input-select': {
        width: '100%',
        height: theme('spacing.6'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        '&:focus': {
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
      },
      '& span.input-prefix': {
        color: theme('colors.gray.500'),
        backgroundColor: theme('colors.gray.50'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        justifyContent: 'center',
        height: '100%',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        borderRight: `1px solid ${theme('colors.gray.300')}`,
      },
      '& span.input-suffix': {
        color: theme('colors.gray.500'),
        backgroundColor: theme('colors.gray.50'),
        fontSize: theme('fontSize.label-sm'),
        fontWeight: theme('fontWeight.normal'),
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        justifyContent: 'center',
        height: '100%',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        borderLeft: `1px solid ${theme('colors.gray.300')}`,
      },
    },
  };
};

export default input;
