/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import avatar from './avatar';
import chip from './chip';

const elements = (theme: () => string | number) => {
  return {
    ...avatar(theme),
    ...chip(theme),
  };
};

export default elements;
