/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import avatar from './avatar';
import chip from './chip';
import dot from './dot';
import tooltip from './tooltip';
import toast from './toast';
import progress from './progress';
import rating from './rating';

const elements = (theme: () => string | number) => {
  return {
    ...avatar(theme),
    ...chip(theme),
    ...dot(theme),
    ...tooltip(theme),
    ...toast(theme),
    ...progress(theme),
    ...rating(theme),
  };
};

export default elements;
