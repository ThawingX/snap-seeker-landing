"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"

/**
 * Pricing page component for SnapSeeker
 * Features different pricing tiers with one-time payment options
 */
export default function PricingPage() {
  const pricingPlans = [
    {
      name: "体验版",
      description: "快速体验产品功能",
      price: "$0.99",
      originalPrice: null,
      icon: Zap,
      popular: false,
      features: [
        "一次完整体验",
        "基础搜索功能",
        "产品分析报告",
        "邮件支持",
        "24小时访问权限"
      ],
      buttonText: "立即体验",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "月度无限版",
      description: "适合频繁使用的用户",
      price: "$19",
      originalPrice: null,
      icon: Star,
      popular: true,
      features: [
        "无限次搜索",
        "高级AI分析",
        "实时数据更新",
        "优先客服支持",
        "详细分析报告",
        "API访问权限",
        "数据导出功能"
      ],
      buttonText: "开始订阅",
      buttonVariant: "default" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "积分包",
      description: "灵活使用，按需付费",
      price: "$10",
      originalPrice: null,
      icon: Crown,
      popular: false,
      features: [
        "100 积分 (20次搜索)",
        "每次搜索消耗5积分",
        "积分永不过期",
        "基础分析功能",
        "邮件支持",
        "数据导出功能"
      ],
      buttonText: "购买积分",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              🚀 灵活定价方案
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              选择适合您的
              <span className="gradient-text">使用方式</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              体验版、月度订阅或积分包，满足不同使用需求。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card 
                  key={plan.name} 
                  className={`relative bg-gray-800/50 border-gray-700 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-cyan-500 text-black font-semibold px-4 py-1">
                        🔥 最受欢迎
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <div className="mb-4 flex justify-center">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        plan.popular ? 'bg-cyan-500/20' : 'bg-gray-700/50'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${
                          plan.popular ? 'text-cyan-400' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-300 mt-2">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">
                          {plan.name === "月度无限版" ? "每月" : plan.name === "积分包" ? "100积分" : "一次体验"}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter>
                    <a href={plan.buttonLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button 
                        className={`w-full ${
                          plan.popular 
                            ? 'bg-cyan-500 text-black hover:bg-cyan-400' 
                            : 'border-gray-600 text-white hover:bg-gray-800'
                        }`}
                        variant={plan.buttonVariant}
                        size="lg"
                      >
                        {plan.buttonText}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 lg:py-32 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              功能对比
            </h2>
            <p className="text-xl text-gray-300">
              详细了解每个版本包含的功能。
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-4 px-6 text-white font-semibold">功能</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">体验版</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">月度无限版</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">积分包</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">搜索次数</td>
                  <td className="text-center py-4 px-6">1次</td>
                  <td className="text-center py-4 px-6">无限</td>
                  <td className="text-center py-4 px-6">20次</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">基础分析</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">高级AI分析</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">API 访问</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">实时数据更新</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              常见问题
            </h2>
          </div>
          
          <div className="mx-auto max-w-3xl space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">积分包的积分会过期吗？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  不会！购买的积分永不过期，您可以按照自己的节奏使用。每次搜索消耗5个积分。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">月度订阅可以随时取消吗？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  是的，月度订阅可以随时取消，取消后当月仍可继续使用，下月不会再扣费。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">体验版包含哪些功能？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  体验版提供一次完整的产品搜索体验，包括基础搜索功能和产品分析报告，有效期24小时。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Rocket className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              准备开始您的产品搜索之旅？
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              选择最适合您的方案，立即开始体验强大的产品搜索功能。
            </p>
            <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400 text-lg px-8 py-6">
                立即开始体验
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              $0.99 体验版 • 月度订阅 • 积分包可选
            </p>
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