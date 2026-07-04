# CL Interior Portfolio - 项目协作规则

## 项目概述

**目标**: 将 Figma 设计稿精确还原为作品集网站  
**Figma 文件**: `lpnDHdskJUCZPZf5QPQBvd` (CL_Interior — Portfolio Case Study)  
**当前阶段**: Figma 已从线框图更新为高保真设计,整页按新设计分阶段重建(阶段 0~8);旧线框数值全部作废,一律用 figma MCP 重新读取

---

## 技术栈

- **框架**: Vite + React 18
- **样式**: Tailwind CSS v4 (使用 @tailwindcss/vite 插件)
- **路由**: React Router v6
- **字体**: Playfair Display (标题), Inter (正文)

---

## 项目结构

```
src/
├── pages/
│   ├── Home.jsx                    # 首页占位
│   └── CaseStudies/
│       └── CLInterior.jsx          # CL Interior 案例页
├── components/
│   └── case-study/                 # 案例研究通用组件
│       ├── SectionHeader.jsx
│       ├── ImagePlaceholder.jsx
│       ├── Caption.jsx
│       └── ...
├── assets/                         # 图片资源
├── App.jsx                         # 路由配置
└── index.css                       # 全局样式 + Tailwind
```

---

## 路由规范

- 首页: `/`
- 案例研究: `/case-studies/[项目名]`
- CL Interior: `/case-studies/cl-interior`

---

## 开发规范

### 1. 设计还原精度

- **所有数值从 Figma API 读取,不估算**
- 间距、字号、颜色、圆角等必须精确匹配
- 响应式:优先开发桌面端(1440px),移动端断点后续定义

### 2. 组件命名

- 文件名: PascalCase (例: `SectionHeader.jsx`)
- 组件名: 与文件名一致
- CSS 类名: Tailwind utilities

### 3. Figma → 代码映射

- 设计 token 的唯一权威是 `src/index.css` 的 `@theme` 块,数值由 figma MCP 从最新设计稿读取后填入
- 旧线框图时期的数值(正文 13px 等)已作废,不要引用
- 公共组件强制复用:SectionHeader(编号+眉题+大标题)、CardHeader(字母+分隔线+标签)、Figure(图片+金色主说明+灰色副说明)

### 4. 代码规整要求

- 语义化 HTML:nav / main / section / figure / figcaption / footer;每个编号模块一个 `<section>`
- 禁止内联 style,全部用 Tailwind 类 + @theme token
- 图片用 figma MCP `download_assets` 导出到 `public/images/cl-interior/`,禁止 placehold.co
- 设计稿里的占位文案原样保留,并加 `{/* TODO: 替换真实文案 */}`

### 5. 模块开发顺序(阶段 0~8)

0. 设计系统地基(@theme token + 三个公共组件)
1. Nav + Hero(Nav:Hao (Gloria) Tang + Work / Technical Art / Resume / Contact,sticky)
2. M2 Project Overview(A/B 卡 + C 卡/图片卡)
3. M3 Final Frames(1 全宽 + 2 并列)
4. M4 Material & Texture Pipeline(左文右节点图 + BEFORE/AFTER 小卡)
5. M5 Cinematic Lighting(before/after 滑块 + pass 切换标签,交互)
6. M6 Scene Construction(FINAL / SET DRESS / WIREFRAME 斜切拼图)
7. M7 Hero Prop Breakdown(大图 + 3 张状态卡)
8. M8 Process(默认折叠)+ Footer,然后整页对照 Figma 自查

**规则**: 一次只做一个阶段,完成后启动 dev server 确认,再开始下一个。

### 6. Git 提交规范

- 每个阶段完成并经确认后提交一次
- 格式: `feat: add [模块名] module`
- 例: `feat: add M3_FinalFrames module`

---

## Figma API 访问

**Token**: 存放在项目根目录 `.env` 文件的 `FIGMA_TOKEN` 变量中(已加入 .gitignore,禁止把 token 写进任何会提交的文件)  
**File Key**: `lpnDHdskJUCZPZf5QPQBvd`

获取节点数据(PowerShell 示例,先从 .env 读取 token):
```bash
curl -H "X-Figma-Token: {FIGMA_TOKEN}" \
  "https://api.figma.com/v1/files/{fileKey}/nodes?ids={nodeId}"
```

---

## 注意事项

1. **不写向后兼容代码** - 只实现当前需求
2. **Tailwind v4 配置** - 使用 `@theme` 块定义设计 token,不使用 tailwind.config.js
3. **字体加载** - 通过 Google Fonts 或本地引入 Playfair Display 与 Inter
4. **图片资源** - 一律从 Figma 用 download_assets 导出真实图片到本地,不用占位图服务

---

## 当前状态

- [x] 项目初始化(Vite + React + Tailwind v4 + Router)
- [ ] 阶段 0:设计系统地基(token + 公共组件)未开始
- [ ] 阶段 1:Nav + Hero(现有 Hero.jsx 是旧线框版,需按新设计重写)
- [ ] 阶段 2:Project Overview(现有 Overview.jsx 是旧线框版,需重写)
- [ ] 阶段 3~8:未开始

> 注:src 下现存的 Hero.jsx / Overview.jsx / SectionHeader.jsx 基于已作废的线框数值,重写时可直接替换。
