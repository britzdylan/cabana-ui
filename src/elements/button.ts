import createVariants from '../lib/colorVariants';
const defaultColor = 'primary';
const defaultRadius = '1';
const getRadius = (
  theme: (arg0: string) => string | number,
  radius: string | number
) => {
  if (typeof radius === 'number') {
    return {
      borderRadius: `${radius}px`,
    };
  }

  return {
    borderRadius: `${theme(`spacing[${radius}]`)}`,
  };
};

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
    backgroundColor: theme(`colors.${defaultColor}.500`),
    transition: 'all .2s ease-in-out',
    gap: theme('spacing.2'),
    padding: `${theme('spacing[2.5]')} ${theme('spacing.5')}`,
    fontSize: theme('fontSize.label'),
    fontWeight: theme('fontWeight.medium'),
    letterSpacing: '0.002em',
    lineHeight: theme('spacing.6'),
    ...getRadius(theme, defaultRadius),
    cursor: 'pointer',
    // Default states
    '&:focus': {
      outline: 'solid',
      outlineWidth: theme('spacing.1'),
      outlineColor: theme(`colors.${defaultColor}.300`),
    },
    '&:focus-visible': {
      outline: 'solid',
      outlineWidth: theme('spacing.1'),
      outlineColor: theme(`colors.${defaultColor}.300`),
    },
    '&:disabled': {
      color: 'rgba(255, 255, 255, 0.4)',
      backgroundColor: theme(`colors.${defaultColor}.100`),
      pointerEvents: 'none',
    },
    '&:active': {
      outline: 'solid',
      outlineWidth: theme('spacing.1'),
      outlineColor: theme(`colors.${defaultColor}.700`),
      backgroundColor: theme(`colors.${defaultColor}.600`),
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

  const adjustPaddingWithIcon = (size: number) => {
    return {
      '&:has(.icon:last-child)': {
        paddingRight: theme(`spacing[${size}]`),
      },
      '&:has(.icon:first-child)': {
        paddingLeft: theme(`spacing[${size}]`),
      },
      '&:has(svg:last-child)': {
        paddingRight: theme(`spacing[${size}]`),
      },
      '&:has(svg:first-child)': {
        paddingLeft: theme(`spacing[${size}]`),
      },
    };
  };

  const textColors = (color: string) => {
    return {
      color: theme(`colors.${color}.600`),
      '&:hover': {
        color: theme(`colors.${color}.700`),
      },
      '&:focus': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:focus-visible': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:active': {
        color: theme(`colors.${color}.800`),
      },
      '&:disabled': {
        color: theme(`colors.${color}.100`),
      },
    };
  };

  const outlineColors = (color: string) => {
    return {
      border: `solid ${theme('spacing[0.5]')} ${theme(`colors.${color}.500`)}`,
      color: theme(`colors.${color}.500`),
      '&:hover': {
        backgroundColor: theme(`colors.${color}.50`),
      },
      '&:focus': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:focus-visible': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:disabled': {
        color: theme(`colors.${color}.100`),
        border: `solid ${theme('spacing[0.5]')} ${theme(
          `colors.${color}.100`
        )}`,
      },
      '&:active': {
        outlineColor: theme(`colors.${color}.800`),
        backgroundColor: theme(`colors.${color}.50`),
      },
    };
  };

  const minColors = (color: string) => {
    return {
      color: theme(`colors.${color}.500`),
      '&:hover': {
        backgroundColor: theme(`colors.${color}.50`),
      },
      '&:focus': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:focus-visible': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:active': {
        outlineColor: theme(`colors.${color}.800`),
        backgroundColor: theme(`colors.${color}.50`),
      },
      '&:disabled': {
        color: theme(`colors.${color}.200`),
      },
    };
  };

  const colors = (color: string) => {
    return {
      backgroundColor: theme(`colors.${color}.600`),
      '&:hover': {
        backgroundColor: theme(`colors.${color}.700`),
      },
      '&:focus': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:focus-visible': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:disabled': {
        color: 'rgba(255, 255, 255, 0.4)',
        backgroundColor: theme(`colors.${color}.100`),
        pointerEvents: 'none',
      },
      '&:active': {
        outlineColor: theme(`colors.${color}.800`),
        backgroundColor: theme(`colors.${color}.700`),
      },
    };
  };

  const fabOutline = (color: string) => {
    return {
      border: `solid ${theme('spacing[0.5]')} ${theme(`colors.${color}.500`)}`,
      color: theme(`colors.${color}.500`),
      '&:hover': {
        backgroundColor: theme(`colors.${color}.50`),
      },
      '&:active': {
        outlineColor: theme(`colors.${color}.800`),
      },
      '&:focus': {
        outlineColor: theme(`colors.${color}.300`),
      },
      '&:focus-visible': {
        outlineColor: theme(`colors.${color}.300`),
      },
    };
  };

  const btnGroupColors = (color: string) => {
    return {
      '& > button': {
        backgroundColor: theme(`colors.${color}.600`),
      },
    };
  };

  const btnGroupOutlineColors = (color: string) => {
    return {
      borderColor: theme(`colors.${color}.500`),
      '& > button': {
        color: theme(`colors.${color}.500`),
        borderColor: theme(`colors.${color}.100`),
        '&:hover': {
          backgroundColor: theme(`colors.${color}.50`),
        },
        '&:focus': {
          backgroundColor: theme(`colors.${color}.50`),
        },
        '&:active': {
          backgroundColor: theme(`colors.${color}.50`),
        },
        '&:disabled': {
          color: theme(`colors.${color}.100`),
          borderColor: theme(`colors.${color}.100`),
        },
      },
    };
  };

  return {
    '.btn': {
      ...base(theme),
      ...adjustPaddingWithIcon(4),
      ...Object.fromEntries(createVariants(colors)),

      // btn variants
      '&-outline': {
        padding: `${theme('spacing.2')} ${theme('spacing.5')}`,
        backgroundColor: 'transparent',
        border: `solid ${theme('spacing[0.5]')} ${theme(
          `colors.${defaultColor}.500`
        )}`,
        color: theme(`colors.${defaultColor}.500`),
        '&:hover': {
          backgroundColor: theme(`colors.${defaultColor}.50`),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme(`colors.${defaultColor}.100`),
          border: `solid ${theme('spacing[0.5]')} ${theme(
            `colors.${defaultColor}.100`
          )}`,
          pointerEvents: 'none',
        },
        '&:active': {
          backgroundColor: theme(`colors.${defaultColor}.50`),
        },
        ...Object.fromEntries(createVariants(outlineColors)),
      },

      '&-min': {
        backgroundColor: 'transparent',
        color: theme(`colors.${defaultColor}.500`),
        '&:hover': {
          backgroundColor: theme(`colors.${defaultColor}.50`),
        },
        '&:active': {
          backgroundColor: theme(`colors.${defaultColor}.50`),
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme(`colors.${defaultColor}.200`),
          border: 'none',
          pointerEvents: 'none',
        },
        ...Object.fromEntries(createVariants(minColors)),
      },

      '&-text': {
        backgroundColor: 'transparent',
        color: theme(`colors.${defaultColor}.600`),
        border: 'none',
        '&:hover': {
          backgroundColor: 'transparent',
          color: theme(`colors.${defaultColor}.700`),
        },
        '&:active': {
          backgroundColor: 'transparent',
          outlineWidth: '0px',
          color: theme(`colors.${defaultColor}.800`),
        },
        '&:focus': {
          outlineWidth: '0px',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
          color: theme(`colors.${defaultColor}.100`),
          border: 'none',
          pointerEvents: 'none',
        },
        ...Object.fromEntries(createVariants(textColors)),
      },

      // btn sizes
      '&-sm': {
        padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
        fontSize: theme('fontSize.label-sm'),
        letterSpacing: '0.005em',
        lineHeight: theme('spacing.5'),
        fontWeight: theme('fontWeight.normal'),
        gap: theme('spacing.1'),
        ...getRadius(theme, defaultRadius),
        '& .icon': {
          ...iconSize(3),
        },

        '& svg': {
          ...iconSize(3),
        },

        ...adjustPaddingWithIcon(0),
      },

      '&-md': {
        padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
        fontSize: theme('fontSize.label-sm'),
        letterSpacing: '0.005em',
        lineHeight: theme('spacing.5'),
        fontWeight: theme('fontWeight.normal'),
        gap: theme('spacing.1'),
        ...getRadius(theme, defaultRadius),
        '& .icon': {
          ...iconSize(4),
        },

        '& svg': {
          ...iconSize(4),
        },
        ...adjustPaddingWithIcon(2),
      },

      '&-lg': {
        padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
        fontSize: theme('fontSize.label-xl'),
        lineHeight: theme('spacing.7'),
        fontWeight: theme('fontWeight.semibold'),
        '& .icon': {
          ...iconSize(7),
        },

        '& svg': {
          ...iconSize(7),
        },
        ...adjustPaddingWithIcon(5),
      },
    },
    '.fab': {
      ...base(theme),
      ...Object.fromEntries(createVariants(colors)),
      '&-sm': {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
        ...getRadius(theme, defaultRadius),
        padding: 0,
        '& .icon': {
          ...iconSize(5),
        },

        '& svg': {
          ...iconSize(5),
        },
      },

      '&-md': {
        width: theme('spacing.10'),
        height: theme('spacing.10'),
        ...getRadius(theme, defaultRadius),
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
        ...getRadius(theme, defaultRadius),
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
        ...getRadius(theme, defaultRadius),
        padding: 0,
        '& .icon': {
          ...iconSize(8),
        },

        '& svg': {
          ...iconSize(8),
        },
      },

      '&-outline': {
        backgroundColor: 'transparent',
        border: `solid ${theme('spacing[0.5]')} ${theme(
          `colors.${defaultColor}.500`
        )}`,
        color: theme(`colors.${defaultColor}.500`),
        '&:hover': {
          backgroundColor: theme(`colors.${defaultColor}.50`),
        },
        ...Object.fromEntries(createVariants(fabOutline)),
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
      ...getRadius(theme, defaultRadius),
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
      ...Object.fromEntries(createVariants(btnGroupColors)),

      '&-small': {
        '& > button': {
          ...base(theme),
          padding: `${theme('spacing[1.5]')} ${theme('spacing.3')}`,
          fontSize: theme('fontSize.label-sm'),
          letterSpacing: '0.005em',
          lineHeight: theme('spacing.5'),
          fontWeight: theme('fontWeight.normal'),
          gap: theme('spacing.1'),
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
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.label-xl'),
          lineHeight: theme('spacing.7'),
          fontWeight: theme('fontWeight.semibold'),
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
        border: `solid ${theme('spacing[0.5]')} ${theme(
          `colors.${defaultColor}.500`
        )}`,
        '& > button': {
          ...base(theme),
          padding: `${theme('spacing.2')} ${theme('spacing.5')}`,
          borderLeftWidth: '0px',
          borderRightWidth: theme('spacing[0.5]'),
          borderTopWidth: '0px',
          borderBottomWidth: '0px',
          borderRadius: '0px',
          backgroundColor: 'transparent',
          color: theme(`colors.${defaultColor}.500`),
          borderColor: theme(`colors.${defaultColor}.100`),
          '&:last-child': {
            borderRightWidth: '0px',
          },
          '&:hover': {
            backgroundColor: theme(`colors.${defaultColor}.50`),
          },
          '&:focus': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
            backgroundColor: theme(`colors.${defaultColor}.50`),
          },
          '&:active': {
            outlineWidth: '0px',
            outlineColor: 'transparent',
            backgroundColor: theme(`colors.${defaultColor}.50`),
          },
          '&:disabled': {
            backgroundColor: 'transparent',
            color: theme(`colors.${defaultColor}.100`),
            borderColor: theme(`colors.${defaultColor}.100`),
            pointerEvents: 'none',
          },
        },
        ...Object.fromEntries(createVariants(btnGroupOutlineColors)),
      },
    },
  };
}

export { button };
