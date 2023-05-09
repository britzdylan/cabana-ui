/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import avatar from './avatar';
import chip from './chip';
import tag from './tag';
import dot from './dot';

const elements = (theme: () => string | number) => {
  return {
    ...avatar(theme),
    ...chip(theme),
    ...tag(theme),
    ...dot(theme),
  };
};

export default elements;
