import createVariants from '../../lib/colorVariants';
const defaultColor = 'gray';
const rating = (theme: (arg0: string) => string | number) => {
  const variant = (color: string) => {
    return {
      '& input[type=radio]': {
        backgroundColor: theme(`colors.${color}.600`),
      },
    };
  };

  return {
    '.rating': {
      display: 'flex',
      alignItems: 'center',
      gap: theme('spacing.1'),
      '& input[type=radio]': {
        appearance: 'none',
        cursor: 'pointer',
        width: theme('spacing.6'),
        height: theme('spacing.6'),
        backgroundColor: theme(`colors.${defaultColor}.600`),
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        '-webkit-mask-size': 'cover',
        '-webkit-mask-position': 'center',
        '-webkit-mask-repeat': 'no-repeat',
        '-webkit-mask-image':
          'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTkyJyBoZWlnaHQ9JzE4MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBmaWxsPSdibGFjaycgZD0nbTk2IDEzNy4yNjMtNTguNzc5IDQyLjAyNCAyMi4xNjMtNjguMzg5TC44OTQgNjguNDgxbDcyLjQ3Ni0uMjQzTDk2IDBsMjIuNjMgNjguMjM4IDcyLjQ3Ni4yNDMtNTguNDkgNDIuNDE3IDIyLjE2MyA2OC4zODl6JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz4=)',
        '&:checked ~ input': {
          opacity: 0.2,
        },
      },
      ...Object.fromEntries(createVariants(variant)),
    },
  };
};

export default rating;
