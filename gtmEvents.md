# GTM 事件配置文档

本文档列出了 SnapSeeker 项目中基于最佳实践指南重构后的所有 Google Tag Manager 事件，供在 GTM 平台中配置使用。

## 事件命名规范

**格式**: `{action}_{object}` (小写字母 + 下划线)

**示例**:
- `page_view` - 页面浏览
- `cta_click` - CTA点击
- `pricing_plan_click` - 定价方案点击
- `google_login` - Google登录

## 统一事件参数

所有事件都包含以下基础参数：
- `event` (string): 事件名称
- `timestamp` (string): ISO格式时间戳
- `session_id` (string): 用户会话ID
- `action` (string): 操作类型 ('click', 'submit', 'view', 'scroll'等)

## 事件列表

### 1. 页面浏览事件 (page_view)

**事件名称**: `page_view`

**触发时机**: 用户访问页面时

**数据层参数**:
```javascript
{
  event: 'page_view',
  action: 'view',
  page_title: '页面标题',
  page_path: '页面路径',
  user_type: 'new|returning|unknown',
  traffic_source: '流量来源',
  device_type: 'desktop|mobile|tablet|unknown',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 2. CTA按钮点击事件 (cta_click)

**事件名称**: `cta_click`

**触发时机**: 用户点击CTA按钮时

**数据层参数**:
```javascript
{
  event: 'cta_click',
  action: 'click',
  cta_text: '按钮文本',
  cta_type: 'primary|secondary|tertiary',
  page_section: 'hero|features|pricing|footer',
  destination_url: '目标URL',
  conversion_intent: 'high|medium|low',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 3. 定价方案点击事件 (pricing_plan_click)

**事件名称**: `pricing_plan_click`

**触发时机**: 用户点击定价方案时

**数据层参数**:
```javascript
{
  event: 'pricing_plan_click',
  action: 'click',
  plan_type: 'trial|credits|premium|monthly|quarterly|yearly',
  plan_name: '方案名称',
  plan_price: '方案价格',
  plan_category: 'one_time|subscription',
  click_location: 'hero|pricing_page|comparison_table',
  credits_included: '包含的积分数量（可选）',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 4. Google登录事件 (google_login)

**事件名称**: `google_login`

**触发时机**: 用户点击Google登录按钮时

**数据层参数**:
```javascript
{
  event: 'google_login',
  action: 'click',
  method: 'google',
  page: 'login|signup',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 5. 登录成功事件 (login_success)

**事件名称**: `login_success`

**触发时机**: 用户成功登录时

**数据层参数**:
```javascript
{
  event: 'login_success',
  action: 'success',
  method: 'google|email|other',
  page: 'login|signup',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 6. 登录错误事件 (login_error)

**事件名称**: `login_error`

**触发时机**: 用户登录失败时

**数据层参数**:
```javascript
{
  event: 'login_error',
  action: 'error',
  method: 'google|email|other',
  error_type: '错误类型',
  page: 'login|signup',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 7. 搜索提交事件 (search_submit)

**事件名称**: `search_submit`

**触发时机**: 用户提交搜索时

**数据层参数**:
```javascript
{
  event: 'search_submit',
  action: 'submit',
  search_term: '搜索关键词',
  results_count: 结果数量,
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 8. 文件下载事件 (file_download)

**事件名称**: `file_download`

**触发时机**: 用户下载文件时

**数据层参数**:
```javascript
{
  event: 'file_download',
  action: 'download',
  file_name: '文件名',
  file_type: '文件类型',
  file_size: 文件大小（可选）,
  download_source: '下载来源',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 9. 滚动深度事件 (scroll_depth)

**事件名称**: `scroll_depth`

**触发时机**: 用户滚动到特定深度时 (25%, 50%, 75%, 100%)

**数据层参数**:
```javascript
{
  event: 'scroll_depth',
  action: 'scroll',
  scroll_percentage: '25|50|75|100',
  page_type: 'landing|pricing|features',
  time_to_scroll: 滚动到该深度的时间（毫秒）,
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 10. 演示互动事件 (demo_interaction)

**事件名称**: `demo_interaction`

**触发时机**: 用户与演示内容互动时

**数据层参数**:
```javascript
{
  event: 'demo_interaction',
  action: 'play|pause|complete|skip|replay',
  demo_type: 'video|interactive|live_demo',
  interaction_type: 'play|pause|complete|skip|replay',
  demo_duration: 演示持续时间（毫秒）,
  completion_percentage: 完成百分比,
  user_engagement_score: 用户参与度评分,
  next_action: 'pricing_page|trial_signup|contact|exit',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 11. 外部产品访问事件 (external_product_access)

**事件名称**: `external_product_access`

**触发时机**: 用户访问外部产品链接时

**数据层参数**:
```javascript
{
  event: 'external_product_access',
  action: 'access',
  source_page: 'homepage|pricing|demo',
  access_method: 'cta_button|pricing_plan|navigation',
  user_intent: 'trial|purchase|exploration',
  session_duration_before_jump: 跳转前会话时长（毫秒）,
  plan_selected: '选择的方案（可选）',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 12. 功能探索事件 (feature_exploration)

**事件名称**: `feature_exploration`

**触发时机**: 用户探索功能时

**数据层参数**:
```javascript
{
  event: 'feature_exploration',
  action: 'hover|click|modal_open|demo_request',
  feature_name: '功能名称',
  feature_category: 'prd_generation|competitor_analysis|market_insight|pmf_analysis|custom_cards',
  exploration_type: 'hover|click|modal_open|demo_request',
  user_plan: 'trial|credits|premium|subscription',
  upgrade_potential: 'high|medium|low',
  feature_availability: 'available|premium_only|coming_soon',
  prd_complexity: 'basic|advanced|enterprise',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 13. 使用限制事件 (usage_limit_reached)

**事件名称**: `usage_limit_reached`

**触发时机**: 用户达到使用限制时

**数据层参数**:
```javascript
{
  event: 'usage_limit_reached',
  action: 'limit_reached',
  limit_type: 'search_count|credits|prd_generation|competitor_analysis',
  current_usage: 当前使用量,
  limit_threshold: 限制阈值,
  user_plan: 'trial|credits|premium|subscription',
  upgrade_prompt_shown: 'true|false',
  time_until_reset: 重置时间（可选）,
  credits_remaining: 剩余积分（可选）,
  suggested_plan: '建议方案（可选）',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 14. 高级功能兴趣事件 (premium_feature_interest)

**事件名称**: `premium_feature_interest`

**触发时机**: 用户对高级功能表现兴趣时

**数据层参数**:
```javascript
{
  event: 'premium_feature_interest',
  action: 'interest',
  feature_requested: '定制化产品卡片|PMF分析|竞品模块prompt拆解|高级AI分析',
  request_method: 'contact_form|chat|email|survey|demo_request',
  user_context: 'startup|product_manager|consultant|enterprise',
  urgency_level: 'immediate|within_month|future',
  willingness_to_pay: 'high|medium|low|unknown',
  prd_use_case: 'mvp_validation|market_research|competitor_analysis|product_strategy',
  team_size: 'individual|small_team|large_team|enterprise',
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

---

### 15. 漏斗步骤事件 (funnel_step)

**事件名称**: `funnel_step`

**触发时机**: 用户完成漏斗中的某个步骤时

**数据层参数**:
```javascript
{
  event: 'funnel_step',
  action: 'step_complete',
  funnel_name: '漏斗名称',
  step_number: 步骤编号,
  step_name: '步骤名称',
  step_completion_time: 步骤完成时间（毫秒）,
  user_id: '用户ID（可选）',
  previous_step_time: 上一步时间（可选）,
  session_id: '会话ID',
  timestamp: 'ISO时间戳'
}
```

## GTM 配置建议

### 1. 触发器配置

为每个事件创建自定义事件触发器：
- 事件名称：使用上述事件名称
- 触发条件：`Event equals {事件名称}`

### 2. 变量配置

创建数据层变量来捕获事件参数：
- 变量类型：数据层变量
- 数据层变量名称：对应参数名称

### 3. 代码配置

在 Google Analytics 4 配置代码中：
- 使用增强型电子商务事件
- 配置自定义参数映射
- 设置转化事件

### 4. 调试验证

使用以下方法验证事件：
- GTM 预览模式
- GA4 调试视图
- 浏览器开发者工具检查 `window.dataLayer`
- 单元测试验证

## 隐私和合规

- 所有事件跟踪都需要用户同意
- 不收集个人身份信息（PII）
- 遵循 GDPR 和其他隐私法规
- 提供用户选择退出机制

## 维护说明

1. **添加新事件**：
   - 在 `ANALYTICS_EVENTS` 常量中添加事件名称
   - 创建对应的跟踪函数
   - 更新此文档
   - 添加单元测试

2. **修改现有事件**：
   - 更新函数参数接口
   - 更新文档
   - 更新测试用例
   - 通知团队成员

3. **删除事件**：
   - 标记为废弃
   - 更新文档
   - 在下个版本中移除

## 性能考虑

- 事件去重机制（500ms内）
- 延迟加载analytics模块
- 错误处理不影响用户体验
- 开发环境调试信息