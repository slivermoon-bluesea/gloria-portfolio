# Portfolio Website - 项目协作规则

## 项目概述

**目标**: 多作品集网站,首页 Work 列表 + 多个案例研究(Echoes of Jiangnan / Signal Lost / Teyata…)
**Echoes of Jiangnan(原 CLInterior)**: 本文档大部分开发规范以这个项目为例写成,是第一个精确还原 Figma 设计稿的案例研究
**Figma 文件**: `lpnDHdskJUCZPZf5QPQBvd` (CL_Interior — Portfolio Case Study,对应 Echoes of Jiangnan)
**当前阶段**: 主体完成并已上线(Vercel: https://gloria-protfolio.vercel.app/ ,push master 自动部署;仓库 github.com/slivermoon-bluesea/gloria-portfolio)。Echoes of Jiangnan 8 模块全做完;Work 首页 / Resume 页 / Footer 完成;全站图片已转 WebP 优化。Signal Lost 已搭骨架待逐屏验收;Teyata 仅占位页待设计稿。详细状态见 HANDOFF.md

---

## 技术栈

- **框架**: Vite + React 19
- **样式**: Tailwind CSS v4 (使用 @tailwindcss/vite 插件)
- **路由**: React Router v7
- **部署**: Vercel(GitHub 自动构建,根路径,`vercel.json` 配 SPA 回退)
- **图片**: 全部 WebP,放 `public/images/cl-interior/`,首屏以下 lazy-load
- **字体**: Playfair Display (标题), Inter (正文)

---

## 项目结构

```
src/
├── pages/
│   ├── Work.jsx                        # 首页(/),三卡列表 → 三个案例研究
│   ├── Resume.jsx
│   └── CaseStudies/
│       ├── EchoesOfJiangnan.jsx         # 案例页(原 CLInterior)
│       ├── SignalLost.jsx               # 案例页
│       └── Teyata.jsx                   # 占位页(Coming Soon,待设计稿)
├── components/
│   ├── Nav.jsx / Footer.jsx             # 全站公共
│   ├── echoes-of-jiangnan/              # Echoes of Jiangnan 专属组件
│   │   ├── SectionHeader.jsx / CardHeader.jsx / Figure.jsx / ImageLabel.jsx / Placeholder.jsx  ← 这几个也被 signal-lost 跨目录复用
│   │   └── Hero.jsx / Overview.jsx / FinalFrames.jsx / MaterialPipeline.jsx / CinematicLighting.jsx / SceneConstruction.jsx / HeroPropBreakdown.jsx / TechnicalNotes.jsx
│   └── signal-lost/                     # Signal Lost 专属组件
│       └── Hero.jsx / Overview.jsx / Gallery.jsx / Storytelling.jsx / PropDensity.jsx / Lighting.jsx / Process.jsx
├── assets/                         # 图片资源
├── App.jsx                         # 路由配置
└── index.css                       # 全局样式 + Tailwind
```

> ⚠️ `echoes-of-jiangnan/` 里的 SectionHeader/CardHeader/Figure/Placeholder/ImageLabel 是**跨项目共享组件**(signal-lost 也在用)。以后要挪动/改名这个目录,先 grep 全局引用,别只看 EchoesOfJiangnan.jsx 一个文件。

---

## 路由规范

- 首页: `/`(Work 三卡列表)
- 案例研究: `/case-studies/[项目名]`
  - `/case-studies/echoes-of-jiangnan`
  - `/case-studies/signal-lost`
  - `/case-studies/teyata`(占位)

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
- 图片用 figma MCP `download_assets` 导出到 `public/images/cl-interior/`(历史命名,故意不随 echoes-of-jiangnan 改名——改名要动几十处硬编码图片路径,风险大于收益;新项目图片可另起子目录如 `public/images/signal-lost/`),禁止 placehold.co
- 设计稿里的占位文案原样保留,并加 `{/* TODO: 替换真实文案 */}`

### 5. 模块开发顺序(阶段 0~8)

0. 设计系统地基(@theme token + 三个公共组件)
1. Nav + Hero(Nav:Hao (Gloria) Tang + Work / Technical Art / Resume / Contact,sticky)
2. M2 Project Overview(A/B 卡 + C 卡/图片卡)
3. M3 Final Frames(1 全宽 + 2 并列)
4. M4 Material & Texture Pipeline(左文右节点图 + BEFORE/AFTER 小卡)
5. M5 Cinematic Lighting(pass toggle 切图 crossfade + note 联动 + 底部 specs,交互;旧 slider 方案已弃)
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
- [x] Echoes of Jiangnan 阶段 0~8 全部建完 + 细节校对完成 + 已上线
- [x] 首页 Work 三卡列表 + Teyata 占位页 + Footer prev/next 三项目导航
- [ ] Signal Lost:骨架已搭(7 个模块组件),内容/图片素材/视觉细节待补
- [ ] Teyata:仅 Coming Soon 占位,等设计稿

> 注:详细的模块级进度、已定稿规格、踩过的坑,以 HANDOFF.md 为准(那边更新更勤)。
