import Button from './button';
/**
 * The main function used to inject the UI elements into the Tailwind config.
 */

const elements = (theme: () => string) => {
  return {
    ...new Button(theme).build(),
  };
};

export default elements;
