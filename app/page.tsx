import {
  Search,
  ChevronDown,
  Star,
  Play,
  Clock,
  BarChart3,
  Globe,
  Award,
  User,
  BookOpen,
  Check,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-blue-600">
            Courses
          </a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Introduction to DevOps</span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Course Summary Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
            {/* Left Side - Course Info */}
            <div className="flex-1 lg:pr-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-black">Introduction to DevOps</h1>
                    <Badge className="bg-red-100 text-red-800 hover:bg-red-100 text-xs">Trending</Badge>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">
                    Master the fundamentals of DevOps practices, tools, and methodologies. Learn automation, CI/CD, and
                    bridge the gap between development and operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 mb-4">
                <div className="flex items-center text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-medium">John Smith</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>12 hours</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  <span>Beginner</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">(4.8) • 2,847 reviews</span>
                </div>
              </div>

              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 rounded-full px-3 py-1">
                Cloud Computing
              </Badge>
            </div>

            {/* Right Side - Pricing */}
            <div className="mt-6 lg:mt-0 lg:flex-shrink-0">
              <div className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200 min-w-[200px]">
                <div className="mb-4">
                  <span className="text-3xl font-bold text-black">₹2,999</span>
                  <span className="text-lg text-gray-500 line-through ml-2">₹4,999</span>
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-lg">
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Video Preview */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-black mb-4">Course Preview</h2>
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all cursor-pointer">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
                <img
                  src="/placeholder.svg?height=360&width=640"
                  alt="Course preview thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Course Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-black mb-4">Course Details</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">Duration</span>
                  </div>
                  <span className="font-medium text-black">12 hours</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">Level</span>
                  </div>
                  <span className="font-medium text-black">Beginner</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">Language</span>
                  </div>
                  <span className="font-medium text-black">English</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-gray-600">Certificate</span>
                  </div>
                  <span className="font-medium text-black">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Description Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-6">Course Description</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            This comprehensive DevOps course is designed to provide you with a solid foundation in DevOps practices,
            tools, and methodologies. You'll learn how to streamline software development and deployment processes,
            implement continuous integration and continuous deployment (CI/CD) pipelines, and foster collaboration
            between development and operations teams. The course covers essential DevOps tools, infrastructure as code,
            monitoring, and best practices that are widely adopted in the industry.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What You'll Learn */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">DevOps fundamentals and core principles</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">CI/CD pipeline design and implementation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Infrastructure as Code (IaC) with Terraform</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Container orchestration with Docker and Kubernetes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Monitoring and logging best practices</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Security integration in DevOps workflows</span>
                </li>
              </ul>
            </div>

            {/* Requirements & Target Audience */}
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Requirements</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">Basic understanding of software development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">Familiarity with command line interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">Basic knowledge of Linux/Unix systems</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-black mb-4">Target Audience</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">Software developers and engineers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">System administrators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">IT professionals seeking DevOps skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span className="text-gray-700">Project managers in tech companies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-2 bg-transparent"
            >
              Browse More Courses
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-300 leading-relaxed">
                MITS is a leading technology education platform providing high-quality courses in software development,
                cloud computing, and emerging technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    All Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Corporate Training
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Certification
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Career Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>123 Tech Street</p>
                <p>Bangalore, Karnataka 560001</p>
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@mits.edu</p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 MITS. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
