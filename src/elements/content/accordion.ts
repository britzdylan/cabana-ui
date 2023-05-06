const accordion = (theme: (arg0: string) => string | number) => {
  const accordion = {
    '.accordion': {
      width: '100%',
      '& header': {
        cursor: 'pointer',
        fontSize: theme('fontSize.title-lg'),
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme('spacing.2'),
        backgroundColor: theme('colors.gray.100'),
        borderRadius: `${theme('borderRadius.md')} ${theme(
          'borderRadius.md'
        )} 0 0`,
        '& .icon, svg': {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
          marginLeft: 'auto',
        },
        '& > *': {
          margin: 0,
          padding: 0,
        },
      },
      '& .accordion-body': {
        padding: theme('spacing.4'),
        backgroundColor: theme('colors.gray.50'),
        borderRadius: ` 0 0 ${theme('borderRadius.md')} ${theme(
          'borderRadius.md'
        )}`,
      },
    },
  };
  return {
    ...accordion,
  };
};

export default accordion;
