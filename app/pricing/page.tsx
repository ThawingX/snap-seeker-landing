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
      name: "入门版",
      description: "适合个人创业者和小团队",
      price: "¥299",
      originalPrice: "¥599",
      icon: Zap,
      popular: false,
      features: [
        "最多 3 个产品项目",
        "基础用户分析",
        "邮件支持",
        "数据导出功能",
        "7天免费试用",
        "基础模板库"
      ],
      buttonText: "立即购买",
      buttonVariant: "outline" as const
    },
    {
      name: "专业版",
      description: "适合成长中的初创公司",
      price: "¥899",
      originalPrice: "¥1,799",
      icon: Star,
      popular: true,
      features: [
        "无限产品项目",
        "高级用户分析",
        "AI 驱动的洞察",
        "优先客服支持",
        "高级数据导出",
        "自定义报告",
        "团队协作功能",
        "API 访问权限"
      ],
      buttonText: "立即购买",
      buttonVariant: "default" as const
    },
    {
      name: "企业版",
      description: "适合大型团队和企业",
      price: "¥2,999",
      originalPrice: "¥5,999",
      icon: Crown,
      popular: false,
      features: [
        "专业版所有功能",
        "白标解决方案",
        "专属客户经理",
        "定制化开发",
        "本地部署选项",
        "高级安全功能",
        "无限团队成员",
        "24/7 技术支持"
      ],
      buttonText: "联系销售",
      buttonVariant: "outline" as const
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
              💰 限时优惠 50% OFF
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              选择适合您的
              <span className="gradient-text">定价方案</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              一次性付费，终身使用。没有月费，没有隐藏费用。
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
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          {plan.originalPrice}
                        </span>
                        <Badge variant="destructive" className="text-xs">
                          50% OFF
                        </Badge>
                      </div>
                      <div className="mt-2">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">一次性付费</span>
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
                  <th className="text-center py-4 px-6 text-white font-semibold">入门版</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">专业版</th>
                  <th className="text-center py-4 px-6 text-white font-semibold">企业版</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">产品项目数量</td>
                  <td className="text-center py-4 px-6">3个</td>
                  <td className="text-center py-4 px-6">无限</td>
                  <td className="text-center py-4 px-6">无限</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">用户分析</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">AI 洞察</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">API 访问</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">白标解决方案</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6">-</td>
                  <td className="text-center py-4 px-6"><Check className="h-5 w-5 text-cyan-400 mx-auto" /></td>
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
                <CardTitle className="text-white">为什么选择一次性付费？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  我们相信简单透明的定价模式。一次性付费意味着没有月费压力，您可以按照自己的节奏使用产品。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">是否提供退款保证？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  是的，我们提供 30 天无条件退款保证。如果您不满意，可以申请全额退款。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">可以升级套餐吗？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  当然可以！您可以随时升级到更高级的套餐，只需支付差价即可。
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
              准备开始您的创业之旅？
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              选择最适合您的方案，立即开始验证您的产品想法。
            </p>
            <Button size="lg" className="bg-cyan-500 text-black hover:bg-cyan-400 text-lg px-8 py-6">
              开始 7 天免费试用
            </Button>
            <p className="mt-4 text-sm text-gray-400">
              无需信用卡 • 随时取消 • 30天退款保证
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