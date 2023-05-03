// /**
//  * A dig function that takes any object with a nested structure and a path,
//  * and returns the value under that path or undefined when no value is found.
//  *
//  * @param {any}     source - A nested objects.
//  * @param {string}  path - A path string, for example `my[1].test.field`
//  * @param {boolean} [shouldThrow=false] - Optionally throw an exception when nothing found
//  *
//  */

import { version, homepage } from '../package.json'; // Path: package.json
import cabana from '../cabana.config'; // Path: config/cabana.ts
import plugin from 'tailwindcss/plugin';
import { PluginCreator } from 'tailwindcss/types/config';

const main: PluginCreator = async ({ config }) => {
  //   let components = require('./elements/index.js');
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
  //   addComponents(components(theme));
};

module.exports = plugin(main, {
  ...cabana,
});
