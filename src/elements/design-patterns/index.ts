/**
 * The main function used to inject the UI elements into the Tailwind config.
 */
import avatar from './avatar';
import chip from './chip';
import tag from './tag';
import dot from './dot';
import tooltip from './tooltip';
import toast from './toast';

const elements = (theme: () => string | number) => {
  return {
    ...avatar(theme),
    ...chip(theme),
    ...tag(theme),
    ...dot(theme),
    ...tooltip(theme),
    ...toast(theme),
  };
};

export default elements;
