"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight, CheckCircle, Users, TrendingUp, Zap, Target, BarChart3, Lightbulb } from "lucide-react"
import { 
  trackPageView, 
  trackCTAClick, 
  trackDemoInteraction, 
  trackExternalProductAccess,
  initScrollDepthTracking,
  getDeviceType,
  getUserType,
  ANALYTICS_EVENTS
} from "@/lib/analytics"

/**
 * Home page component for SnapSeeker landing page
 * Features hero section, product value proposition, user cases, and demo
 */
export default function HomePage() {
  const [sessionStartTime] = React.useState(Date.now());
  
  React.useEffect(() => {
    // Track page view
    trackPageView({
      pageTitle: 'SnapSeeker - Perfect Your Idea, Build Your PRD Fast',
      pagePath: '/',
      userType: getUserType(),
      trafficSource: document.referrer || 'direct',
      deviceType: getDeviceType()
    });
    
    // Initialize scroll depth tracking
    const cleanup = initScrollDepthTracking('landing');
    
    return cleanup;
  }, []);
  
  const handleCTAClick = (ctaText: string, ctaType: 'primary' | 'secondary', pageSection: string, destinationUrl: string) => {
    console.log('CTA Click triggered:', { ctaText, ctaType, pageSection, destinationUrl });
    trackCTAClick({
      ctaText,
      ctaType,
      pageSection: pageSection as 'hero' | 'features' | 'pricing' | 'footer',
      destinationUrl,
      conversionIntent: ctaType === 'primary' ? 'high' : 'medium'
    });
  };
  
  const handleExternalProductAccess = (sourcePage: string, accessMethod: string, userIntent: string) => {
    console.log('External Product Access triggered:', { sourcePage, accessMethod, userIntent });
    trackExternalProductAccess({
      sourcePage: sourcePage as 'homepage' | 'pricing' | 'demo',
      accessMethod: accessMethod as 'cta_button' | 'pricing_plan' | 'navigation',
      userIntent: userIntent as 'trial' | 'purchase' | 'exploration',
      sessionDurationBeforeJump: Date.now() - sessionStartTime
    });
  };
  
  const handleDemoClick = () => {
    console.log('Demo Click triggered');
    trackDemoInteraction({
      demoType: 'video',
      interactionType: 'play',
      demoDuration: 0,
      completionPercentage: 0,
      userEngagementScore: 5,
      nextAction: 'pricing_page'
    });
  };
  
  // Test function to verify Analytics is working
  const handleTestAnalytics = () => {
    console.log('Testing Analytics...');
    if (typeof window !== 'undefined' && window.dataLayer) {
      console.log('DataLayer exists:', window.dataLayer);
      // 使用统一的事件跟踪函数
      import('@/lib/analytics').then(({ trackEvent }) => {
        trackEvent('test_event', {
          test_data: 'Analytics is working!',
          source: 'manual_test'
        });
      });
      alert('Analytics测试事件已发送！请检查浏览器控制台和GTM调试工具。');
    } else {
      console.error('DataLayer not found!');
      alert('DataLayer未找到！GTM可能没有正确加载。');
    }
  };
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="overflow-hidden relative py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
              🚀 快速完善想法和PRD
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Perfect Your <span className="gradient-text">Idea</span>.
              <br />
              Build Your <span className="gradient-text">PRD</span> Fast.
            </h1>
            <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
              SnapSeeker 快速帮你完善你的想法和PRD，并提供给你agent上下文和约束，帮你快速验证你的想法。
            </p>
            
            {/* GTM Test Button */}
            <div className="mb-6">
              <Button 
                onClick={handleTestAnalytics}
                className="mb-4 px-6 py-3 text-sm bg-red-600 hover:bg-red-700"
              >
                🧪 测试Analytics (开发用)
              </Button>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="px-8 py-6 w-full text-lg text-black bg-cyan-500 hover:bg-cyan-400 sm:w-auto"
                  onClick={() => {
                    handleCTAClick('立即体验产品', 'primary', 'hero', 'https://seeker.snapsnap.site/');
                    handleExternalProductAccess('homepage', 'cta_button', 'trial');
                  }}
                >
                  立即体验产品
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg text-white border-gray-600 hover:bg-gray-800"
                onClick={() => {
                  handleCTAClick('观看演示', 'secondary', 'hero', '#demo');
                  handleDemoClick();
                  // Scroll to demo section
                  document.querySelector('#demo-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                观看演示
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 bg-cyan-500/10" />
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl bg-blue-500/10" />
        </div>
      </section>

      {/* Product Value Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              为什么选择 SnapSeeker？
            </h2>
            <p className="text-xl text-gray-300">
              我们提供全方位的想法完善和PRD生成解决方案，让您的创业之路更加顺畅。
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">快速验证</CardTitle>
                <CardDescription className="text-gray-300">
                  几分钟内帮助你的想法结合竞品，市场趋势，得出合理的MVP功能方案。
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">深度分析</CardTitle>
                <CardDescription className="text-gray-300">
                  从竞品调研出发，结合需求热度，市场趋势，收敛到最核心的几个关键点，形成需求卡片。
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">业务成功</CardTitle>
                <CardDescription className="text-gray-300">
                  输出一个prd.md，你可以放到任何你需要使用到AI的地方，帮助你快速提供AI上下文和约束。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* User Cases Section */}
      <section className="py-20 lg:py-32 bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              成功案例
            </h2>
            <p className="text-xl text-gray-300">
              看看其他创业者如何使用 SnapSeeker 实现产品成功。
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex gap-4 items-center">
                  <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">SaaS 初创公司</CardTitle>
                    <CardDescription className="text-gray-300">xxx LLC.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  "我们处于探索阶段，使用SnapSeeker后，将想法快速落地MVP雏形方案，基于这个方案，我们生成了原型图，营销故事，项目demo，放到社交媒体和分发渠道，以验证我们的想法真实度，节省了我们大量时间。"
                </p>
                <div className="flex gap-2 items-center">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">快速落地MVP</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex gap-4 items-center">
                  <div className="flex justify-center items-center w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">某一人公司</CardTitle>
                    <CardDescription className="text-gray-300">独立开发者</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  "原来我尝试采用AI直接生成需求文档，但是往往存在信任度的问题，使用SnapSeeker之后，打消了我对AI生成需求文档信任缺少的问题，我可以直接使用SnapSeeker的输出内容作为我项目的启动文档。"
                </p>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">提升AI信任度</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              操作演示
            </h2>
            <p className="text-xl text-gray-300">
              看看 SnapSeeker 如何帮助您快速完善想法和生成PRD。
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div 
              className="overflow-hidden relative bg-gray-800 rounded-lg border border-gray-700 aspect-video cursor-pointer hover:border-cyan-500/50 transition-colors"
              onClick={() => {
                trackDemoInteraction({
                  demoType: 'interactive',
                  interactionType: 'play',
                  demoDuration: 0,
                  completionPercentage: 0,
                  userEngagementScore: 7,
                  nextAction: 'pricing_page'
                });
                // Here you would typically open a modal or redirect to demo
                alert('演示功能即将推出！');
              }}
            >
              <div className="flex absolute inset-0 justify-center items-center">
                <div className="text-center">
                  <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full bg-cyan-500/10">
                    <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">点击播放产品演示视频</p>
                </div>
              </div>
              
              {/* Simulated interface preview */}
              <div className="absolute inset-4 bg-gray-900 rounded border border-gray-600 opacity-50">
                <div className="p-4">
                  <div className="flex gap-2 items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-3/4 h-4 bg-gray-700 rounded" />
                    <div className="w-1/2 h-4 bg-gray-700 rounded" />
                    <div className="w-2/3 h-4 bg-gray-700 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r lg:py-32 from-cyan-500/10 to-blue-500/10">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              准备开始了吗？
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              加入数千名成功创业者的行列，让 SnapSeeker 帮助您快速完善想法和生成PRD。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="px-8 py-6 w-full text-lg text-black bg-cyan-500 hover:bg-cyan-400 sm:w-auto"
                  onClick={() => {
                    handleCTAClick('立即体验产品', 'primary', 'footer', 'https://seeker.snapsnap.site/');
                    handleExternalProductAccess('homepage', 'cta_button', 'trial');
                  }}
                >
                  立即体验产品
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 w-full text-lg text-white border-gray-600 hover:bg-gray-800"
                  onClick={() => {
                    handleCTAClick('查看定价方案', 'secondary', 'footer', '/pricing');
                  }}
                >
                  查看定价方案
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-4 justify-between items-center sm:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex justify-center items-center w-8 h-8 bg-cyan-500 rounded-lg">
                <span className="text-sm font-bold text-black">S</span>
              </div>
              <span className="text-xl font-bold text-white">SnapSeeker</span>
            </div>
            <div className="flex flex-col gap-2 items-center sm:items-end">
              <p className="text-sm text-gray-400">
                联系我们: <a href="mailto:xdylanlong@gmail.com" className="text-cyan-400 hover:text-cyan-300">xdylanlong@gmail.com</a>
              </p>
              <p className="text-sm text-gray-400">
                © 2024 SnapSeeker. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}