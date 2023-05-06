/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import list from './list';
import accordion from './accordion';

const elements = (theme: () => string | number) => {
  return {
    ...list(theme),
    ...accordion(theme),
  };
};

export default elements;
