# 交接简报 — CL Interior Portfolio(更新于 2026-07-05)

## 角色分工
- **本对话窗口(Claude Desktop)= 导演**:诊断问题、写 prompt、验收,不直接写项目代码
- **终端 Claude Code 会话 = 执行者**:所有代码由它写(在 C:\Users\Gloria 目录下 `claude --resume` 恢复)

## 项目基本盘
- 路径:`C:\Users\Gloria\portfolio-website`,规则见 CLAUDE.md
- 技术栈:Vite + React + Tailwind v4(@theme token)+ React Router
- 页面:/case-studies/cl-interior,对应 Figma 文件 `lpnDHdskJUCZPZf5QPQBvd`(高保真版)
- Figma REST token 在 `.env` 的 FIGMA_TOKEN(已 gitignore;严禁写进任何会提交的文件)

## 硬约束:Figma API 配额(Starter 计划)
- MCP 工具调用:月度上限已用尽
- REST /v1/files:429,Retry-After ≈ 69 小时 → **约 2026-07-07 恢复**
- 恢复前:零 API 调用;数值按截图目测并标 `/* 暂定值,待同步校对 */`
- 恢复后对终端说"**重新同步 Figma**":一次 GET /v1/files 存 `design-data/figma-file.json` + 一次 /v1/images 批量拿图链;之后全部本地查,校对所有暂定值

## 当前进度
- ✅ 阶段 0 地基(@theme token + SectionHeader / CardHeader / Figure)
- ✅ Nav + Hero、M2 Overview、M3 Final Frames(图注已换正式文案;overlay 标签:大图 SCENE WIDE-SHOT · MOON DOOR VIEW,小图 LOW-ANGLE SHOT · PATTERNED RUG / ELEVATED SHOT · WATER-TOWN VIEW)
- ⚠️ M4~M8 + Footer:结构已建但与设计不符(终端上下文里没有设计截图,靠印象编的;M8 标题曾被编成 "Technical Notes",实际是 "Process")
- 🔄 修复流程进行中:逐模块把 Figma 截图贴进终端重做,顺序 M4 → M6 → M7 → M8/Footer → M5(交互最复杂放最后)

## 每模块重做流程(贴图工作流)
1. Figma 里把该模块截清晰大图(文案可读),终端输入框 Ctrl+V 贴入
2. 发指令:先文字描述看到的布局结构等确认,确认后才写码;文案逐字录入,看不清的列出来问,禁止编造
3. npm run dev 对照截图验收,通过后再发下一个模块

## 图片素材(Annie 手动导出,API 恢复前唯一来源)
- Figma 里选中带图片填充的图层 → Export → 2x PNG(crop/调色会一起烘焙进去,所见即所得)
- 放入 `public/images/cl-interior/`,命名:模块-序号-内容(hero.png、final-frame-01-wide.png、material-01-color.png…)
- 终端做完 M8 后会产出"图片清单.md"对照导出
- M5 的 5 张必须同机位同分辨率零裁切差异(滑块叠图,差一像素就跳);要统一调色就在 Figma 用同尺寸 frame 同 crop 参数一起导

## M5 交互规格(做到 M5 时发给终端)
- before/after 滑块:金色竖线 + 圆把手可拖拽,左侧固定 lighting-flat.png
- 四个 pass 标签(Key only / +Bounce / +Volumetrics / Final):切换滑块右侧图(lighting-key/bounce/volumetrics/final.png),选中态金底黑字,默认 Final
- 切换直接换图不加过渡;右侧 01~04 说明列表为静态

## UE5 灯光 pass 拍摄步骤(Annie 自己操作)
1. 用出 final 的 CineCameraActor,Pilot 后全程不动
2. PostProcessVolume → Exposure → Manual 固定 EV(必须,否则自动曝光毁对比)
3. 每档 `HighResShot 3840x1620`,图在 Saved/Screenshots/
4. flat:View Mode = Unlit → 拍
5. key only:Lit;PPV 的 GI Method = None;SkyLight 和 ExponentialHeightFog 取消 Visible → 拍
6. +bounce:GI 改回 Lumen,SkyLight 恢复,雾仍关 → 拍
7. +volumetrics:雾打开(Volumetric Fog 勾选),主光 Volumetric Scattering Intensity 保持原值 → 拍
8. final:全部恢复,走 MRQ 带调色出图
9. 注意:key only 死黑不要补光,那是叙事的一部分

## 已踩过的坑(别再犯)
- Tailwind v4:字号 token 必须用 `--text-*` 命名空间;`text-[var(--x)]` 会被当颜色
- 手写 `* { margin:0; padding:0 }` 未分层重置会压掉全部工具类(已删,别加回来)
- `npx tailwindcss init` 在 v4 不存在
- Figma "Save local copy" 导出的是 .fig 二进制,不是 JSON,别信这个方案
- 终端自称"修好了"时,拉宽到 1920 再验收(容器问题窄屏看不出)
- token/密钥永不明文写进文档
