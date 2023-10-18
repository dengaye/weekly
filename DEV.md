## 命令说明
### pnpm build.readme

生成 READNE.md，会在 git commit add . 前自动执行

### pnpm build:intro

根据 docs/ 文件夹下的内容生产目录，在执行 pnpm build:markdown 时会自动执行

### FILE_PATH=xxx pnpm build:markdown
生产 markdown 文件，FILE_PATH 为基于当前项目 docs/ 文件下的地址
```
FILE_PATH=2023/111期 pnpm build:markdown
```
