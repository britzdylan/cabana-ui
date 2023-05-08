import { link } from './link';
import menu from './menu';
import pill from './pill';
import breadcrumbs from './breadcrumbs';
import pagination from './pagination';
import tabs from './tabs';
/**
 * The main function used to inject the UI elements into the Tailwind config.
 */

const elements = (theme: () => string | number) => {
  return {
    ...link(theme),
    ...menu(theme),
    ...pill(theme),
    ...breadcrumbs(theme),
    ...pagination(theme),
    ...tabs(theme),
  };
};

export default elements;
