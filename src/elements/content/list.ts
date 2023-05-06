const list = (theme: (arg0: string) => string | number) => {
  const listItem = {
    fontSize: theme('fontSize.label-sm'),
    color: 'inherit',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme('spacing.2'),
    '&.featured': {
      fontWeight: theme('fontWeight.semibold'),
    },
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    '& li': {
      ...listItem,
      '& .icon, svg': {
        width: theme('spacing.4'),
        height: theme('spacing.4'),
      },
    },

    '&-large': {
      '& li': {
        ...listItem,
        fontSize: theme('fontSize.label-xl'),
        '& .icon, svg': {
          width: theme('spacing.6'),
          height: theme('spacing.6'),
        },
      },
    },
  };
  return {
    'ul.list': {
      ...listStyle,
    },
    'ol.list': {
      ...listStyle,
    },
  };
};

export default list;
