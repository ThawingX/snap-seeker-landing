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
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="px-8 py-6 w-full text-lg text-black bg-cyan-500 hover:bg-cyan-400 sm:w-auto"
                >
                  Start Building PRD
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg text-white border-gray-600 hover:bg-gray-800"
                onClick={() => {
                  document.querySelector('#demo-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Product Hunt Badge */}
            <div className="flex justify-center mt-8">
              <a 
                href="https://www.producthunt.com/products/snapseeker?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-snapseeker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=982626&theme=light&t=1750783108447" 
                  alt="SnapSeeker - Get your MVP right, find your PMF fast. | Product Hunt" 
                  style={{width: '250px', height: '54px'}} 
                  width="250" 
                  height="54" 
                  className="rounded-lg shadow-lg"
                />
              </a>
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
              Why Choose SnapSeeker?
            </h2>
            <p className="text-xl text-gray-300">
              We provide comprehensive idea refinement and PRD generation solutions to make your entrepreneurial journey smoother.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Rapid Validation</CardTitle>
                <CardDescription className="text-gray-300">
                  Help your ideas combine with competitors and market trends within minutes to derive reasonable MVP feature solutions.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Deep Analysis</CardTitle>
                <CardDescription className="text-gray-300">
                  Starting from competitive research, combining demand heat and market trends, converging to the most core key points to form requirement cards.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-gray-700 bg-gray-800/50">
              <CardHeader>
                <div className="flex justify-center items-center mb-4 w-12 h-12 rounded-lg bg-cyan-500/10">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <CardTitle className="text-white">Business Success</CardTitle>
                <CardDescription className="text-gray-300">
                  Provide structured PRD templates and agent context to help you quickly validate your ideas and find product-market fit.
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how other entrepreneurs use SnapSeeker to achieve product success.
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
                    <CardTitle className="text-white">SaaS Startup</CardTitle>
                    <CardDescription className="text-gray-300">xxx LLC.</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  "We were in the exploration phase. After using SnapSeeker, we quickly landed our idea into an MVP prototype solution. Based on this solution, we generated prototypes, marketing stories, and project demos, distributed them on social media and distribution channels to validate the authenticity of our ideas, saving us a lot of time."
                </p>
                <div className="flex gap-2 items-center">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">Rapid MVP Landing</span>
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
                    <CardTitle className="text-white">Solo Company</CardTitle>
                    <CardDescription className="text-gray-300">Independent Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  "I used to try using AI to directly generate requirement documents, but there were often trust issues. After using SnapSeeker, it eliminated my lack of trust in AI-generated requirement documents. I can directly use SnapSeeker's output as the startup document for my project."
                </p>
                <div className="flex gap-2 items-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-green-400">Enhanced AI Trust</span>
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
              Demo Walkthrough
            </h2>
            <p className="text-xl text-gray-300">
              See how SnapSeeker helps you quickly refine ideas and generate PRDs.
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="overflow-hidden relative bg-gray-800 rounded-lg border border-gray-700 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yLt7zT_yJCc?rel=0&modestbranding=1&showinfo=0"
                title="SnapSeeker Product Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r lg:py-32 from-cyan-500/10 to-blue-500/10">
        <div className="container px-4 mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-xl text-gray-300">
              Join thousands of successful entrepreneurs and let SnapSeeker help you quickly refine ideas and generate PRDs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="px-8 py-6 w-full text-lg text-black bg-cyan-500 hover:bg-cyan-400 sm:w-auto"
                >
                  Start Building PRD
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link href="/en/pricing">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-6 w-full text-lg text-white border-gray-600 hover:bg-gray-800"
                >
                  View Pricing Plans
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
                Contact us: <a href="mailto:xdylanlong@gmail.com" className="text-cyan-400 hover:text-cyan-300">xdylanlong@gmail.com</a>
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