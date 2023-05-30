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

const iconSize = (theme: (arg0: string) => string | number, size: number) => {
  return {
    height: theme(`spacing.${size}`),
    width: theme(`spacing.${size}`),
  };
};

const directives = {
  getRadius,
  iconSize,
};

export default directives;
