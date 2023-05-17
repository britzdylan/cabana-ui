const base = (theme: (arg0: string) => string | number) => {
  const iconSize = (size: number) => {
    return {
      height: theme(`spacing.${size}`),
    };
  };

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: 'inherit',
    transition: 'all .2s ease-in-out',
    gap: theme('spacing.2'),
    padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
    fontSize: theme('fontSize.label'),
    fontWeight: theme('fontWeight.medium'),
    letterSpacing: '0.002em',
    lineHeight: theme('spacing.6'),
    borderRadius: `${theme('spacing[1.5]')}`,
    cursor: 'pointer',
    // Default states
    '&:hover': {
      backgroundColor: theme('colors.primary.600'),
    },
    '&:focus': {
      outline: 'solid',
      outlineWidth: theme('spacing.1'),
      outlineColor: theme('colors.primary.300'),
    },
    '&:focus-visible': {
      outline: 'solid',
      outlineWidth: theme('spacing.1'),
      outlineColor: theme('colors.primary.300'),
    },
    '&:disabled': {
      color: 'rgba(255, 255, 255, 0.4)',
      backgroundColor: theme('colors.primary.100'),
    },
    '&:active': {
      outline: 'solid',
      outlineWidth: theme('spacing.1'),
      outlineColor: theme('colors.primary.700'),
      backgroundColor: theme('colors.primary.600'),
    },
    //   icons
    '& .icon': {
      ...iconSize(5),
    },

    '& svg': {
      ...iconSize(5),
    },
  };
};

function button(theme: (arg0: string) => string | number) {
  const iconSize = (size: number) => {
    return {
      height: theme(`spacing.${size}`),
    };
  };
  return {
    '.btn': {
      ...base(theme),

      // btn variants
      '&-outline': {
        padding: '0.4rem ' + `${theme('spacing.4')}`,
        backgroundColor: 'transparent',
        border: `solid ${theme('spacing[0.5]')} ${theme('colors.primary.500')}`,
        color: theme('colors.primary.500'),
        '&:hover': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme('colors.primary.100'),
          border: `solid ${theme('spacing[0.5]')} ${theme(
            'colors.primary.100'
          )}`,
        },
        '&:active': {
          backgroundColor: theme('colors.primary.50'),
        },
      },

      '&-min': {
        backgroundColor: 'transparent',
        color: theme('colors.primary.500'),
        '&:hover': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:active': {
          backgroundColor: theme('colors.primary.50'),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme('colors.primary.200'),
          border: 'none',
        },
      },

      '&-text': {
        backgroundColor: 'transparent',
        color: theme('colors.primary.500'),
        border: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme('colors.primary.600'),
        },
        '&:active': {
          backgroundColor: 'transparent',
          outlineWidth: '0px',
          color: theme('colors.primary.700'),
        },
        '&:focus': {
          outlineWidth: '0px',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme('colors.primary.100'),
          border: 'none',
        },
      },

      // btn sizes
      '&-sm': {
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        fontSize: theme('fontSize.label-sm'),
        letterSpacing: '0.005em',
        lineHeight: theme('spacing.5'),
        borderRadius: `${theme('spacing.1')}`,
        '& .icon': {
          ...iconSize(3),
        },

        '& svg': {
          ...iconSize(3),
        },
      },

      '&-md': {
        padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
        fontSize: theme('fontSize.label-sm'),
        letterSpacing: '0.005em',
        lineHeight: theme('spacing.5'),
        borderRadius: `${theme('spacing.1')}`,
        '& .icon': {
          ...iconSize(4),
        },

        '& svg': {
          ...iconSize(4),
        },
      },

      '&-lg': {
        padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
        fontSize: theme('fontSize.label-xl'),
        lineHeight: theme('spacing.7'),
        '& .icon': {
          ...iconSize(7),
        },

        '& svg': {
          ...iconSize(7),
        },
      },
    },
    '.fab': {
      ...base(theme),

      '&-sm': {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
        borderRadius: theme('spacing.1'),
        padding: 0,
        '& .icon': {
          ...iconSize(4),
        },

        '& svg': {
          ...iconSize(4),
        },
      },

      '&-md': {
        width: theme('spacing.10'),
        height: theme('spacing.10'),
        borderRadius: theme('spacing.1'),
        padding: 0,
        '& .icon': {
          ...iconSize(6),
        },

        '& svg': {
          ...iconSize(6),
        },
      },

      '&-lg': {
        width: theme('spacing.12'),
        height: theme('spacing.12'),
        borderRadius: theme('spacing.2'),
        padding: 0,
        '& .icon': {
          ...iconSize(7),
        },

        '& svg': {
          ...iconSize(7),
        },
      },

      '&-xl': {
        width: theme('spacing.14'),
        height: theme('spacing.14'),
        borderRadius: theme('spacing.2'),
        padding: 0,
        '& .icon': {
          ...iconSize(8),
        },

        '& svg': {
          ...iconSize(8),
        },
      },

      '&-rounded': {
        borderRadius: '100%',
      },
    },
    '.btn-group': {
      display: 'flex',
      flexDirection: 'row',
      gap: 0,
      overflow: 'hidden',
      borderRadius: theme('spacing.2'),
      width: 'fit-content',
      height: 'fit-content',
      '& > button': {
        ...base(theme),
        borderRadius: '0px',
        '&:focus': {
          outlineWidth: '0px',
          outlineColor: 'transparent',
        },
        '&:active': {
          outlineWidth: '0px',
          outlineColor: 'transparent',
        },
      },
      '&-small': {
        '& > button': {
          ...base(theme),
          borderRadius: '0px',
          '&:focus': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
          },
          '&:active': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
          },
        },
      },
      '&-large': {
        '& > button': {
          ...base(theme),
          borderRadius: '0px',
          '&:focus': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
          },
          '&:active': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
          },
        },
      },

      '&-outline': {
        border: `solid ${theme('spacing[0.5]')} ${theme('colors.primary.500')}`,
        '& > button': {
          ...base(theme),
          borderLeftWidth: '0px',
          borderRightWidth: theme('spacing[0.5]'),
          borderTopWidth: '0px',
          borderBottomWidth: '0px',
          borderRadius: '0px',
          backgroundColor: 'transparent',
          color: theme('colors.primary.500'),
          '&:last-child': {
            borderRightWidth: '0px',
          },
          '&:hover': {
            backgroundColor: theme('colors.primary.50'),
          },
          '&:focus': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
            backgroundColor: theme('colors.primary.50'),
          },
          '&:active': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
            backgroundColor: theme('colors.primary.50'),
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            color: theme('colors.primary.100'),
            BorderColor: theme('colors.primary.100'),
          },
        },
      },
    },
  };
}

export { button };
