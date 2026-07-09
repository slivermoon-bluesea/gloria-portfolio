# 交接简报 — Gloria Tang 作品集网站(更新于 2026-07-08)

## 状态:主体完成并已上线 🎯
- **线上**:https://gloria-protfolio.vercel.app/ (Vercel;push 到 master 自动部署)
- **仓库**:https://github.com/slivermoon-bluesea/gloria-portfolio
- **本地**:`C:\Users\Gloria\portfolio-website`
- **技术栈**:Vite + React 19 + Tailwind v4(`@theme` token)+ React Router 7

## 站点结构 / 路由
- `/` → `Work.jsx`(**首页 = 作品列表**,三张可点卡片)
- `/resume` → `Resume.jsx`(按案例页模块风格排版,内容来自简历 PDF,带 Download PDF 按钮;PDF 在 `public/Gloria_Tang_Resume.pdf`)
- `/case-studies/echoes-of-jiangnan` → `EchoesOfJiangnan.jsx`(第一个作品,完成度最高;组件 `components/echoes-of-jiangnan/`)
- `/case-studies/signal-lost` → `SignalLost.jsx`(第二个作品;组件 `components/signal-lost/`,复用 echoes 的公共组件 SectionHeader/CardHeader/Figure/Placeholder/ImageLabel)
- `/case-studies/teyata` → `Teyata.jsx`(第三个作品,Coming Soon 占位,无内容)
- `/design-system` → `DesignSystemDemo.jsx`(token 预览,非正式页)
- 公共组件:`Nav.jsx`(品牌名 + Work / Resume;Contact 已去掉,联系走页脚)、`Footer.jsx`(email + GitHub + ArtStation + 案例页 prev/next 导航)

## 部署 / 运维
- Vercel 从 GitHub 自动构建(Vite preset,**根路径**);`vercel.json` 配了 SPA 回退,深链接刷新不 404
- 每次 `git push origin master` → Vercel 自动重新部署,约 1 分钟
- ⚠️ Vercel 域名仍是 `gloria-protfolio.vercel.app`(带仓库旧拼写 protfolio);要改去 Vercel → Settings → Domains(**域名和仓库名是两套,改仓库名不影响域名**)
- ⚠️ 图片全用根绝对路径 `/images/...`,所以**只能部署在域名根**(Vercel 根路径 OK;GitHub Pages 子路径会让图片 404,别用)
- ⚠️ 别把 Pages 指向源码根目录 —— 那样发的是未编译的 dev `index.html`(`<script src="/src/main.jsx">`),浏览器跑不了 JSX = 白屏。必须走 build

## 图片规范(重要)
- 全部 **WebP**(2026-07-08 从 PNG 批量转,**30MB → 3MB**,降 90%;照片 q85 / 线稿类 q92;超 2400px 宽降到 2400)
- 目录 `public/images/cl-interior/`(名字保留没改,不然要动几十处 src)
- 首屏以下图片已加 `loading="lazy" decoding="async"`;Hero 首图保持即时加载
- **新增图流程**:导出 → 用 anaconda python(`C:\Users\Gloria\anaconda3\python.exe`)+ Pillow 转 WebP → 放进目录 → 代码引用 `.webp`。别直接塞大 PNG(首屏会卡)

## 各页完成度
- ✅ **Echoes of Jiangnan**:8 模块全做完
  - Nav + Hero / M2 Overview / M3 Final Frames / M4 Material(色点索引 + 节点图 pan-zoom)/ M5 Cinematic Lighting(toggle crossfade + note 联动 + specs)/ M6 Scene Construction(单图 + 三区标签)/ M7 Hero Prop / M8 Process(gradient-scrim 卡)
  - 图上标签全站统一 11px / 70%白 / 0.15em(见下设计系统)
- ✅ Work 三卡首页、Resume 页、Footer、模块间距统一 72px、全站图片 WebP 优化
- ⏳ **待办(非阻塞)**:
  - Teyata 正式内容(等设计稿)
  - Footer 品牌区 + 版权行(Annie 说先不做)
  - Signal Lost 内容完成度 —— 终端会话搭的,没逐屏验收过,建议过一遍
  - Nav 品牌名 "Hao (Gloria) Tang" ↔ Resume 页 "Gloria (Hao) Tang" 顺序不一致,待统一
  - M7 卡片状态标签现为白色(曾讨论过绿色 #38C72E,Annie 定为不改)

## 设计系统 / token(唯一权威 = `src/index.css` 的 `@theme`)
- 颜色:bg-primary #121212 / bg-card #1a1a1a / accent-gold #C9A227 / text-primary #F2EFE9 / text-secondary #B8B5AE / text-tertiary #7A776F / border #333333
- graph accent 4 色变量:`--color-graph-color/-height/-rough/-normal` = #C9A227 / #4A8CFF / #38C72E / #B435A9(M4 色点索引用)
- 字号 token 必须用 `--text-*` 命名空间类(见踩坑)
- **图上标签统一样式**(共享组件 `<ImageLabel>`):Inter / weight 400 / 11px(text-caption)/ uppercase / rgba(255,255,255,0.7) / letter-spacing 0.15em / 位置 bottom-right 16px。M6 三个区标签是特例(各钉所属斜切区右下角:right 58% / 31% / 右3)
- **模块间距**:全站唯一权威 `--container-padding-y`(现 36px → 模块间距 72px);改这一个 token 即全站生效。Hero 固定高、内容绝对定位,间距靠 section `margin-bottom` 补齐,别加 padding
- M5 specs 实测值(UE5):LIGHT COUNT = 1 key + 3 fill + sky / GI = Lumen / SHADOWS = Virtual Shadow Maps / FOG = Exponential + Volumetric / KEY TEMP = 4200K / RENDER = MRQ

## 已踩过的坑(别再犯)
- **Tailwind v4 字号坑**:字号必须用 `--text-*` 命名空间类(如 `text-caption`);`text-[var(--text-caption)]` 会被当颜色 → font-size 回落默认 16px。ImageLabel.jsx 踩过一次,已改回 `text-caption`
- **图片路径必须根绝对 + WebP**:改公共组件目录名前,先全局 grep 旧路径字符串(signal-lost 的 7 个组件跨目录 import 了 echoes 的公共组件)
- **部署白屏**:见「部署/运维」——发源码 = 白屏,必须 build;子路径部署 = 图片 404
- 手写 `* { margin:0; padding:0 }` 未分层重置会压掉全部工具类,别加回来
- `npx tailwindcss init` 在 v4 不存在
- 验收拉宽到 1920(容器问题窄屏看不出)
- token/密钥永不明文写进文档;`.env` 的 FIGMA_TOKEN 已 gitignore

## 参考:UE5 灯光 pass 拍摄步骤(Annie 操作,做 M5 素材用,保留备查)
1. 用出 final 的 CineCameraActor,Pilot 后全程不动
2. PostProcessVolume → Exposure → Manual 固定 EV(必须,否则自动曝光毁对比)
3. 每档 `HighResShot 3840x1620`,图在 Saved/Screenshots/
4. key only:Lit;PPV 的 GI Method = None;SkyLight 和 ExponentialHeightFog 取消 Visible → 拍
5. +bounce:GI 改回 Lumen,SkyLight 恢复,雾仍关 → 拍
6. +volumetrics:雾打开(Volumetric Fog 勾选),主光 Volumetric Scattering Intensity 保持原值 → 拍
7. final:全部恢复,走 MRQ 带调色出图
8. 注意:key only 死黑不要补光,那是叙事的一部分
9. M5 用 4 张(key/bounce/volumetrics/final),必须同机位同分辨率零裁切(crossfade 叠切,差一像素就跳)
