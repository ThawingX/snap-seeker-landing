"use client"

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