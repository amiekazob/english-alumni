import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-900 opacity-20 select-none">
            404
          </h1>
          <div className="-mt-16">
            <div className="w-32 h-32 mx-auto bg-blue-900 rounded-full flex items-center justify-center mb-6">
              <span className="text-white font-bold text-2xl">UAP</span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, let's get you back on track!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-3">
            <Link href="javascript:history.back()" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href="/committee" 
              className="text-blue-900 hover:text-orange-600 hover:underline transition-colors"
            >
              Faculty Members
            </Link>
            <Link 
              href="/programs/bsc-eee" 
              className="text-blue-900 hover:text-orange-600 hover:underline transition-colors"
            >
              BSc in EEE
            </Link>
            <Link 
              href="/news" 
              className="text-blue-900 hover:text-orange-600 hover:underline transition-colors"
            >
              Latest News
            </Link>
            <Link 
              href="/about" 
              className="text-blue-900 hover:text-orange-600 hover:underline transition-colors"
            >
              About Department
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-sm text-gray-500">
          <p className="mb-2">
            Need help? Contact us at{" "}
            <a 
              href="mailto:info@uap-bd.edu" 
              className="text-blue-900 hover:text-orange-600 transition-colors"
            >
              info@uap-bd.edu
            </a>
          </p>
          <p>
            Or call us at{" "}
            <a 
              href="tel:+880-2-8157091" 
              className="text-blue-900 hover:text-orange-600 transition-colors"
            >
              +880-2-8157091-4
            </a>
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-5 w-12 h-12 bg-orange-300 rounded-full opacity-10 animate-bounce"></div>
      </div>
    </div>
  )
}