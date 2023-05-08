/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import avatar from './avatar';

const elements = (theme: () => string | number) => {
  return {
    ...avatar(theme),
  };
};

export default elements;
