/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import input from './input';
import textarea from './textarea';
import toggle from './toggle';
import radio from './radio';
import checkbox from './checkbox';
import range from './range';

const elements = (theme: () => string | number) => {
  return {
    ...input(theme),
    ...textarea(theme),
    ...toggle(theme),
    ...radio(theme),
    ...checkbox(theme),
    ...range(theme),
  };
};

export default elements;
