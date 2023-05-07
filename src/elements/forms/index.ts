/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import input from './input';
import textarea from './textarea';
import toggle from './toggle';
import radio from './radio';

const elements = (theme: () => string | number) => {
  return {
    ...input(theme),
    ...textarea(theme),
    ...toggle(theme),
    ...radio(theme),
  };
};

export default elements;
