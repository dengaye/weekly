const fs = require('fs');

/**
 * 检查文件夹是否存在，不存在就创建一个
 * @param {string} folderPath 文件路径
 */
function checkFolderExistsAndCreateFolder(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }
}

module.exports = {
  checkFolderExistsAndCreateFolder
}