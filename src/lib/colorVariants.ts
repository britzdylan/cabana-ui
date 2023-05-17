interface cb {
  (color: string): {
    [key: string]: any;
  };
}

const colors = [
  'slate',
  'zinc',
  'neutral',
  'stone',
  'gray',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'primary',
  'secondary',
  'tertiary',
];

const createVariants = (cb: cb) => {
  return new Map(colors.map((color) => [`&-${color}`, cb(color)]));
};

export default createVariants;
