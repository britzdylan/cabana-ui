const defaultColor = 'gray';
import createVariants from '../../lib/colorVariants';
const dot = (theme: (arg0: string) => string | number) => {
  const dotBase = {
    width: theme('spacing.2'),
    height: theme('spacing.2'),
    borderRadius: '50%',
    display: 'inline-block',
    backgroundColor: theme(`colors.${defaultColor}.500`),
  };
  const color = (color: string) => {
    return {
      backgroundColor: theme(`colors.${color}.500`),
    };
  };
  return {
    '.dot': {
      ...dotBase,
      ...Object.fromEntries(createVariants(color)),
    },
  };
};

export default dot;
