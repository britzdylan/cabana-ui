import { button } from './button';
/**
 * The main function used to inject the UI elements into the Tailwind config.
 */

const elements = (theme: () => string | number) => {
  return {
    ...button(theme),
  };
};

export default elements;
