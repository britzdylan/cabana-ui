import { button } from './button';
import navigation from './navigation';
import content from './content';
import forms from './forms';
/**
 * The main function used to inject the UI elements into the Tailwind config.
 */

const elements = (theme: () => string | number) => {
  return {
    ...button(theme),
    ...navigation(theme),
    ...content(theme),
    ...forms(theme),
  };
};

export default elements;
