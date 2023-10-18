const fs = require('fs');
const path = require('path');

const BASE_PATH = '../docs';

const EXCLUDE_FILE_NAMES = ['intro'];

const docsPath = path.join(__dirname, BASE_PATH);

function getMarkdownList(dir, basePath = '') {
  let markdownList = '';

  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const itemStat = fs.statSync(itemPath);

    if (itemStat.isDirectory()) {
      markdownList += getMarkdownList(itemPath, basePath + item + '/');
    } else if (itemStat.isFile() && path.extname(item) === '.md') {
      const fileName = path.basename(item, '.md');
      if (EXCLUDE_FILE_NAMES.includes(fileName)) {
        return;
      }
      const link = `[${fileName}](${encodeURI(basePath + fileName)}.md)`;
      markdownList += `- ${link}\n`;
    }
  });

  return markdownList;
}

const markdownList = getMarkdownList(docsPath);
const readmeContent = `---
sidebar_position: 1
---

# 好物分享

${markdownList}`;

fs.writeFileSync('./docs/intro.md', readmeContent);