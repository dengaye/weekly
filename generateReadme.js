const fs = require('fs');
const path = require('path');

const BASE_PATH = './docs';

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
      const link = `[${fileName}](${encodeURI(BASE_PATH + '/' + basePath + fileName)}.md)`;
      markdownList += `- ${link}\n`;
    }
  });

  return markdownList;
}

const markdownList = getMarkdownList(docsPath);
const readmeContent = `# 好物分享\n
>记录一些有趣的事情 [访问地址](https://dengaye.github.io/weekly)\n
${markdownList}`;

fs.writeFileSync('README.md', readmeContent);