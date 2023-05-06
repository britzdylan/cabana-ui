import { button, fab, buttonGroup } from './button';
/**
 * The main function used to inject the UI elements into the Tailwind config.
 */

const elements = (theme: () => string) => {
  return {
    ...button(theme),
    ...fab(theme),
    ...buttonGroup(theme),
  };
};

export default elements;
