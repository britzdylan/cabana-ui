import createVariants from '../../lib/colorVariants';
import directives from '../../lib/directives';
const { getRadius, iconSize } = directives;
const defaultColor = 'gray';
const defaultRadius = '1';

const pagination = (theme: (arg0: string) => string | number) => {
  const paginationColors = (color: string) => {
    return {
      color: theme(`colors.gray.600`),
      '& .pagination-list': {
        '& li': {
          '&.active': {
            color: theme(`colors.${color}.800`),
          },
          '&:hover': {
            color: theme(`colors.${color}.800`),
          },
        },
      },
    };
  };

  const paginationContainedColors = (color: string) => {
    return {
      '& .pagination-list': {
        '& li': {
          border: `1px solid ${theme(`colors.gray.200`)}`,
          '&.active': {
            color: '#fff',
            background: theme(`colors.${color}.600`),
            border: `1px solid ${theme(`colors.${color}.600`)}`,
            '&:hover': {
              border: `1px solid ${theme(`colors.${color}.600`)}`,
              background: theme(`colors.${color}.600`),
            },
          },
          '&:hover': {
            border: `1px solid ${theme(`colors.${color}.200`)}`,
            background: theme(`colors.${color}.100`),
          },
        },
      },
    };
  };
  return {
    '.pagination': {
      display: 'flex',
      alignItems: 'center',
      gap: theme('spacing.2'),
      '& .icon': {
        ...iconSize(theme, 5),
        color: 'inherit',
        cursor: 'pointer',
      },
      '& svg': {
        ...iconSize(theme, 5),
        color: 'inherit',
        cursor: 'pointer',
      },
      ...paginationColors(defaultColor),
      ...Object.fromEntries(createVariants(paginationColors)),
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
          ...getRadius(theme, defaultRadius),
          cursor: 'pointer',
          color: 'inherit',
          '& .icon': {
            ...iconSize(theme, 5),
            color: 'inherit',
            cursor: 'pointer',
          },
          '& svg': {
            ...iconSize(theme, 5),
            color: 'inherit',
            cursor: 'pointer',
          },
          '&.active': {
            fontWeight: theme('fontWeight.semibold'),
          },
          '& a': {
            color: 'inherit',
            textDecoration: 'none',
          },
          '&.disabled': {
            cursor: 'default',
            pointerEvents: 'none',
            opacity: 0.5,
            '& a': {
              cursor: 'default',
              pointerEvents: 'none',
            },
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
        ...paginationContainedColors(defaultColor),
        ...Object.fromEntries(createVariants(paginationContainedColors)),
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
