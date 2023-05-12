import * as dotenv from 'dotenv';
dotenv.config();

import algoliasearch from 'algoliasearch';
const client = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_WRITE_API_KEY
);

// 1. Build a dataset
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import removeMd from 'remove-markdown';

const filenames = fs.readdirSync(path.join('./src/pages/components'));
const data = filenames.map((filename) => {
  try {
    const markdownWithMeta = fs.readFileSync(
      './src/pages/components/' + filename
    );
    const { data: frontmatter, content } = matter(markdownWithMeta);
    // console.log(frontmatter, content);
    return {
      title: frontmatter.title,
      content: removeMd(content).replace(/\n/g, ''),
    };
  } catch (e) {
    console.log(e.message);
  }
});

//write data to json file
fs.writeFile('data.json', JSON.stringify(data), 'utf8', err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Data written to file');
    }
  });
// console.log(data);
// 2. Send the dataset in JSON format
// client
//   .initIndex('dev_posts')
//   .saveObjects(JSON.parse(JSON.stringify(data)), {
//     autoGenerateObjectIDIfNotExist: true,
//   })
//   .then((res) => console.log(res));
