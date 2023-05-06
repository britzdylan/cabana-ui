// /**
//  * A dig function that takes any object with a nested structure and a path,
//  * and returns the value under that path or undefined when no value is found.
//  *
//  * @param {any}     source - A nested objects.
//  * @param {string}  path - A path string, for example `my[1].test.field`
//  * @param {boolean} [shouldThrow=false] - Optionally throw an exception when nothing found
//  *
//  */

import { PluginCreator } from 'tailwindcss/types/config';
import plugin from 'tailwindcss/plugin';
import { version, homepage } from '../package.json'; // Path: package.json
import cabana from '../cabana.config'; // Path: config/cabana.ts
import elements from './elements'; // Path: src/elements.ts

const main: PluginCreator = async ({ addComponents, config, theme }) => {
  let logs = config('cabana.logs', true);
  if (logs === true) {
    console.log('=============================================');
    console.log(
      '\x1b[35m%s\x1b[0m',
      'CabanaUI ' + version,
      '\x1b[0m',
      homepage
    );
    console.log('=============================================');
  }
  // @ts-ignore
  addComponents(elements(theme));
};

module.exports = plugin(main, {
  ...cabana,
});
