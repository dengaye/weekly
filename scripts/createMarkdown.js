const fs = require('fs');
const path = require('path');
const { checkFolderExistsAndCreateFolder } = require('./utils');

const inputFilePath = process.env.FILE_PATH || 'new-doc2';
const filePaths = inputFilePath.split('/');
const fileName = filePaths[filePaths.length - 1];

// 构建文件路径
const docsPath = path.join(__dirname, '../docs');
const filePath = path.join(docsPath, `${inputFilePath}.md`);

if (filePaths.length > 1) {
  const jsonContent = `
  {
    "label": ${filePaths[0]},
    "position": 2
  }
  `;
  checkFolderExistsAndCreateFolder(`${docsPath}/${filePaths[0]}`);
  const jsonFileName = `${filePaths[0]}/_category_.json`;
  const jsonPath = path.join(docsPath, jsonFileName);
  fs.writeFileSync(jsonPath, jsonContent);
}

// 创建 Markdown 文件内容
const content = `---
sidebar_position: 6
id: ${fileName}
title: ${fileName}
---

# ${fileName}

- 

`;

// 将内容写入新的 Markdown 文件
fs.writeFileSync(filePath, content, 'utf8');
console.log(`Created new Markdown file: ${filePath}`);