'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { trackCTAClick, trackExternalProductAccess } from "@/lib/analytics"

/**
 * Navigation component for the SnapSeeker landing page
 * Provides responsive navigation with active state management and language switching
 */
export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [sessionStartTime] = React.useState(Date.now())
  
  const handleCTAClick = (buttonText: string) => {
    trackCTAClick({
      ctaText: buttonText,
      ctaType: 'primary',
      pageSection: 'header',
      destinationUrl: 'https://seeker.snapsnap.site/',
      conversionIntent: 'high'
    });
    
    trackExternalProductAccess({
      sourcePage: pathname.includes('/pricing') ? 'pricing' : 'homepage',
      accessMethod: 'navigation',
      userIntent: 'trial',
      sessionDurationBeforeJump: Date.now() - sessionStartTime
    });
  };
  
  // Determine if we're on English pages
  const isEnglish = pathname.startsWith('/en')
  
  // Navigation items based on language
  const navigationItems = isEnglish ? [
    { href: "/en", label: "Home" },
    { href: "/en/pricing", label: "Pricing" },
  ] : [
    { href: "/", label: "首页" },
    { href: "/pricing", label: "定价" },
  ]
  
  // Language toggle
  const languageToggle = isEnglish ? 
    { href: pathname.replace('/en', '') || '/', label: '中文' } :
    { href: `/en${pathname}`, label: 'EN' }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500">
              <span className="text-sm font-bold text-black">S</span>
            </div>
            <span className="text-xl font-bold text-white">SnapSeeker</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-cyan-400",
                  pathname === item.href
                    ? "text-cyan-400"
                    : "text-gray-300"
                )}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <Link
              href={languageToggle.href}
              className="flex items-center space-x-1 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400"
            >
              <Globe className="w-4 h-4" />
              <span>{languageToggle.label}</span>
            </Link>
            
            {/* Discord Link */}
            <a 
              href="https://discord.gg/CSkT2BdNKy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 transition-colors hover:text-cyan-400"
              title={isEnglish ? 'Join Discord Community' : '加入Discord社区'}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            
            <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer">
              <Button 
                className="bg-cyan-500 text-black hover:bg-cyan-400"
                size="sm"
                onClick={() => handleCTAClick(isEnglish ? 'Try Now' : '立即体验')}
              >
                {isEnglish ? 'Try Now' : '立即体验'}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="space-y-1">
              <div className={cn(
                "h-0.5 w-6 bg-gray-300 transition-all",
                isMobileMenuOpen && "rotate-45 translate-y-1.5"
              )} />
              <div className={cn(
                "h-0.5 w-6 bg-gray-300 transition-all",
                isMobileMenuOpen && "opacity-0"
              )} />
              <div className={cn(
                "h-0.5 w-6 bg-gray-300 transition-all",
                isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="border-t border-gray-800 py-4 md:hidden">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-400",
                    pathname === item.href
                      ? "text-cyan-400"
                      : "text-gray-300"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <Link
                href={languageToggle.href}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Globe className="w-4 h-4" />
                <span>{languageToggle.label}</span>
              </Link>
              
              {/* Mobile Discord Link */}
              <a 
                href="https://discord.gg/CSkT2BdNKy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                <span>{isEnglish ? 'Discord Community' : 'Discord社区'}</span>
              </a>
              
              <a href="https://seeker.snapsnap.site/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button 
                  className="bg-cyan-500 text-black hover:bg-cyan-400 w-full"
                  size="sm"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleCTAClick(isEnglish ? 'Try Now' : '立即体验');
                  }}
                >
                  {isEnglish ? 'Try Now' : '立即体验'}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}