/**
 * 统一的事件跟踪系统 - 基于GTM最佳实践指南
 * 提供类型安全、统一管理的事件跟踪功能
 */

// 声明全局 dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

/**
 * 事件名称常量 - 统一管理所有事件名称
 */
export const ANALYTICS_EVENTS = {
  // 页面浏览事件
  PAGE_VIEW: 'page_view',
  
  // 用户行为事件
  GOOGLE_LOGIN: 'google_login',
  LOGIN_SUCCESS: 'login_success',
  LOGIN_ERROR: 'login_error',
  
  // CTA点击事件
  CTA_CLICK: 'cta_click',
  UPGRADE_CLICK: 'upgrade_click',
  
  // 搜索事件
  SEARCH_SUBMIT: 'search_submit',
  
  // 文件操作事件
  FILE_DOWNLOAD: 'file_download',
  
  // 定价相关事件
  PRICING_PLAN_CLICK: 'pricing_plan_click',
  
  // 滚动深度事件
  SCROLL_DEPTH: 'scroll_depth',
  
  // 演示互动事件
  DEMO_INTERACTION: 'demo_interaction',
  
  // 外部产品访问事件
  EXTERNAL_PRODUCT_ACCESS: 'external_product_access',
  
  // 功能探索事件
  FEATURE_EXPLORATION: 'feature_exploration',
  
  // 使用限制事件
  USAGE_LIMIT_REACHED: 'usage_limit_reached',
  
  // 高级功能兴趣事件
  PREMIUM_FEATURE_INTEREST: 'premium_feature_interest',
  
  // 漏斗步骤事件
  FUNNEL_STEP: 'funnel_step'
} as const;

/**
 * 基础事件参数接口
 */
interface BaseEventParams {
  action?: string;        // 操作类型: 'click', 'submit', 'view'
  page?: string;         // 页面标识: 'login', 'signup', 'dashboard'
  section?: string;      // 页面区域: 'header', 'sidebar', 'main'
  element_id?: string;   // 元素ID
  user_id?: string;      // 用户ID (已登录用户)
}

/**
 * Google 登录事件参数
 */
interface GoogleLoginParams extends BaseEventParams {
  method: 'google';      // 登录方式
  page: 'login' | 'signup';
}

/**
 * 搜索事件参数
 */
interface SearchParams extends BaseEventParams {
  search_term: string;   // 搜索关键词
  results_count: number; // 结果数量
}

/**
 * CTA点击事件参数
 */
interface CTAClickParams extends BaseEventParams {
  cta_text: string;
  cta_type: 'primary' | 'secondary' | 'tertiary';
  page_section: 'hero' | 'features' | 'pricing' | 'footer';
  destination_url: string;
  conversion_intent?: 'high' | 'medium' | 'low';
}

/**
 * 定价方案点击事件参数
 */
interface PricingPlanClickParams extends BaseEventParams {
  plan_type: 'trial' | 'credits' | 'premium' | 'monthly' | 'quarterly' | 'yearly';
  plan_name: string;
  plan_price: string;
  plan_category: 'one_time' | 'subscription';
  click_location: 'hero' | 'pricing_page' | 'comparison_table';
  credits_included?: string;
}

/**
 * 检查用户同意状态
 */
const hasUserConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics_consent') === 'true';
};

/**
 * 检查是否应该跟踪
 */
const shouldTrack = (): boolean => {
  return process.env.NODE_ENV === 'production' || 
         process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
};

/**
 * 生成会话ID
 */
const generateSessionId = (): string => {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * 获取或创建会话ID
 */
const getSessionId = (): string => {
  if (typeof window !== 'undefined') {
    let sessionId = sessionStorage.getItem('snapseeker_session_id');
    if (!sessionId) {
      sessionId = generateSessionId();
      sessionStorage.setItem('snapseeker_session_id', sessionId);
    }
    return sessionId;
  }
  return generateSessionId();
};

/**
 * 事件去重控制
 */
let lastEvent: { name: string; timestamp: number } | null = null;

/**
 * 统一的事件发送函数
 */
export const trackEvent = (eventName: string, eventParams?: { [key: string]: any }) => {
  try {
    // 检查用户同意
    if (!hasUserConsent()) {
      console.log('Analytics tracking skipped - no user consent');
      return;
    }
    
    // 检查是否应该跟踪
    if (!shouldTrack()) {
      console.log('Analytics tracking skipped - not enabled');
      return;
    }
    
    // 事件去重（500ms 内）
    const now = Date.now();
    if (lastEvent && 
        lastEvent.name === eventName && 
        now - lastEvent.timestamp < 500) {
      return;
    }
    
    lastEvent = { name: eventName, timestamp: now };
    
    if (typeof window !== 'undefined') {
      // 确保 dataLayer 存在
      window.dataLayer = window.dataLayer || [];
      
      // 构建事件数据
      const eventData = {
        event: eventName,
        timestamp: new Date().toISOString(),
        session_id: getSessionId(),
        ...eventParams
      };
      
      // 推送事件
      window.dataLayer.push(eventData);
      
      // 开发环境下的调试信息
      if (process.env.NODE_ENV === 'development') {
        console.group('🏷️ GTM Event');
        console.log('Event Name:', eventName);
        console.log('Event Data:', eventData);
        console.groupEnd();
      }
    }
  } catch (error) {
    // 静默处理错误，不影响用户体验
    console.error('Error tracking event:', error);
  }
};

/**
 * 页面浏览跟踪
 */
export const trackPageView = (params: {
  pageTitle: string;
  pagePath: string;
  userType?: 'new' | 'returning' | 'unknown';
  trafficSource?: string;
  deviceType?: 'desktop' | 'mobile' | 'tablet' | 'unknown';
}) => {
  trackEvent(ANALYTICS_EVENTS.PAGE_VIEW, {
    action: 'view',
    page_title: params.pageTitle,
    page_path: params.pagePath,
    user_type: params.userType || 'unknown',
    traffic_source: params.trafficSource || 'direct',
    device_type: params.deviceType || 'unknown'
  });
};

/**
 * Google登录跟踪
 */
export const trackGoogleLogin = (params: GoogleLoginParams) => {
  trackEvent(ANALYTICS_EVENTS.GOOGLE_LOGIN, {
    action: 'click',
    ...params
  });
};

/**
 * CTA点击跟踪
 */
export const trackCTAClick = (params: CTAClickParams) => {
  trackEvent(ANALYTICS_EVENTS.CTA_CLICK, {
    action: 'click',
    conversion_intent: params.conversion_intent || 'medium',
    ...params
  });
};

/**
 * 定价方案点击跟踪
 */
export const trackPricingPlanClick = (params: PricingPlanClickParams) => {
  trackEvent(ANALYTICS_EVENTS.PRICING_PLAN_CLICK, {
    action: 'click',
    ...(params.credits_included && { credits_included: params.credits_included }),
    ...params
  });
};

/**
 * 搜索提交跟踪
 */
export const trackSearchSubmit = (params: SearchParams) => {
  trackEvent(ANALYTICS_EVENTS.SEARCH_SUBMIT, {
    action: 'submit',
    ...params
  });
};

/**
 * 文件下载跟踪
 */
export const trackFileDownload = (params: {
  fileName: string;
  fileType: string;
  fileSize?: number;
  downloadSource: string;
}) => {
  trackEvent(ANALYTICS_EVENTS.FILE_DOWNLOAD, {
    action: 'download',
    file_name: params.fileName,
    file_type: params.fileType,
    file_size: params.fileSize,
    download_source: params.downloadSource
  });
};

/**
 * 滚动深度跟踪
 */
export const trackScrollDepth = (params: {
  scrollPercentage: '25' | '50' | '75' | '100';
  pageType: 'landing' | 'pricing' | 'features';
  timeToScroll: number;
}) => {
  trackEvent(ANALYTICS_EVENTS.SCROLL_DEPTH, {
    action: 'scroll',
    scroll_percentage: params.scrollPercentage,
    page_type: params.pageType,
    time_to_scroll: params.timeToScroll
  });
};

/**
 * 演示互动跟踪
 */
export const trackDemoInteraction = (params: {
  demoType: 'video' | 'interactive' | 'live_demo';
  interactionType: 'play' | 'pause' | 'complete' | 'skip' | 'replay';
  demoDuration: number;
  completionPercentage: number;
  userEngagementScore: number;
  nextAction: 'pricing_page' | 'trial_signup' | 'contact' | 'exit';
}) => {
  trackEvent(ANALYTICS_EVENTS.DEMO_INTERACTION, {
    action: params.interactionType,
    demo_type: params.demoType,
    interaction_type: params.interactionType,
    demo_duration: params.demoDuration,
    completion_percentage: params.completionPercentage,
    user_engagement_score: params.userEngagementScore,
    next_action: params.nextAction
  });
};

/**
 * 外部产品访问跟踪
 */
export const trackExternalProductAccess = (params: {
  sourcePage: 'homepage' | 'pricing' | 'demo';
  accessMethod: 'cta_button' | 'pricing_plan' | 'navigation';
  userIntent: 'trial' | 'purchase' | 'exploration';
  sessionDurationBeforeJump: number;
  planSelected?: string;
}) => {
  trackEvent(ANALYTICS_EVENTS.EXTERNAL_PRODUCT_ACCESS, {
    action: 'access',
    source_page: params.sourcePage,
    access_method: params.accessMethod,
    user_intent: params.userIntent,
    session_duration_before_jump: params.sessionDurationBeforeJump,
    ...(params.planSelected && { plan_selected: params.planSelected })
  });
};

/**
 * 初始化滚动深度跟踪
 */
export const initScrollDepthTracking = (pageType: 'landing' | 'pricing' | 'features') => {
  if (typeof window === 'undefined') return () => {};
  
  const startTime = Date.now();
  const trackedPercentages = new Set<string>();
  
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
    
    const milestones = [25, 50, 75, 100];
    
    milestones.forEach(milestone => {
      if (scrollPercentage >= milestone && !trackedPercentages.has(milestone.toString())) {
        trackedPercentages.add(milestone.toString());
        trackScrollDepth({
          scrollPercentage: milestone.toString() as '25' | '50' | '75' | '100',
          pageType,
          timeToScroll: Date.now() - startTime
        });
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  // 返回清理函数
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

/**
 * 自动检测设备类型
 */
export const getDeviceType = (): 'desktop' | 'mobile' | 'tablet' => {
  if (typeof window === 'undefined') return 'desktop';
  
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
};

/**
 * 自动检测用户类型
 */
export const getUserType = (): 'new' | 'returning' => {
  if (typeof window === 'undefined') return 'new';
  
  const hasVisited = localStorage.getItem('snapseeker_visited');
  if (!hasVisited) {
    localStorage.setItem('snapseeker_visited', 'true');
    return 'new';
  }
  return 'returning';
};

/**
 * 设置用户同意状态
 */
export const setAnalyticsConsent = (consent: boolean) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('analytics_consent', consent.toString());
  }
};

/**
 * 获取用户同意状态
 */
export const getAnalyticsConsent = (): boolean => {
  return hasUserConsent();
};