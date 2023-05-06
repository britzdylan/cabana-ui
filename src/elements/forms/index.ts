/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import input from './input';

const elements = (theme: () => string | number) => {
  return {
    ...input(theme),
  };
};

export default elements;
