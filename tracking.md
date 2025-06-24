# SnapSeeker 产品 Analytics 实施策略

## 概述
本文档定义了 SnapSeeker 产品的 Analytics 实施策略，重点关注PRD生成工具的用户行为追踪、定价模型转化分析和产品价值验证。

## 产品背景
SnapSeeker 是一个帮助用户快速完善产品想法并生成PRD文档的AI工具，提供竞品分析、市场洞察和产品验证功能。

## 核心追踪目标

### 1. 定价模型点击追踪
- **目标**: 精确追踪用户对不同定价方案的兴趣和选择偏好
- **关键指标**: 点击率、转化率、方案偏好分析
- **业务价值**: 优化定价策略，提升转化效果
- **实现方式**: 使用统一的 `trackEvent` 函数和标准化事件参数

### 2. 用户旅程追踪
- **目标**: 完整记录用户从首次访问到转化的全过程
- **关键指标**: 页面停留时间、滚动深度、互动频率
- **业务价值**: 识别转化瓶颈，优化用户体验
- **实现方式**: 基于会话ID的连续追踪和漏斗分析

### 3. 高级扩展方案预埋追踪
- **目标**: 为未来的高级功能和企业方案做数据准备
- **关键指标**: 功能探索行为、升级意向、使用限制触达
- **业务价值**: 指导产品路线图，识别付费升级机会
- **实现方式**: 结构化事件参数和预定义的功能分类

## 事件数据层参数详细说明

### 1. 定价方案点击事件 (pricing_plan_click)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('pricing_plan_click', {
  plan_type: 'trial',           // 'trial' | 'credits' | 'premium' | 'monthly' | 'quarterly' | 'yearly'
  plan_name: 'Trial Version',   // 具体方案名称
  plan_price: 'Free',          // 方案价格
  plan_category: 'one_time',   // 'one_time' | 'subscription'
  click_location: 'hero',      // 'hero' | 'pricing_page' | 'comparison_table'
  credits_included: '10'       // 包含的积分数量（可选）
});

// 或使用专用函数
trackPricingPlanClick({
  planType: 'trial',
  planName: 'Trial Version',
  planPrice: 'Free',
  planCategory: 'one_time',
  clickLocation: 'hero',
  creditsIncluded: '10'
});
```

### 2. CTA按钮点击事件 (cta_click)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('cta_click', {
  cta_text: 'Start Free Trial',     // 按钮文本
  cta_type: 'primary',              // 'primary' | 'secondary' | 'tertiary'
  page_section: 'hero',             // 'hero' | 'features' | 'pricing' | 'footer'
  destination_url: '/signup',       // 目标URL
  conversion_intent: 'high'         // 'high' | 'medium' | 'low'
});

// 或使用专用函数
trackCTAClick({
  ctaText: 'Start Free Trial',
  ctaType: 'primary',
  pageSection: 'hero',
  destinationUrl: '/signup',
  conversionIntent: 'high'
});
```

### 3. 页面浏览事件 (page_view)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('page_view', {
  page_title: 'SnapSeeker - AI产品需求文档生成器',
  page_path: '/',
  user_type: 'new',                    // 'new' | 'returning' | 'unknown'
  traffic_source: 'organic',           // 流量来源
  device_type: 'desktop'               // 'desktop' | 'mobile' | 'tablet' | 'unknown'
});

// 或使用专用函数
trackPageView({
  pageTitle: 'SnapSeeker - AI产品需求文档生成器',
  pagePath: '/',
  userType: 'new',
  trafficSource: 'organic'
});
```

### 4. 滚动深度事件 (scroll_depth)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('scroll_depth', {
  scroll_percentage: '50',             // '25' | '50' | '75' | '100'
  page_type: 'landing',               // 'landing' | 'pricing' | 'features'
  time_to_scroll: 15000                // 滚动到该深度的时间（毫秒）
});

// 或使用专用函数
trackScrollDepth({
  percentage: 50,
  pageType: 'landing',
  timeToScroll: 15000
});
```

### 5. Google登录事件 (google_login)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('google_login', {
  method: 'google',                    // 登录方式
  page: 'login'                        // 'login' | 'signup'
});

// 或使用专用函数
trackGoogleLogin({
  method: 'google',
  page: 'login'
});
```

### 6. 功能探索事件 (feature_exploration)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('feature_exploration', {
  feature_name: 'PRD生成器',           // 功能名称
  feature_category: 'prd_generation',  // 功能分类
  exploration_type: 'hover',           // 'hover' | 'click' | 'modal_open' | 'demo_request'
  user_plan: 'trial',                 // 用户方案
  upgrade_potential: 'high',           // 升级潜力
  feature_availability: 'available',   // 功能可用性
  prd_complexity: 'basic'              // PRD复杂度
});

// 或使用专用函数（如果需要）
trackFeatureExploration({
  featureName: 'PRD生成器',
  featureCategory: 'prd_generation',
  explorationType: 'hover',
  userPlan: 'trial',
  upgradePotential: 'high',
  featureAvailability: 'available',
  prdComplexity: 'basic'
});
```



### 7. 使用限制事件 (usage_limit_reached)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('usage_limit_reached', {
  limit_type: 'search_count',          // 'search_count' | 'credits' | 'prd_generation' | 'competitor_analysis'
  current_usage: 95,                   // 当前使用量
  limit_threshold: 100,                // 限制阈值
  user_plan: 'trial',                  // 'trial' | 'credits' | 'premium' | 'subscription'
  upgrade_prompt_shown: 'true',        // 'true' | 'false'
  time_until_reset: 86400000,          // 重置时间（毫秒）
  credits_remaining: 5,                // 剩余积分
  suggested_plan: 'credits'            // 建议升级方案
});

// 或使用专用函数（如果需要）
trackUsageLimitReached({
  limitType: 'search_count',
  currentUsage: 95,
  limitThreshold: 100,
  userPlan: 'trial',
  upgradePromptShown: true,
  timeUntilReset: 86400000,
  creditsRemaining: 5,
  suggestedPlan: 'credits'
});
```

### 8. 高级功能兴趣事件 (premium_feature_interest)

```javascript
// 使用统一的 trackEvent 函数
trackEvent('premium_feature_interest', {
  feature_requested: '定制化产品卡片',  // '定制化产品卡片' | 'PMF分析' | '竞品模块prompt拆解' | '高级AI分析'
  request_method: 'contact_form',      // 'contact_form' | 'chat' | 'email' | 'survey' | 'demo_request'
  user_context: 'startup',             // 'startup' | 'product_manager' | 'consultant' | 'enterprise'
  urgency_level: 'immediate',          // 'immediate' | 'within_month' | 'future'
  willingness_to_pay: 'high',          // 'high' | 'medium' | 'low' | 'unknown'
  prd_use_case: 'mvp_validation',      // 'mvp_validation' | 'market_research' | 'competitor_analysis' | 'product_strategy'
  team_size: 'small_team'              // 'individual' | 'small_team' | 'large_team' | 'enterprise'
});

// 或使用专用函数（如果需要）
trackPremiumFeatureInterest({
  featureRequested: '定制化产品卡片',
  requestMethod: 'contact_form',
  userContext: 'startup',
  urgencyLevel: 'immediate',
  willingnessToPay: 'high',
  prdUseCase: 'mvp_validation',
  teamSize: 'small_team'
});
```

## 转化漏斗分析

### SnapSeeker关键转化路径
1. **首页访问 → 产品演示/体验**
2. **产品演示 → 定价页面浏览**
3. **定价页面浏览 → 方案选择（体验版/积分包/订阅）**
4. **方案选择 → 跳转产品页面使用**
5. **体验版/积分包使用 → 订阅套餐转化**
6. **基础订阅 → 高级扩展升级**

### 漏斗追踪事件序列
```javascript
// 漏斗步骤追踪
{
  event: 'funnel_step',
  funnel_name: 'pricing_conversion',
  step_number: 1-5,
  step_name: '步骤名称',
  user_id: '用户ID',
  session_id: '会话ID',
  previous_step_time: '上一步时间',
  step_completion_time: '完成时间'
}
```

## 价值验证指标

### SnapSeeker高级扩展价值验证
为验证高级扩展方案（$9.9）的价值，需要监测以下关键指标：

1. **PRD生成功能需求热度**
   - 定制化产品卡片功能关注度
   - PMF分析功能使用意愿
   - 竞品模块prompt拆解需求
   - 高级AI分析功能演示完成率

2. **用户升级意愿评估**
   - 从体验版到高级扩展的转化率
   - 积分包用户对高级功能的询问频率
   - 高级功能缺失时的用户反馈
   - 专属客服支持的价值认知

3. **PRD使用场景分析**
   - 用户PRD生成的复杂度需求
   - 竞品分析深度要求
   - 市场洞察功能使用频率
   - 产品验证场景的多样性

4. **竞争优势验证**
   - 与其他PRD工具的功能对比关注度
   - 用户对AI驱动PRD生成的接受度
   - 快速完善想法功能的独特价值认知

## 技术实施架构

### Analytics 模块配置
- **主模块**: `lib/analytics.ts`
- **导入方式**: `import { trackEvent, trackPageView, ... } from '@/lib/analytics'`
- **初始化**: 自动处理 dataLayer 初始化和会话管理

### 统一事件追踪
```javascript
// 导入统一追踪函数
import { trackEvent, trackPageView, trackCTAClick } from '@/lib/analytics';

// 使用统一的 trackEvent 函数
trackEvent('custom_event', {
  custom_param: 'value',
  another_param: 123
});

// 使用专用函数
trackPageView({
  pageTitle: document.title,
  pagePath: window.location.pathname
});

trackCTAClick({
  ctaText: 'Start Free Trial',
  ctaType: 'primary',
  pageSection: 'hero'
});
```

### GTM 容器配置

#### 标签配置
1. **Google Analytics 4 配置标签**
2. **自定义事件标签**（针对每个追踪事件）
3. **转化追踪标签**
4. **再营销标签**

#### 触发器配置
1. **页面浏览触发器**
2. **点击触发器**（针对CTA和定价按钮）
3. **滚动深度触发器**
4. **表单提交触发器**
5. **自定义事件触发器**

#### 变量配置
1. **页面路径变量**
2. **点击元素变量**
3. **用户ID变量**
4. **会话ID变量**
5. **自定义维度变量**

## 数据隐私合规

### GDPR/CCPA 合规
- 实施同意管理机制
- 提供数据删除选项
- 匿名化敏感数据
- 设置数据保留期限

### 数据最小化原则
- 只收集必要的用户数据
- 定期清理无用数据
- 实施数据访问控制

## 实施时间线

### 第一阶段（立即实施）
- SnapSeeker首页和定价页面基础追踪
- 六种定价方案点击追踪（体验版、积分包、高级扩展、月度/季度/年度套餐）
- "立即体验产品"和"观看演示"CTA追踪
- 外部链接跳转追踪（seeker.snapsnap.site）
- 统一事件追踪系统部署

### 第二阶段（2周内）
- PRD生成工具使用旅程追踪
- 从落地页到产品页面的完整转化漏斗
- 积分使用模式和消耗速度分析
- 订阅用户的使用频率和留存追踪
- 滚动深度和用户参与度追踪

### 第三阶段（预埋功能）
- 高级扩展功能探索和需求追踪
- 积分耗尽和搜索限制触达追踪
- PMF分析、定制化产品卡片等高级功能价值验证
- 用户从一次性付费到订阅模式的转化分析
- 隐私合规和数据质量监控

## 数据验证和调试

### 开发环境验证
1. **浏览器控制台检查**:
   ```javascript
   // 检查数据层内容
   console.log(window.dataLayer);
   
   // 检查最新事件
   console.log(window.dataLayer[window.dataLayer.length - 1]);
   
   // 检查Analytics模块状态
   import { getAnalyticsConsent, getSessionId } from '@/lib/analytics';
   console.log('Consent:', getAnalyticsConsent());
   console.log('Session ID:', getSessionId());
   ```

2. **单元测试验证**:
   ```bash
   # 运行Analytics测试
   npm test __tests__/analytics.test.ts
   ```

3. **GTM预览模式**:
   - 启用GTM预览模式
   - 验证事件触发和数据传递
   - 检查变量值是否正确

4. **Google Analytics调试**:
   - 使用GA调试工具
   - 验证事件在GA中的接收情况
   - 检查自定义维度和指标

### 生产环境监控
1. **实时报告监控**
2. **事件数据质量检查**
3. **转化漏斗分析**
4. **异常数据告警**
5. **隐私合规监控**

## 监控和优化

### 定期审查
- 每周数据质量检查
- 每月转化率分析
- 季度策略调整

### A/B测试集成
- 定价页面布局测试（一次性付费 vs 订阅优先展示）
- CTA按钮文案测试（"立即体验" vs "开始使用" vs "免费试用"）
- 高级扩展功能展示方式测试
- 积分包价值主张测试（灵活付费 vs 按需使用）
- PRD生成演示视频位置和时长测试

## SnapSeeker特色功能追踪

### PRD生成过程追踪
- **事件名称**: `prd_generation_process`
- **数据层参数**:
  ```javascript
  {
    event: 'prd_generation_process',
    process_step: 'idea_input|competitor_search|market_analysis|prd_output',
    step_completion_time: '步骤完成时间',
    user_plan: 'trial|credits|premium|subscription',
    idea_complexity: 'simple|moderate|complex',
    competitor_count: '竞品数量',
    market_insights_generated: '市场洞察数量',
    prd_sections_completed: 'PRD完成章节数'
  }
  ```

### 产品演示互动追踪
- **事件名称**: `demo_interaction`
- **数据层参数**:
  ```javascript
  {
    event: 'demo_interaction',
    demo_type: 'video|interactive|live_demo',
    interaction_type: 'play|pause|complete|skip|replay',
    demo_duration: '演示时长',
    completion_percentage: '完成百分比',
    user_engagement_score: '参与度评分',
    next_action: 'pricing_page|trial_signup|contact|exit'
  }
  ```

### 外部产品页面跳转追踪
- **事件名称**: `external_product_access`
- **数据层参数**:
  ```javascript
  {
    event: 'external_product_access',
    source_page: 'homepage|pricing|demo',
    access_method: 'cta_button|pricing_plan|navigation',
    user_intent: 'trial|purchase|exploration',
    session_duration_before_jump: '跳转前停留时间',
    plan_selected: '选择的方案类型'
  }
  ```

## 关键性能指标 (KPIs)

### 转化相关指标
1. **定价方案点击率**
   - 各方案的点击率对比
   - 不同页面位置的转化效果
   - 用户方案偏好分析
   - A/B测试效果评估

2. **CTA转化率**
   - 主要CTA按钮的点击率
   - 不同页面区域的CTA效果
   - 转化意图评级分析
   - 多变量测试结果

3. **页面参与度**
   - 平均页面停留时间
   - 滚动深度分布
   - 跳出率分析
   - 会话质量评分

### 用户行为指标
1. **用户旅程分析**
   - 从访问到转化的路径
   - 关键节点的流失率
   - 多次访问用户的行为模式
   - 漏斗转化率优化

2. **功能探索指标**
   - 高级功能的关注度
   - 升级意向评估
   - 功能可用性影响分析
   - 用户反馈收集

### 商业价值指标
1. **收入归因分析**
   - 不同流量来源的价值
   - 定价策略效果评估
   - 用户生命周期价值预测
   - ROI和ROAS计算

2. **产品优化指标**
   - 功能使用频率
   - 用户反馈质量
   - 产品市场契合度指标
   - 客户满意度追踪

### 隐私和合规指标
1. **同意管理**
   - 用户同意率
   - 同意撤回率
   - 隐私政策接受度

2. **数据质量**
   - 事件完整性
   - 数据准确性
   - 系统可用性

---

*本文档将根据SnapSeeker产品发展和数据洞察持续更新*