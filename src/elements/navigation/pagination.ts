const pagination = (theme: (arg0: string) => string | number) => {
  return {
    '.pagination': {
      display: 'flex',
      alignItems: 'center',
      gap: theme('spacing.2'),
      '& .icon': {
        width: theme('spacing.6'),
        height: theme('spacing.6'),
        color: theme('colors.gray.600'),
      },
      '& svg': {
        width: theme('spacing.6'),
        height: theme('spacing.6'),
        color: theme('colors.gray.600'),
      },
      '& .pagination-list': {
        display: 'flex',
        alignItems: 'center',
        gap: theme('spacing.2'),
        '& li': {
          width: theme('spacing.8'),
          height: theme('spacing.8'),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.1'),
          padding: theme('spacing.2'),
          fontSize: theme('fontSize.label-sm'),
          color: theme('colors.gray.500'),
          borderRadius: theme('borderRadius.sm'),
          cursor: 'pointer',
          '&.active': {
            color: theme('colors.primary.500'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '&:hover': {
            color: theme('colors.primary.500'),
          },
          '& a': {
            color: 'inherit',
            textDecoration: 'none',
          },
        },
      },
      '&-large': {
        '& .pagination-list': {
          '& li': {
            fontSize: theme('fontSize.label'),
            width: theme('spacing.10'),
            height: theme('spacing.10'),
          },
        },
      },
      '&-contained': {
        '& .pagination-list': {
          '& li': {
            border: `2px solid ${theme('colors.gray.200')}`,
            '&.active': {
              color: '#fff',
              background: theme('colors.primary.500'),
              border: `2px solid ${theme('colors.primary.500')}`,
            },
          },
        },
      },
      // '&-dots': {
      //   '& .pagination-list': {
      //     '& li': {
      //       width: theme('spacing.2'),
      //       height: theme('spacing.2'),
      //       background: theme('colors.gray.200'),
      //       display: 'block',
      //       borderRadius: theme('borderRadius.full'),
      //       '&.active': {
      //         background: theme('colors.primary.500'),
      //       },
      //       '& a': {
      //         position: 'absolute',
      //         width: 1,
      //         height: 1,
      //         padding: 0,
      //         margin: -1,
      //         overflow: 'hidden',
      //         clip: 'rect(0, 0, 0, 0)',
      //         whiteSpace: 'nowrap',
      //         borderWidth: 0,
      //       },
      //     },
      //   },
      // },
      // '&-square': {
      //   '& .pagination-list': {
      //     '& li': {
      //       width: theme('spacing.4'),
      //       height: theme('spacing.2'),
      //       background: theme('colors.gray.200'),
      //       display: 'block',
      //       '&.active': {
      //         background: theme('colors.gray.900'),
      //       },
      //       '& a': {
      //         position: 'absolute',
      //         width: 1,
      //         height: 1,
      //         padding: 0,
      //         margin: -1,
      //         overflow: 'hidden',
      //         clip: 'rect(0, 0, 0, 0)',
      //         whiteSpace: 'nowrap',
      //         borderWidth: 0,
      //       },
      //     },
      //   },
      // },
      // '&-dots.pagination-large': {
      //   '& .pagination-list': {
      //     '& li': {
      //       width: theme('spacing.3'),
      //       height: theme('spacing.3'),
      //     },
      //   },
      // },
      // '&-square.pagination-large': {
      //   '& .pagination-list': {
      //     '& li': {
      //       width: theme('spacing.6'),
      //       height: theme('spacing.3'),
      //     },
      //   },
      // },
    },
  };
};

export default pagination;
