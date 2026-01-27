import Link from 'next/link'
import { getAllCategories } from '@/lib/questionBank'

export default function Home() {
  const categories = getAllCategories()

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">MCCQE1</span>
            <span className="text-2xl font-bold text-indigo-600">Tutor</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            MCCQE1 Tutor
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Master the Medical Council of Canada Qualifying Examination with adaptive learning
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">50+ Questions</h3>
              <p className="text-gray-600">Comprehensive question bank covering all MCCQE1 domains</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adaptive Learning</h3>
              <p className="text-gray-600">Personalized study plans that evolve with your performance</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Spaced Repetition</h3>
              <p className="text-gray-600">Smart review system for long-term retention</p>
            </div>
          </div>

          <div className="mt-12 flex gap-4 justify-center">
            <Link 
              href="/practice"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Practicing Now
            </Link>
            <Link 
              href="/dashboard"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors border border-gray-300"
            >
              View Dashboard
            </Link>
          </div>

          {/* Subjects Overview */}
          <div className="mt-16 text-left bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Subjects Covered</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((cat) => (
                <span key={cat} className="inline-block bg-blue-50 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
            <p className="text-gray-700 mb-4">
              Our comprehensive question bank covers all major medical disciplines including:
            </p>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li><strong>Medicine:</strong> Cardiology, Endocrinology, Respiratory, Gastroenterology, Neurology, Psychiatry, Infectious Diseases</li>
              <li><strong>Surgery:</strong> General Surgery, Vascular Surgery, Urology, Breast Surgery</li>
              <li><strong>Pediatrics:</strong> Infectious Diseases, Respiratory, Gastroenterology, Cardiology</li>
              <li><strong>Specialties:</strong> Dermatology, Ophthalmology, Otolaryngology, Rheumatology, Hematology, Nephrology</li>
            </ul>
          </div>

          {/* Features */}
          <div className="mt-16 text-left bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose MCCQE1 Tutor?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Targeted Practice</h3>
                  <p className="text-gray-600 text-sm">Focus on weak areas with intelligent question selection</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Detailed Analytics</h3>
                  <p className="text-gray-600 text-sm">Track your progress with comprehensive statistics</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Spaced Repetition</h3>
                  <p className="text-gray-600 text-sm">Review questions at optimal intervals for retention</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Exam Simulation</h3>
                  <p className="text-gray-600 text-sm">Practice under timed conditions to build stamina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Ace Your MCCQE1?</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Join thousands of medical students who have improved their scores with our adaptive learning platform.
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/register"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Create Free Account
              </Link>
              <Link 
                href="/login"
                className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            MCCQE1 Tutor © 2025 | Built for medical students preparing for the Canadian licensing exam
          </p>
          <p className="text-xs mt-2 text-gray-500">
            This is a demo application. Questions are for educational purposes only.
          </p>
        </div>
      </footer>
    </main>
  )
}
