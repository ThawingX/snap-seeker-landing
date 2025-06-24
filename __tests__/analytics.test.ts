/**
 * Analytics模块单元测试
 * 基于GTM最佳实践指南的测试策略
 */

import { trackEvent, ANALYTICS_EVENTS, trackPageView, trackCTAClick, trackPricingPlanClick } from '../lib/analytics';

// Mock window.dataLayer
Object.defineProperty(window, 'dataLayer', {
  value: [],
  writable: true
});

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
  },
  writable: true
});

// Mock sessionStorage
Object.defineProperty(window, 'sessionStorage', {
  value: {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn()
  },
  writable: true
});

describe('Analytics', () => {
  beforeEach(() => {
    window.dataLayer = [];
    jest.clearAllMocks();
    // 模拟用户同意
    (window.localStorage.getItem as jest.Mock).mockImplementation((key) => {
      if (key === 'analytics_consent') return 'true';
      return null;
    });
    // 模拟会话ID
    (window.sessionStorage.getItem as jest.Mock).mockImplementation((key) => {
      if (key === 'snapseeker_session_id') return 'test_session_123';
      return null;
    });
  });

  describe('trackEvent', () => {
    it('should track basic event', () => {
      trackEvent('test_event', {
        test_param: 'test_value'
      });

      expect(window.dataLayer).toHaveLength(1);
      expect(window.dataLayer[0]).toMatchObject({
        event: 'test_event',
        test_param: 'test_value',
        session_id: 'test_session_123'
      });
      expect(window.dataLayer[0]).toHaveProperty('timestamp');
    });

    it('should not track without user consent', () => {
      (window.localStorage.getItem as jest.Mock).mockImplementation((key) => {
        if (key === 'analytics_consent') return 'false';
        return null;
      });

      trackEvent('test_event', { test_param: 'test_value' });

      expect(window.dataLayer).toHaveLength(0);
    });

    it('should prevent duplicate events within 500ms', () => {
      trackEvent('duplicate_event', { param: 'value1' });
      trackEvent('duplicate_event', { param: 'value2' });

      expect(window.dataLayer).toHaveLength(1);
      expect(window.dataLayer[0]).toMatchObject({
        event: 'duplicate_event',
        param: 'value1'
      });
    });
  });

  describe('trackPageView', () => {
    it('should track page view event', () => {
      trackPageView({
        pageTitle: 'Test Page',
        pagePath: '/test',
        userType: 'new',
        trafficSource: 'google',
        deviceType: 'desktop'
      });

      expect(window.dataLayer).toHaveLength(1);
      expect(window.dataLayer[0]).toMatchObject({
        event: ANALYTICS_EVENTS.PAGE_VIEW,
        action: 'view',
        page_title: 'Test Page',
        page_path: '/test',
        user_type: 'new',
        traffic_source: 'google',
        device_type: 'desktop'
      });
    });
  });

  describe('trackCTAClick', () => {
    it('should track CTA click event', () => {
      trackCTAClick({
        cta_text: 'Try Now',
        cta_type: 'primary',
        page_section: 'hero',
        destination_url: 'https://example.com',
        conversion_intent: 'high'
      });

      expect(window.dataLayer).toHaveLength(1);
      expect(window.dataLayer[0]).toMatchObject({
        event: ANALYTICS_EVENTS.CTA_CLICK,
        action: 'click',
        cta_text: 'Try Now',
        cta_type: 'primary',
        page_section: 'hero',
        destination_url: 'https://example.com',
        conversion_intent: 'high'
      });
    });
  });

  describe('trackPricingPlanClick', () => {
    it('should track pricing plan click event', () => {
      trackPricingPlanClick({
        plan_type: 'premium',
        plan_name: '高级版',
        plan_price: '$19',
        plan_category: 'subscription',
        click_location: 'pricing_page',
        credits_included: '1000'
      });

      expect(window.dataLayer).toHaveLength(1);
      expect(window.dataLayer[0]).toMatchObject({
        event: ANALYTICS_EVENTS.PRICING_PLAN_CLICK,
        action: 'click',
        plan_type: 'premium',
        plan_name: '高级版',
        plan_price: '$19',
        plan_category: 'subscription',
        click_location: 'pricing_page',
        credits_included: '1000'
      });
    });

    it('should track pricing plan click without optional credits', () => {
      trackPricingPlanClick({
        plan_type: 'trial',
        plan_name: '体验版',
        plan_price: '$0.99',
        plan_category: 'one_time',
        click_location: 'hero'
      });

      expect(window.dataLayer).toHaveLength(1);
      expect(window.dataLayer[0]).toMatchObject({
        event: ANALYTICS_EVENTS.PRICING_PLAN_CLICK,
        action: 'click',
        plan_type: 'trial',
        plan_name: '体验版',
        plan_price: '$0.99',
        plan_category: 'one_time',
        click_location: 'hero'
      });
      expect(window.dataLayer[0]).not.toHaveProperty('credits_included');
    });
  });

  describe('ANALYTICS_EVENTS constants', () => {
    it('should have all required event constants', () => {
      expect(ANALYTICS_EVENTS.PAGE_VIEW).toBe('page_view');
      expect(ANALYTICS_EVENTS.GOOGLE_LOGIN).toBe('google_login');
      expect(ANALYTICS_EVENTS.CTA_CLICK).toBe('cta_click');
      expect(ANALYTICS_EVENTS.PRICING_PLAN_CLICK).toBe('pricing_plan_click');
      expect(ANALYTICS_EVENTS.SCROLL_DEPTH).toBe('scroll_depth');
      expect(ANALYTICS_EVENTS.DEMO_INTERACTION).toBe('demo_interaction');
      expect(ANALYTICS_EVENTS.EXTERNAL_PRODUCT_ACCESS).toBe('external_product_access');
    });
  });
});