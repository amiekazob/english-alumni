'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-6">
            <AlertTriangle className="w-16 h-16 text-red-600" />
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Something went wrong!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
              <p className="text-sm text-red-700 font-mono">{error.message}</p>
              {error.digest && (
                <p className="text-xs text-red-600 mt-2">Error ID: {error.digest}</p>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={reset}
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </Button>
          
          <Link href="/">
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            If this problem persists, please contact our technical support:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a 
              href="mailto:info@uap-bd.edu" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              📧 info@uap-bd.edu
            </a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span className="text-gray-600">📞 +880-2-8157091-4</span>
          </div>
        </div>
      </div>
    </div>
  )
}