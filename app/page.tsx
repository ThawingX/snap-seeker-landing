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
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
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
              <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400 text-lg px-8 py-6">
                开始免费试用
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6">
                观看演示
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-blue-500/10 blur-2xl" />
        </div>
      </section>

      {/* Product Value Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              为什么选择 SnapSeeker？
            </h2>
            <p className="text-xl text-gray-300">
              我们提供全方位的产品验证解决方案，让您的创业之路更加顺畅。
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">快速验证</CardTitle>
                <CardDescription className="text-gray-300">
                  在几分钟内设置产品验证实验，快速收集用户反馈。
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                  <BarChart3 className="h-6 w-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">深度分析</CardTitle>
                <CardDescription className="text-gray-300">
                  强大的数据分析工具，帮您深入了解用户行为和需求。
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Target className="h-6 w-6 text-cyan-400" />
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
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              成功案例
            </h2>
            <p className="text-xl text-gray-300">
              看看其他创业者如何使用 SnapSeeker 实现产品成功。
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">SaaS 初创公司</CardTitle>
                    <CardDescription className="text-gray-300">TechFlow</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  "使用 SnapSeeker 后，我们在 3 个月内找到了产品市场契合点，用户留存率提升了 40%。"
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">用户增长 300%</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">电商平台</CardTitle>
                    <CardDescription className="text-gray-300">ShopSmart</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  "SnapSeeker 的用户洞察帮助我们优化了产品功能，转化率提升了 60%。"
                </p>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-sm text-green-400">转化率提升 60%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              操作演示
            </h2>
            <p className="text-xl text-gray-300">
              看看 SnapSeeker 如何帮助您快速验证产品想法。
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="relative aspect-video rounded-lg bg-gray-800 border border-gray-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 mx-auto">
                    <svg className="h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-300">点击播放产品演示视频</p>
                </div>
              </div>
              
              {/* Simulated interface preview */}
              <div className="absolute inset-4 bg-gray-900 rounded border border-gray-600 opacity-50">
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded w-3/4" />
                    <div className="h-4 bg-gray-700 rounded w-1/2" />
                    <div className="h-4 bg-gray-700 rounded w-2/3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              准备开始了吗？
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              加入数千名成功创业者的行列，让 SnapSeeker 帮助您找到产品市场契合点。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400 text-lg px-8 py-6">
                免费开始使用
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6 w-full">
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
            <p className="text-sm text-gray-400">
              © 2024 SnapSeeker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}