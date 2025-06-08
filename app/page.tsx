"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight, CheckCircle, Users, TrendingUp, Zap, Target, BarChart3, Lightbulb } from "lucide-react"

/**
 * Home page component for SnapSeeker landing page
 * Features hero section, product value proposition, user cases, and demo
 */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="overflow-hidden relative py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
              🚀 快速验证产品想法
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Get Your <span className="gradient-text">MVP</span> Right.
              <br />
              Find Your <span className="gradient-text">PMF</span> Fast.
            </h1>
            <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
              SnapSeeker 帮助您快速验证产品想法，通过强大的分析工具和用户洞察，更快找到产品市场契合点。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8 py-6 w-full text-lg text-black bg-cyan-500 hover:bg-cyan-400 sm:w-auto">
                  立即体验产品
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg text-white border-gray-600 hover:bg-gray-800">
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
              我们提供全方位的产品验证解决方案，让您的创业之路更加顺畅。
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
                  在几分钟内设置产品验证实验，快速收集用户反馈。
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
                  强大的数据分析工具，帮您深入了解用户行为和需求。
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">精准定位</CardTitle>
                <CardDescription className="text-gray-300">
                  AI 驱动的市场分析，帮您找到最佳的产品市场契合点。
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
                    <CardDescription className="text-gray-300">TechFlow</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  "使用 SnapSeeker 后，我们在 3 个月内找到了产品市场契合点，用户留存率提升了 40%。"
                </p>
                <div className="flex gap-2 items-center">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">用户增长 300%</span>
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
                    <CardTitle className="text-white">电商平台</CardTitle>
                    <CardDescription className="text-gray-300">ShopSmart</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  "SnapSeeker 的用户洞察帮助我们优化了产品功能，转化率提升了 60%。"
                </p>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">转化率提升 60%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              操作演示
            </h2>
            <p className="text-xl text-gray-300">
              看看 SnapSeeker 如何帮助您快速验证产品想法。
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden relative bg-gray-800 rounded-lg border border-gray-700 aspect-video">
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
              加入数千名成功创业者的行列，让 SnapSeeker 帮助您找到产品市场契合点。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="px-8 py-6 w-full text-lg text-black bg-cyan-500 hover:bg-cyan-400 sm:w-auto">
                  立即体验产品
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="px-8 py-6 w-full text-lg text-white border-gray-600 hover:bg-gray-800">
                  查看定价方案
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500">
                <span className="text-sm font-bold text-black">S</span>
              </div>
              <span className="text-xl font-bold text-white">SnapSeeker</span>
            </div>
            <div className="flex flex-col items-center gap-2 sm:items-end">
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