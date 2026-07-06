# 交接简报 — CL Interior Portfolio(更新于 2026-07-05)

## 角色分工
- **本对话窗口(Claude Desktop)= 导演**:诊断问题、写 prompt、验收,不直接写项目代码
- **终端 Claude Code 会话 = 执行者**:所有代码由它写(在 C:\Users\Gloria 目录下 `claude --resume` 恢复)

## 项目基本盘
- 路径:`C:\Users\Gloria\portfolio-website`,规则见 CLAUDE.md
- 技术栈:Vite + React + Tailwind v4(@theme token)+ React Router
- 站点结构(2026-07-06 重构后):首页 `/` = Work 三卡列表 → 三个案例研究平级:
  - `/case-studies/echoes-of-jiangnan`(原 CLInterior,本文档主体记录的都是这个项目,对应 Figma 文件 `lpnDHdskJUCZPZf5QPQBvd` 高保真版;组件在 `components/echoes-of-jiangnan/`)
  - `/case-studies/signal-lost`(第二个作品,组件在 `components/signal-lost/`,复用 echoes-of-jiangnan 的公共组件 SectionHeader/CardHeader/Figure/Placeholder/ImageLabel)
  - `/case-studies/teyata`(第三个作品,当前是 Coming Soon 占位页,无设计稿)
- Figma REST token 在 `.env` 的 FIGMA_TOKEN(已 gitignore;严禁写进任何会提交的文件)

## 硬约束:Figma API 配额(Starter 计划)
- MCP 工具调用:月度上限已用尽
- REST /v1/files:429,Retry-After ≈ 69 小时 → **约 2026-07-07 恢复**
- 恢复前:零 API 调用;数值按截图目测并标 `/* 暂定值,待同步校对 */`
- 恢复后对终端说"**重新同步 Figma**":一次 GET /v1/files 存 `design-data/figma-file.json` + 一次 /v1/images 批量拿图链;之后全部本地查,校对所有暂定值

## 当前进度
- ✅ 阶段 0 地基(@theme token + SectionHeader / CardHeader / Figure)
- ✅ Nav + Hero、M2 Overview、M3 Final Frames(图注已换正式文案;overlay 标签:大图 SCENE WIDE-SHOT · MOON DOOR VIEW,小图 LOW-ANGLE SHOT · PATTERNED RUG / ELEVATED SHOT · WATER-TOWN VIEW)
- 🔄 修复流程进行中(截至 2026-07-05,导演会话逐模块重做),各模块状态:
  - **M4 Material**:规格已定稿(见下「已定稿规格」),等终端实现/验收
  - **M5 Cinematic Lighting**:规格已定稿(见「M5 交互规格」段),等实现;specs 值已实测填好
  - **M6 Scene Construction**:已实现单张烘焙图 + HTML 三标签 overlay;**待调**=三标签移到各斜切区右上角(FINAL 左移 / SET DRESS 右移一大截 / WIREFRAME 不动)+ FINAL 金字改白统一
  - **M7 Hero Prop**:结构已建(1 大图 + 3 卡);**待改**=大图删中心占字、3 卡标签移到底部(左 SCHOLAR TABLE 灰 / 右状态标签绿 #38C72E)+ 填 4 张图
  - **M8 Process**:已建且内容真实(卡:01 REFERENCE BOARD / 02 MODELING / 03 MODULAR KIT / 04 LAYOUT BREAKDOWN);**待做**=四卡标签从「黑底圆角实心块」改成 gradient-scrim 样式(见「已定稿规格」M8)。Footer 仍未做
- 顺序:M4 → M6 → M7 → M8/Footer → M5(交互最复杂放最后)
- ✅ 2026-07-06 结构重构:`components/case-study/` 整体改名 `components/echoes-of-jiangnan/`,页面 `CLInterior.jsx` → `EchoesOfJiangnan.jsx`,路由 `/case-studies/cl-interior` → `/case-studies/echoes-of-jiangnan`;删除占位 `Home.jsx`,首页 `/` 改为渲染 `Work.jsx`(三卡:Echoes of Jiangnan / Signal Lost / Teyata);新建 `Teyata.jsx` 占位页(`/case-studies/teyata`);`Footer.jsx` 的 prev/next 逻辑改成三项目数组算法(原来硬编码只认 2 个项目,且 next 固定指向 signal-lost 的 bug 已修)
- `public/images/cl-interior/` 图片目录**故意不改名**(只是资源路径,改名要动几十处硬编码图片 src,风险大于收益)——以后新建图片子目录可以按需另起

## 已定稿规格(导演会话锁定,终端照此实现)
**M4 Material & Texture Pipeline**
- 右上:删 4 个 Node Graph 框 → 换 1 张节点图 `material-node-graph.png`,pan/zoom 交互(左键拖=平移,滚轮=以光标为中心缩放 1x~4x,overflow:hidden 非灯箱)
- 右下:`material-before-after.png` 静态图片(W401×H274,圆角12,描边 #C9A227 w1 inside,金标签 DETAIL — BEFORE/AFTER)
- 左侧 4 模块:外框统一 #333333;卡片 415×118 四个同尺寸;每模块=顶部标签 + 下方描述
- 顶部标签(2026-07-05 改版:原「accent 描边横条大按钮 351×25.75」因太亮/视觉疲劳弃用):改为**左对齐中性文字(--text-secondary)+ 左侧 8px 实心圆色点**(点↔文字间距 8px);色点承载颜色索引,文字保持中性
- 色点/accent 4 色(建议定义成 4 个 CSS 变量统一引用):COLOR #C9A227 / HEIGHT MASK #4A8CFF / ROUGHNESS #38C72E / NORMAL #B435A9

**M6 Scene Construction**
- 中间=1 张完整烘焙图 `scene-construction.png`,全宽,无 clip-path、无交互(斜切拼贴已烘在图里)
- FINAL/SET DRESS/WIREFRAME 是 HTML overlay 文字,右对齐到各斜切区右上角(顶部右界 ≈ 33% / 59% / 图右缘),垂直统一 top;三标签同为白色

**M7 Hero Prop Breakdown**
- 顶部 hero 大图 `hero-prop.png`,纯黑底,无标签无卡框
- 下方 3 卡(等宽):圆角卡背+图填满+底部标签栏(左 SCHOLAR TABLE 灰 #7A776F / 右状态标签绿 #38C72E,均小号大写字距大);静态无交互
- 图:`prop-wireframe.png`(WIREFRAME)/ `prop-basecolor.png`(BASE COLOR)/ `prop-detail.png`(DETAIL)
- 卡片:图+底标签包进同一 `rounded-[12px] overflow-hidden` 容器,图片本身不带圆角(否则底部圆角和标签栏断开)

**图片标签统一规范(2026-07-06 定,所有"压在图片上"的标注文字都用这套)**
- 样式基准 = M6 标签:Inter / weight 400 / 11px(--text-caption)/ uppercase / color rgba(255,255,255,0.7) / letter-spacing 0.15em
- 位置:统一 **bottom-right**(内边距 16px)
- 建议抽成一个共享 `<ImageLabel>` 组件/工具,所有模块引用,避免再各写各的
- 逐模块:M2 Overview(已右下,改样式)/ M3 FinalFrames Figure(右上→右下,改样式)/ M4 before-after(左下金→右下白70%)/ M8 Process(去掉 01-04 index、只留 title、左下→右下)
- M6 FINAL/SET DRESS/WIREFRAME:三个各自挪到**所属区块的右下方**(每个 band 内 left→right)
- M7 卡片标签是"图片下方 footer 栏"不算 on-image,是否并入本规范待定

**M8 Process 卡标签(gradient-scrim 改版)**
- 四卡(Row1×3:01 REFERENCE BOARD/02 MODELING/03 MODULAR KIT + Row4 全宽:04 LAYOUT BREAKDOWN)
- 删黑底圆角实心块;改为图片底部 linear-gradient(transparent, rgba(0,0,0,0.6)) 覆盖底部 ~30% scrim,文字压在 scrim 上、bottom-left
- 两行左对齐:行1 金 index #C9A227(~11px),行2 title 白、大写、~14px、letter-spacing 0.15em;无边框无底块

## 每模块重做流程(贴图工作流)
1. Figma 里把该模块截清晰大图(文案可读),终端输入框 Ctrl+V 贴入
2. 发指令:先文字描述看到的布局结构等确认,确认后才写码;文案逐字录入,看不清的列出来问,禁止编造
3. npm run dev 对照截图验收,通过后再发下一个模块

## 图片素材(Annie 手动导出,API 恢复前唯一来源)
- Figma 里选中带图片填充的图层 → Export → 2x PNG(crop/调色会一起烘焙进去,所见即所得)
- 放入 `public/images/cl-interior/`,命名:模块-序号-内容(hero.png、final-frame-01-wide.png、material-01-color.png…)
- 终端做完 M8 后会产出"图片清单.md"对照导出
- M5 的 4 张(key/bounce/volumetrics/final,已弃用 flat)必须同机位同分辨率零裁切差异(crossfade 叠切,差一像素就跳);要统一调色就在 Figma 用同尺寸 frame 同 crop 参数一起导

## M5 交互规格(2026-07-05 重做,已推翻旧 slider 方案)
- ❌ 删掉 before/after 滑块(竖线+把手+左侧 flat 图逻辑全删)
- 四个 pass toggle(Key only / +Bounce / +Volumetrics / Final):点谁换整张图,选中态金底黑字,**默认 Key only**(从起点顺 build-up 走,Final 是高潮放最后)
- 图片切换加 opacity crossfade 180ms;4 张图组件挂载时全部预加载(new Image() / preload)
- toggle ↔ note 联动(Key only→01 / +Bounce→02 / +Volumetrics→03 / Final→04):
  - 选中 note = opacity 1 + 编号金色(可提亮到 #E0B840)+ 左侧 3px #C9A227 竖线 indicator
  - 其余 note = opacity 0.4(糊到认不出才回调,上限 0.45),transition 0.2s 与图片 crossfade 同步
  - 保持白字,整条不变金(金留给 accent 指向性)
- note 文案已核对为分阶段 build-up 描述,与 pass 一一对应成立
- 底部 specs 区(钉卡片底):卡片 flex-col,notes 之后 margin-top:auto 推 specs 到底;specs 顶部 1px rgba(255,255,255,0.08) 细分隔线
  - 2 列 key-value 小字:label 金色 #C9A227 大写字距大(同 toggle 风格),value 灰白 #B8B5AE
  - LIGHT COUNT = 1 key + 3 fill + sky / GI = Lumen / SHADOWS = Virtual Shadow Maps / FOG = Exponential + Volumetric / KEY TEMP = 4200K / RENDER = MRQ(值来自 UE5 实测)

## UE5 灯光 pass 拍摄步骤(Annie 自己操作)
1. 用出 final 的 CineCameraActor,Pilot 后全程不动
2. PostProcessVolume → Exposure → Manual 固定 EV(必须,否则自动曝光毁对比)
3. 每档 `HighResShot 3840x1620`,图在 Saved/Screenshots/
4. ~~flat:View Mode = Unlit → 拍~~(M5 改 crossfade 后不再需要 flat,跳过)
5. key only:Lit;PPV 的 GI Method = None;SkyLight 和 ExponentialHeightFog 取消 Visible → 拍
6. +bounce:GI 改回 Lumen,SkyLight 恢复,雾仍关 → 拍
7. +volumetrics:雾打开(Volumetric Fog 勾选),主光 Volumetric Scattering Intensity 保持原值 → 拍
8. final:全部恢复,走 MRQ 带调色出图
9. 注意:key only 死黑不要补光,那是叙事的一部分

## 已踩过的坑(别再犯)
- Tailwind v4:字号 token 必须用 `--text-*` 命名空间;`text-[var(--x)]` 会被当颜色 —— 2026-07-06 ImageLabel.jsx 又踩了(`text-[var(--text-caption)]` 导致 font-size 回落到默认 16px,已改回 `text-caption`);正确写法一律用命名空间类
- 模块间距:全站唯一权威是 `--container-padding-y`(现 36px → 模块间距 72px);Hero 固定高、内容绝对定位,间距靠 section 的 `margin-bottom` 补齐,别加 padding
- 2026-07-06 重命名 `components/case-study/` 时发现 signal-lost 的 7 个组件(Hero/Overview/Gallery/Storytelling/PropDensity/Lighting/Process)都跨目录 import 了它的 SectionHeader/CardHeader/Figure/Placeholder/ImageLabel —— 改公共组件目录名前,先全局 grep 一遍旧路径字符串,确认没有其他项目在跨目录引用
- 手写 `* { margin:0; padding:0 }` 未分层重置会压掉全部工具类(已删,别加回来)
- `npx tailwindcss init` 在 v4 不存在
- Figma "Save local copy" 导出的是 .fig 二进制,不是 JSON,别信这个方案
- 终端自称"修好了"时,拉宽到 1920 再验收(容器问题窄屏看不出)
- token/密钥永不明文写进文档
