const dot = (theme: (arg0: string) => string | number) => {
  const dotBase = {
    width: theme('spacing.2'),
    height: theme('spacing.2'),
    borderRadius: '50%',
    display: 'inline-block',
    backgroundColor: theme('colors.gray.500'),
  };
  return {
    '.dot': {
      ...dotBase,
      '&-green': {
        ...dotBase,
        backgroundColor: theme('colors.green.500'),
      },
      '&-yellow': {
        ...dotBase,
        backgroundColor: theme('colors.yellow.500'),
      },
      '&-red': {
        ...dotBase,
        backgroundColor: theme('colors.red.500'),
      },
    },
  };
};

export default dot;
