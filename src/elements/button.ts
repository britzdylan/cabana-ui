import createVariants from '../lib/colorVariants';
import directives from '../lib/directives';
const { getRadius, iconSize } = directives;
const defaultColor = 'primary';
const defaultRadius = '1.5';

const buttonPaddingScale = {
  sm: ['2', '4'],
  base: ['3', '6'],
  baseOutline: ['2.5', '5'],
  lg: ['3.5', '7'],
};

const base = (theme: (arg0: string) => string | number) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    backgroundColor: theme(`colors.${defaultColor}.500`),
    transition: 'all .1s ease-out',
    gap: theme('spacing[1.5]'),
    padding: `${theme(`spacing[${buttonPaddingScale.base[0]}]`)} ${theme(
      `spacing[${buttonPaddingScale.base[1]}]`
    )}`,
    fontSize: theme('fontSize.label-sm'),
    fontWeight: theme('fontWeight.medium'),
    // letterSpacing: '0.002em',
    lineHeight: theme('spacing.4'),
    ...getRadius(theme, defaultRadius),
    cursor: 'pointer',
    // Default states
    '&:focus': {
      outline: 'solid',
      outlineWidth: theme('spacing[1]'),
      outlineColor: theme(`colors.${defaultColor}.300`),
    },
    '&:focus-visible': {
      outline: 'solid',
      outlineWidth: theme('spacing[1]'),
      outlineColor: theme(`colors.${defaultColor}.300`),
    },
    '&:disabled': {
      color: 'rgba(255, 255, 255, 0.4)',
      backgroundColor: theme(`colors.${defaultColor}.100`),
      pointerEvents: 'none',
    },
    '&:active': {
      outline: '`solid`',
      outlineWidth: theme('spacing[1]'),
      outlineColor: theme(`colors.${defaultColor}.700`),
      backgroundColor: theme(`colors.${defaultColor}.600`),
    },
    //   icons
    '& .icon': {
      ...iconSize(theme, 5),
    },

    '& svg': {
      ...iconSize(theme, 5),
    },
  };
};

function button(theme: (arg0: string) => string | number) {
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
      backgroundColor: theme(`colors.${color}.500`),
      '&:hover': {
        backgroundColor: theme(`colors.${color}.600`),
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
        backgroundColor: theme(`colors.${color}.500`),
        '&:hover': {
          backgroundColor: theme(`colors.${color}.600`),
        },
        '&:focus': {
          backgroundColor: theme(`colors.${color}.600`),
        },
        '&:active': {
          backgroundColor: theme(`colors.${color}.700`),
        },
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
        padding: `${theme(
          `spacing[${buttonPaddingScale.baseOutline[0]}]`
        )} ${theme(`spacing[${buttonPaddingScale.baseOutline[1]}]`)}`,
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
        padding: `${theme(`spacing[${buttonPaddingScale.sm[0]}]`)} ${theme(
          `spacing[${buttonPaddingScale.sm[1]}]`
        )}`,
        fontSize: theme('fontSize.label-xs'),
        letterSpacing: '0.005em',
        // lineHeight: theme('spacing.5'),
        fontWeight: theme('fontWeight.normal'),
        gap: theme('spacing.1'),
        ...getRadius(theme, defaultRadius),
        '& .icon': {
          ...iconSize(theme, 4),
        },

        '& svg': {
          ...iconSize(theme, 4),
        },

        ...adjustPaddingWithIcon(0),
      },

      // '&-md': {
      //   padding: `${theme(`spacing[${buttonPaddingScale.md[0]}]`)} ${theme(
      //     `spacing[${buttonPaddingScale.md[1]}]`
      //   )}`,
      //   fontSize: theme('fontSize.label-sm'),
      //   letterSpacing: '0.005em',
      //   // lineHeight: theme('spacing.5'),
      //   fontWeight: theme('fontWeight.normal'),
      //   gap: theme('spacing.1'),
      //   ...getRadius(theme, defaultRadius),
      //   '& .icon': {
      //     ...iconSize(theme, 4),
      //   },

      //   '& svg': {
      //     ...iconSize(theme, 4),
      //   },
      //   ...adjustPaddingWithIcon(2),
      // },

      '&-lg': {
        padding: `${theme(`spacing[${buttonPaddingScale.lg[0]}]`)} ${theme(
          `spacing[${buttonPaddingScale.lg[1]}]`
        )}`,
        fontSize: theme('fontSize.label'),
        // lineHeight: theme('spacing.'),
        fontWeight: theme('fontWeight.semibold'),
        '& .icon': {
          ...iconSize(theme, 7),
        },

        '& svg': {
          ...iconSize(theme, 7),
        },
        ...adjustPaddingWithIcon(5),
      },
    },
    '.fab': {
      ...base(theme),
      padding: 0,
      width: theme('spacing.10'),
      height: theme('spacing.10'),
      ...Object.fromEntries(createVariants(colors)),
      '& .icon': {
        ...iconSize(theme, 6),
      },

      '& svg': {
        ...iconSize(theme, 6),
      },

      '&-sm': {
        width: theme('spacing.8'),
        height: theme('spacing.8'),
        ...getRadius(theme, defaultRadius),
        padding: 0,
        '& .icon': {
          ...iconSize(theme, 5),
        },

        '& svg': {
          ...iconSize(theme, 5),
        },
      },

      // '&-md': {
      //   width: theme('spacing.10'),
      //   height: theme('spacing.10'),
      //   ...getRadius(theme, defaultRadius),
      //   padding: 0,
      //   '& .icon': {
      //     ...iconSize(theme, 6),
      //   },

      //   '& svg': {
      //     ...iconSize(theme, 6),
      //   },
      // },

      '&-lg': {
        width: theme('spacing.12'),
        height: theme('spacing.12'),
        ...getRadius(theme, defaultRadius),
        padding: 0,
        '& .icon': {
          ...iconSize(theme, 7),
        },

        '& svg': {
          ...iconSize(theme, 7),
        },
      },

      '&-xl': {
        width: theme('spacing.14'),
        height: theme('spacing.14'),
        ...getRadius(theme, defaultRadius),
        padding: 0,
        '& .icon': {
          ...iconSize(theme, 8),
        },

        '& svg': {
          ...iconSize(theme, 8),
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
          backgroundColor: theme(`colors.${defaultColor}.600`),
        },
        '&:active': {
          outlineWidth: '0px',
          outlineColor: 'transparent',
          backgroundColor: theme(`colors.${defaultColor}.700`),
        },
        '&:hover': {
          backgroundColor: theme(`colors.${defaultColor}.600`),
        },
        '&:disabled': {
          backgroundColor: theme(`colors.${defaultColor}.100`),
          color: theme(`colors.${defaultColor}.200`),
          pointerEvents: 'none',
        },
      },
      ...Object.fromEntries(createVariants(btnGroupColors)),

      '&-sm': {
        '& > button': {
          ...base(theme),
          padding: `${theme(`spacing[${buttonPaddingScale.sm[0]}]`)} ${theme(
            `spacing[${buttonPaddingScale.sm[1]}]`
          )}`,
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
      '&-lg': {
        '& > button': {
          ...base(theme),
          padding: `${theme(`spacing[${buttonPaddingScale.lg[0]}]`)} ${theme(
            `spacing[${buttonPaddingScale.lg[1]}]`
          )}`,
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
          padding: `${theme(
            `spacing[${buttonPaddingScale.baseOutline[0]}]`
          )} ${theme(`spacing[${buttonPaddingScale.baseOutline[1]}]`)}`,
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
