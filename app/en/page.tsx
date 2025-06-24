'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ArrowRight, CheckCircle, Users, TrendingUp, Zap, Target, BarChart3, Lightbulb } from "lucide-react"

/**
 * English Home page component for SnapSeeker landing page
 * Features hero section, product value proposition, user cases, and demo
 */
export default function EnglishHomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="overflow-hidden relative py-20 lg:py-32">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 text-cyan-400 bg-cyan-500/10 border-cyan-500/20">
              🚀 Rapidly Perfect Ideas and PRD
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Perfect Your <span className="gradient-text">Idea</span>.
              <br />
              Build Your <span className="gradient-text">PRD</span> Fast.
            </h1>
            <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
              Transform your ideas into detailed Product Requirements Documents with AI-powered analysis and structured templates.
            </p>
            <div className="flex flex-col gap-4 justify-center items-center sm:flex-row">
              <Button 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold text-black bg-white hover:bg-gray-100"
                asChild
              >
                <Link href="https://seeker.snapsnap.site/" target="_blank">
                  Start Building PRD
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold text-white bg-transparent border-white hover:bg-white hover:text-black"
                onClick={() => {
                  document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Why Choose SnapSeeker?
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              Streamline your product development process with intelligent PRD generation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 bg-blue-500/10 rounded-lg">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">Lightning Fast</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Generate comprehensive PRDs in minutes, not days. Our AI understands your requirements and creates structured documents instantly.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 bg-green-500/10 rounded-lg">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Precision Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Every PRD is tailored to your specific needs with detailed user stories, acceptance criteria, and technical specifications.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 bg-purple-500/10 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <CardTitle className="text-white">Data Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">
                  Built-in analytics and insights help you make informed decisions about your product features and roadmap.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Cases */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Perfect for Every Team
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              From startups to enterprises, SnapSeeker adapts to your workflow
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl border border-blue-500/20">
              <div className="flex items-center mb-4">
                <Users className="mr-3 w-8 h-8 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Product Managers</h3>
              </div>
              <p className="mb-6 text-gray-300">
                Create detailed PRDs that align stakeholders and guide development teams with clear, actionable requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="mr-2 w-5 h-5 text-green-400" />
                  Stakeholder alignment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="mr-2 w-5 h-5 text-green-400" />
                  Clear acceptance criteria
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="mr-2 w-5 h-5 text-green-400" />
                  Risk assessment
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl border border-green-500/20">
              <div className="flex items-center mb-4">
                <TrendingUp className="mr-3 w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">Startup Founders</h3>
              </div>
              <p className="mb-6 text-gray-300">
                Transform your vision into executable plans that investors and developers can understand and support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="mr-2 w-5 h-5 text-green-400" />
                  Investor-ready documentation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="mr-2 w-5 h-5 text-green-400" />
                  MVP planning
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="mr-2 w-5 h-5 text-green-400" />
                  Market validation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section id="demo-section" className="py-20 bg-gray-900/50">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              See SnapSeeker in Action
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              Watch how easy it is to create professional PRDs
            </p>
            
            {/* YouTube Video Embed */}
            <div className="relative mx-auto max-w-4xl">
              <div className="overflow-hidden relative bg-gray-800 rounded-2xl border border-gray-700 aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/yLt7zT_yJCc"
                  title="SnapSeeker Demo"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Ready to Perfect Your Ideas?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Join thousands of product teams already using SnapSeeker
            </p>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold text-black bg-white hover:bg-gray-100"
              asChild
            >
              <Link href="https://seeker.snapsnap.site/" target="_blank">
                Start Building Your PRD
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col justify-between items-center md:flex-row">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white">SnapSeeker</h3>
              <p className="text-gray-400">Perfect Your Idea, Build Your PRD Fast</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/en/pricing" className="text-gray-400 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="https://seeker.snapsnap.site/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                Product
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}