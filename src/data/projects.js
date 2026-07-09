// 共享项目数据源 - Work 页和 Resume 页都读这份配置
export const projects = [
  {
    id: 'echoes-of-jiangnan',
    title: 'Echoes of Jiangnan',
    heroImage: '/images/cl-interior/hero.webp',
    blurb: 'Abandoned Jiangnan Interior · Environment Storytelling & Decay',
    scope: {
      work: 'UE5 · 2026',
      resume: {
        role: '3D Environment & Lighting Artist',
        meta: 'Jiangnan Tea-House Interior · UE5 · Personal Project',
        date: '',
        bullets: [
          'Built a complete real-time interior in UE5 with Lumen global illumination and Nanite geometry, from modeling in Maya to texturing in Substance Painter and Mari (UDIM).',
          'Authored a custom weathering material function (orientation-based dust, height-based moisture) to drive believable, grounded surface aging across the scene.'
        ]
      }
    },
    route: '/case-studies/echoes-of-jiangnan',
    online: true
  },
  {
    id: 'teyata',
    title: 'Teyata',
    heroImage: '/images/teyata/00_village_cover.webp', // 村落全景游戏截图作为封面
    blurb: 'Environmental Framework · Terrain, Waterways & Landscape Assembly',
    scope: {
      work: 'UE5 · 2025',
      resume: {
        role: '3D Environment Artist',
        meta: "UE5 · Master's Thesis · 3-person team · Toronto Metropolitan University",
        date: 'Nov 2024 – Jan 2025',
        bullets: [
          'Owned environment art for a narrative RPG world — authored terrain, waterways, and vegetation layout, and assembled the playable landscape in UE5. Terrain and water systems are custom-authored; foliage assets sourced from Unreal Marketplace.',
          'Modeled and textured environment assets in Maya and Substance Painter, working to studio conventions (naming, directory structure, version discipline) across a multidisciplinary team.'
        ]
      }
    },
    route: '/case-studies/teyata',
    online: true
  },
  {
    id: 'signal-lost',
    title: 'Signal Lost',
    heroImage: null,
    blurb: '1980s Diorama · Environment Storytelling',
    scope: {
      work: 'UE5',
      resume: {
        role: '3D Environment Artist',
        meta: '1980s Diorama · UE5 · Personal Project',
        date: '',
        bullets: [
          'Building a real-time environment diorama with vintage electronics and furniture; authoring realistic PBR materials (aged plastic, wood grain, worn metal).'
        ]
      }
    },
    route: '/case-studies/signal-lost',
    online: false // Phase 1A: 不在列表中显示，但保留路由
  }
]
