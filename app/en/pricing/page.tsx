import * as React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SubscriptionComingSoonModal } from "@/components/ui/SubscriptionComingSoonModal"
import { Navigation } from "@/components/navigation"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"

/**
 * English Pricing page component for SnapSeeker
 * Features different pricing tiers with one-time payment options
 */
export default function EnglishPricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalLink, setModalLink] = useState("")

  const handleSubscriptionClick = (link: string) => {
    setModalLink(link)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setModalLink("")
  }

  const handleModalTry = () => {
    if (modalLink) {
      window.open(modalLink, "_blank", "noopener noreferrer")
    }
    handleModalClose()
  }

  const firstRowPlans = [
    {
      name: "Trial Version",
      description: "Quick product experience",
      price: "$0.99",
      originalPrice: null,
      icon: Zap,
      popular: false,
      features: [
        "One complete basic experience",
        "Basic competitor search function",
        "Basic market convergence analysis",
        "Basic AI execution context document",
        "24-hour access"
      ],
      buttonText: "Try Now",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "Credit Pack",
      description: "Flexible usage, pay as needed",
      price: "$10",
      originalPrice: null,
      icon: Crown,
      popular: false,
      features: [
        "100 credits (about 20 searches)",
        "Minimum 5 credits per search",
        "Credits never expire",
        "All basic functions",
        "Basic AI execution context document"
      ],
      buttonText: "Buy Credits",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "Advanced Extension",
      description: "Professional feature extension pack",
      price: "$9.9",
      originalPrice: null,
      icon: Rocket,
      popular: false,
      features: [
        "Customized product cards",
        "PMF analysis and recommendations",
        "Competitor module prompt breakdown",
        "Advanced AI analysis features",
        "Dedicated customer support"
      ],
      buttonText: "Subscribe",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    }
  ]

  const secondRowPlans = [
    {
      name: "Monthly Plan",
      description: "Suitable for frequent users",
      price: "$19",
      originalPrice: null,
      icon: Star,
      popular: true,
      features: [
        "1 month unlimited searches",
        "All basic functions",
        "Priority customer support",
        "Basic AI execution context document",
        "Data export function"
      ],
      buttonText: "Subscribe",
      buttonVariant: "default" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "Quarterly Plan",
      description: "More affordable long-term solution",
      price: "$49",
      originalPrice: null,
      icon: Star,
      popular: false,
      features: [
        "3 months unlimited searches",
        "All basic functions",
        "Priority customer support",
        "Basic AI execution context document",
        "Data export function"
      ],
      buttonText: "Subscribe",
      buttonVariant: "outline" as const,
      buttonLink: "https://seeker.snapsnap.site/"
    },
    {
      name: "Annual Plan",
      description: "Most cost-effective choice",
      price: "$99",
      originalPrice: null,
      icon: Star,
      popular: false,
      features: [
        "12 months unlimited searches",
        "All basic functions",
        "Priority customer support",
        "Basic AI execution context document",
        "Data export function"
      ],
      buttonText: "Subscribe",
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
              🚀 Flexible Pricing Plans
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Choose the Right
              <span className="gradient-text">Usage Plan</span>
            </h1>
            <p className="mb-8 text-xl text-gray-300">
              Trial version, credit packs, advanced extensions, and subscription plans to meet different usage needs.
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
                        🔥 Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${plan.popular ? 'bg-cyan-500/20' : 'bg-gray-700/50'
                        }`}>
                        <IconComponent className={`h-8 w-8 ${plan.popular ? 'text-cyan-400' : 'text-gray-400'
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
                          {plan.name === "Credit Pack" ? "100 credits" :
                            plan.name === "Advanced Extension" ? "per month" : "one experience"}
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
                    {plan.buttonText === "Subscribe" ? (
                      <Button
                        className={`w-full ${plan.popular
                            ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                            : 'border-gray-600 text-white hover:bg-gray-800'
                          }`}
                        variant={plan.buttonVariant}
                        size="lg"
                        onClick={() => handleSubscriptionClick(plan.buttonLink)}
                      >
                        {plan.buttonText}
                      </Button>
                    ) : (
                      <a href={plan.buttonLink} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                          className={`w-full ${plan.popular
                              ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                              : 'border-gray-600 text-white hover:bg-gray-800'
                            }`}
                          variant={plan.buttonVariant}
                          size="lg"
                        >
                          {plan.buttonText}
                        </Button>
                      </a>
                    )}
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
                        🔥 Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="pb-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${plan.popular ? 'bg-cyan-500/20' : 'bg-gray-700/50'
                        }`}>
                        <IconComponent className={`h-8 w-8 ${plan.popular ? 'text-cyan-400' : 'text-gray-400'
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
                          {plan.name === "Monthly Plan" ? "per month" :
                            plan.name === "Quarterly Plan" ? "per quarter" :
                              plan.name === "Annual Plan" ? "per year" : ""}
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
                    {plan.buttonText === "Subscribe" ? (
                      <Button
                        className={`w-full ${plan.popular
                            ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                            : 'border-gray-600 text-white hover:bg-gray-800'
                          }`}
                        variant={plan.buttonVariant}
                        size="lg"
                        onClick={() => handleSubscriptionClick(plan.buttonLink)}
                      >
                        {plan.buttonText}
                      </Button>
                    ) : (
                      <a href={plan.buttonLink} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                          className={`w-full ${plan.popular
                              ? 'bg-cyan-500 text-black hover:bg-cyan-400'
                              : 'border-gray-600 text-white hover:bg-gray-800'
                            }`}
                          variant={plan.buttonVariant}
                          size="lg"
                        >
                          {plan.buttonText}
                        </Button>
                      </a>
                    )}
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
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-300">
              Detailed overview of features included in each version.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="px-4 py-4 font-semibold text-left text-white">Features</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">Trial Version</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">Credit Pack</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">Advanced Extension</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">Monthly Plan</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">Quarterly Plan</th>
                  <th className="px-2 py-4 text-sm font-semibold text-center text-white">Annual Plan</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">Search Count</td>
                  <td className="px-2 py-4 text-center">1 time</td>
                  <td className="px-2 py-4 text-center">~20 times</td>
                  <td className="px-2 py-4 text-center">Unlimited</td>
                  <td className="px-2 py-4 text-center">Unlimited</td>
                  <td className="px-2 py-4 text-center">Unlimited</td>
                  <td className="px-2 py-4 text-center">Unlimited</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">Basic Features</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">AI Execution Context Documentation</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">Priority Customer Support</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">Customized Product Cards</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">PMF Analysis and Recommendations</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center"><Check className="mx-auto w-4 h-4 text-cyan-400" /></td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                  <td className="px-2 py-4 text-center">-</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-4">Competitor Module Prompt Breakdown</td>
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
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-gray-300">
              Everything you need to know about our pricing and features
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="space-y-6">
              <Card className="border-gray-700 bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Do credits in the credit pack expire?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    No! Purchased credits never expire, and you can use them at your own pace. Each search consumes 5 credits.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-700 bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">Can monthly subscriptions be canceled at any time?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Yes, monthly subscriptions can be canceled at any time. After cancellation, you can continue to use the service for the current month, and no charges will be made for the next month.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-700 bg-gray-800/50">
                <CardHeader>
                  <CardTitle className="text-white">What features does the trial version include?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    The trial version provides one complete product search experience, including basic search functionality and product analysis reports, valid for 24 hours.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
              Ready to Transform Your Product Development?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Join thousands of product managers who trust SnapSeeker for intelligent requirement analysis
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://snapseeker.ai" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-black bg-cyan-500 hover:bg-cyan-400">
                  Start Free Trial
                </Button>
              </a>
              <a href="https://snapseeker.ai/contact" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-white border-gray-600 hover:bg-gray-800">
                  Contact Sales
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <h3 className="mb-4 text-xl font-bold text-white">SnapSeeker</h3>
              <p className="mb-4 text-gray-300">
                AI-powered intelligent product requirement analysis platform, helping product managers create professional PRDs efficiently.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/snapseeker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="https://linkedin.com/company/snapseeker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="https://github.com/snapseeker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/en" className="hover:text-white">Features</a></li>
                <li><a href="/en/pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="https://snapseeker.ai/api" target="_blank" rel="noopener noreferrer" className="hover:text-white">API</a></li>
                <li><a href="https://docs.snapseeker.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="https://snapseeker.ai/about" target="_blank" rel="noopener noreferrer" className="hover:text-white">About</a></li>
                <li><a href="https://blog.snapseeker.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white">Blog</a></li>
                <li><a href="https://snapseeker.ai/careers" target="_blank" rel="noopener noreferrer" className="hover:text-white">Careers</a></li>
                <li><a href="https://snapseeker.ai/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 SnapSeeker. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <SubscriptionComingSoonModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onTry={handleModalTry}
      />
    </div>
  )
}