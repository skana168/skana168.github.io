# 方向确认 · Skana 工作室落地页

日期：2026-11-03

## 展示了哪些版本

第二轮六个完整版，全部在 `design-demos/round-2/`：

1. `dir-1.html` — The System / Wim Crouwel（截图 `dir-1-full.png`）
2. `dir-2.html` — Terminal First / Bun.sh（截图 `dir-2-full.png`）
3. `dir-3.html` — The Module / 田中一光（截图 `dir-3-full.png`）
4. `dir-4.html` — Code as Material / Zach Lieberman（截图 `dir-4-full.png`）
5. `dir-5.html` — The Product Family / JetBrains（截图 `dir-5-full.png`）
6. `dir-6.html` — The Index / Editorial Brutalism（截图 `dir-6-full.png`）

六版总览：`design-demos/round-2/compare-all.html` / `compare-all.png`。

## 用户的选择（原话）

> 6

## 实现约定

- 采用 `design-demos/round-2/dir-6.html`：黑白 + 超链接蓝 + 信号橙，巨号 headline、右侧工具索引、三栏产品简报、黑色宣言带、四栏原则。
- 新首页替换仓库根的 `index.html`，作为 Skana 工作室落地页。
- `devsweep/` 的产品落地页保留，继续使用 `styles.css` 与 `main.js`；新首页不依赖这两个文件。
- 新增 `assets/mb-screen-5.jpg`（Moment Bloom 官方截图裁切），DevSweep 继续用 `assets/devsweep-main.png`。
- DevSweep 的「详情」链接指向站内 `devsweep/`；下载仍指向 GitHub Releases。
- 中文优先，英文并列；语言选择存 localStorage。
- 375 / 1440 验证；控制台零报错；无横向溢出。
