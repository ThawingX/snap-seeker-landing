# SnapSeeker Landing Page

一个现代化的产品落地页，使用 Next.js 14、Shadcn UI 和 TailwindCSS 构建。

## 功能特性

- 🎨 现代化设计，参考产品截图的青色主题
- 📱 完全响应式设计
- ♿ 遵循 WCAG 无障碍标准
- 🚀 基于 Next.js 14 App Router
- 🎯 使用 Shadcn UI 组件库
- 💨 TailwindCSS 样式系统
- 🌙 深色主题设计
- ⚡ TypeScript 支持

## 页面结构

### 首页 (`/`)
- Hero 区域：产品价值主张
- 产品价值：核心功能介绍
- 用户案例：成功案例展示
- 操作演示：产品演示区域
- CTA 区域：行动号召

### 定价页面 (`/pricing`)
- 三种定价方案：入门版、专业版、企业版
- 功能对比表
- 常见问题解答
- 购买 CTA

## 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: TailwindCSS + Shadcn UI
- **语言**: TypeScript
- **图标**: Lucide React
- **动画**: Framer Motion
- **组件**: Radix UI 原语

## 快速开始

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   ├── page.tsx          # 首页
│   └── pricing/          # 定价页面
│       └── page.tsx
├── components/            # 组件目录
│   ├── ui/               # Shadcn UI 组件
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── badge.tsx
│   └── navigation.tsx    # 导航组件
├── lib/                  # 工具函数
│   └── utils.ts         # 通用工具
└── public/              # 静态资源
```

## 设计特色

- **颜色主题**: 基于青色 (#00ffff) 的现代配色方案
- **渐变效果**: 使用 CSS 渐变创建视觉层次
- **响应式**: 移动端优先的响应式设计
- **无障碍**: 符合 WCAG 标准的无障碍设计
- **性能**: 优化的组件和图片加载

## 自定义主题

主题配置位于 `app/globals.css` 文件中，您可以修改 CSS 变量来自定义颜色：

```css
:root {
  --primary: 180 100% 50%; /* 青色主题 */
  --primary-foreground: 0 0% 0%;
}
```

## 部署

### Vercel (推荐)

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 其他平台

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License