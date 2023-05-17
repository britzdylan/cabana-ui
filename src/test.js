// interface cb {
//   (color: string): {
//     [key: string]: {
//       color?: string | number,
//       backgroundColor?: string | number,
//       borderColor?: string | number,
//       outlineColor?: string | number,
//       textDecorationColor?: string | number,
//       accentColor?: string | number,
//     },
//   };
// }

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
];

const createVariants = (cb) => {
  return new Map(colors.map((color) => [`&-${color}`, cb(color)]));
};

const variant = (color) => {
  return {
    '& input[type=radio]': {
      backgroundColor: `colors.${color}.500`,
    },
  };
};

console.log(createVariants(variant));
