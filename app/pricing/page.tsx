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
  const firstRowPlans = [
    {
      name: "体验版",
      description: "快速体验产品功能",
      price: "$0.99",
      originalPrice: null,
      icon: Zap,
      popular: false,
      features: [
        "一次完整的基础体验",
        "基础竞品搜索功能",
        "基础市场收敛分析",
        "基础AI执行上下文文档",
        "24小时访问权限"
      ],
      buttonText: "立即体验",
      buttonVariant: "outline" as const,
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
        "100积分（大约20次搜索）",
        "每次搜索最低5积分起",
        "积分永不过期",
        "所有基础功能",
        "基础AI执行上下文文档"
      ],
      buttonText: "购买积分",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "高级扩展",
      description: "专业功能扩展包",
      price: "$9.9",
      originalPrice: null,
      icon: Rocket,
      popular: false,
      features: [
        "定制化的产品卡片",
        "PMF分析和建议",
        "竞品模块prompt拆解",
        "高级AI分析功能",
        "专属客服支持"
      ],
      buttonText: "开始订阅",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    }
  ]

  const secondRowPlans = [
    {
      name: "月度套餐",
      description: "适合频繁使用的用户",
      price: "$19",
      originalPrice: null,
      icon: Star,
      popular: true,
      features: [
        "1个月无限次搜索",
        "所有基础功能",
        "优先客服支持",
        "基础AI执行上下文文档",
        "数据导出功能"
      ],
      buttonText: "开始订阅",
      buttonVariant: "default" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "季度套餐",
      description: "更优惠的长期方案",
      price: "$49",
      originalPrice: null,
      icon: Star,
      popular: false,
      features: [
        "3个月无限次搜索",
        "所有基础功能",
        "优先客服支持",
        "基础AI执行上下文文档",
        "数据导出功能"
      ],
      buttonText: "开始订阅",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "年度套餐",
      description: "最具性价比的选择",
      price: "$99",
      originalPrice: null,
      icon: Star,
      popular: false,
      features: [
        "12个月无限次搜索",
        "所有基础功能",
        "优先客服支持",
        "基础AI执行上下文文档",
        "数据导出功能"
      ],
      buttonText: "开始订阅",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
              🚀 灵活定价方案
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              选择适合您的
              <span className="gradient-text">使用方式</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              体验版、积分包、高级扩展和订阅套餐，满足不同使用需求。
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 lg:pb-32">
        <div className="container px-4 mx-auto">
          {/* First Row */}
          <div className="grid gap-6 mb-12 md:grid-cols-3">
            {firstRowPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card 
                  key={plan.name} 
                  className={`relative bg-gray-800/50 border-gray-700 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1 font-semibold text-black bg-cyan-500">
                        🔥 最受欢迎
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        plan.popular ? 'bg-cyan-500/20' : 'bg-gray-700/50'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${
                          plan.popular ? 'text-cyan-400' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="mt-2 text-gray-300">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="ml-2 text-gray-400">
                          {plan.name === "积分包" ? "100积分" : 
                           plan.name === "高级扩展" ? "每月" : "一次体验"}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-3 items-center">
                          <Check className="flex-shrink-0 w-5 h-5 text-cyan-400" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="mt-auto">
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
          
          {/* Second Row */}
          <div className="grid gap-6 md:grid-cols-3">
            {secondRowPlans.map((plan, index) => {
              const IconComponent = plan.icon
              return (
                <Card 
                  key={plan.name} 
                  className={`relative bg-gray-800/50 border-gray-700 ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="px-4 py-1 font-semibold text-black bg-cyan-500">
                        🔥 最受欢迎
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${
                        plan.popular ? 'bg-cyan-500/20' : 'bg-gray-700/50'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${
                          plan.popular ? 'text-cyan-400' : 'text-gray-400'
                        }`} />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    <CardDescription className="mt-2 text-gray-300">
                      {plan.description}
                    </CardDescription>
                    <div className="mt-6">
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="ml-2 text-gray-400">
                          {plan.name === "月度套餐" ? "每月" : 
                           plan.name === "季度套餐" ? "每季度" :
                           plan.name === "年度套餐" ? "每年" : ""}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex gap-3 items-center">
                          <Check className="flex-shrink-0 w-5 h-5 text-cyan-400" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="mt-auto">
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
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
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
                  <th className="px-4 py-4 font-semibold text-left text-white">功能</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">体验版</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">积分包</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">高级扩展</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">月度版</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">季度版</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">年度版</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">搜索次数</td>
                  <td className="px-2 py-4 text-center">1次</td>
                  <td className="px-2 py-4 text-center">约20次</td>
                  <td className="px-2 py-4 text-center">无限</td>
                  <td className="px-2 py-4 text-center">无限</td>
                  <td className="px-2 py-4 text-center">无限</td>
                  <td className="px-2 py-4 text-center">无限</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">基础功能</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">AI执行上下文文档</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">优先客服支持</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">定制化产品卡片</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">PMF分析和建议</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">竞品模块prompt拆解</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              常见问题
            </h2>
          </div>
          
          <div className="mx-auto space-y-6 max-w-3xl">
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">积分包的积分会过期吗？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  不会！购买的积分永不过期，您可以按照自己的节奏使用。每次搜索消耗5个积分。
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <CardTitle className="text-white">月度订阅可以随时取消吗？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  是的，月度订阅可以随时取消，取消后当月仍可继续使用，下月不会再扣费。
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
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
      <section className="py-20 bg-gradient-to-r lg:py-32 from-cyan-500/10 to-blue-500/10">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <Rocket className="mx-auto mb-6 w-16 h-16 text-cyan-400" />
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              准备开始您的产品搜索之旅？
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              选择最适合您的方案，立即开始体验强大的产品搜索功能。
            </p>
            <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-6 text-lg text-black bg-cyan-500 hover:bg-cyan-400">
                立即开始体验
              </Button>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              $0.99 体验版 • 积分包 • 高级扩展 • 月度/季度/年度订阅
            </p>
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
            <p className="text-sm text-gray-400">
              © 2024 SnapSeeker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}