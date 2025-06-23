"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface SubscriptionComingSoonModalProps {
  isOpen: boolean
  onClose: () => void
  onTry: () => void
}

export function SubscriptionComingSoonModal({ isOpen, onClose, onTry }: SubscriptionComingSoonModalProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700 text-white">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Subscription Coming Soon</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="h-6 w-6" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            Our subscription plans are launching soon. Please check back later!
          </p>
          <p className="text-gray-300 mt-2">
            In the meantime, you can try our service.
          </p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline" onClick={onClose} className="text-white border-gray-600 hover:bg-gray-700">
            Close
          </Button>
          <Button onClick={onTry} className="bg-cyan-500 text-black hover:bg-cyan-400">
            Try
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
